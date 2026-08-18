/**
 * Salesforce 文档批量下载脚本
 *
 * 通过 CDP 连接到已打开的 Chrome 浏览器,在浏览器上下文中执行 fetch
 * 来绕过 Salesforce 的 WAF 防护,批量下载官方文档的英文原文。
 *
 * 用法:
 *   node scripts/download-docs.mjs <CDP_WS_URL>
 *
 * 若不传参数,会自动从 agent-browser 获取 CDP URL。
 */

import puppeteer from 'puppeteer-core'
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

// ─── 配置 ───────────────────────────────────────────
const OUTPUT_DIR = path.resolve(process.cwd(), 'raw-docs')

const GUIDES = [
  {
    name: 'Apex Developer Guide',
    treeUrl: 'https://developer.salesforce.com/docs/get_document/atlas.en-us.apexcode.meta',
    contentPrefix: 'apexcode',
    outputDir: 'apex-developer-guide',
  },
  {
    name: 'Apex Reference Guide',
    treeUrl: 'https://developer.salesforce.com/docs/get_document/atlas.en-us.apexref.meta',
    contentPrefix: 'apexref',
    outputDir: 'apex-reference-guide',
  },
]

const DELAY_MS = 300 // 每次请求间隔(毫秒)
const BATCH_PAUSE = 50 // 每 N 个请求后暂停
const BATCH_PAUSE_MS = 2000 // 批次暂停时长
// ────────────────────────────────────────────────────

/**
 * 获取 CDP WebSocket URL
 */
function getCdpUrl() {
  if (process.argv[2]) return process.argv[2]
  try {
    const out = execSync('agent-browser get cdp-url', { encoding: 'utf-8' }).trim()
    if (out.startsWith('ws://')) return out
  } catch {}
  throw new Error('无法获取 CDP URL。请手动传入: node scripts/download-docs.mjs ws://...')
}

/**
 * 文件名/路径安全化
 */
function sanitize(name) {
  return String(name)
    .replace(/[<>:"/\\|?*\x00-\x1f]/g, '_')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 200)
}

/**
 * 从 a_attr.href 中提取实际的文档 ID
 * href 格式: "document_id.htm" 或 "document_id.htm#anchor"
 */
function extractDocId(node) {
  if (!node.id) return null

  // 优先从 a_attr.href 提取文档 ID（处理 Reference Guide 的锚点 ID）
  if (node.a_attr && node.a_attr.href) {
    const href = node.a_attr.href
    const htmIndex = href.indexOf('.htm')
    if (htmIndex > 0) {
      return href.substring(0, htmIndex)
    }
  }

  // 回退:直接使用 node.id
  return node.id
}

/**
 * 递归遍历 toc 树,收集所有文档节点
 * 自动去重:同一文档 ID 只保留第一次出现的路径
 */
function collectDocs(node, pathParts = [], seenIds = new Set()) {
  const docs = []
  const currentPath = [...pathParts, sanitize(node.text || node.id || 'untitled')]

  const docId = extractDocId(node)
  if (docId && !seenIds.has(docId)) {
    seenIds.add(docId)
    docs.push({
      id: docId,
      title: node.text || node.id,
      path: currentPath,
    })
  }

  if (node.children && Array.isArray(node.children)) {
    for (const child of node.children) {
      docs.push(...collectDocs(child, currentPath, seenIds))
    }
  }

  return docs
}

/**
 * 主函数
 */
async function main() {
  const cdpUrl = getCdpUrl()
  console.log(`CDP URL: ${cdpUrl}`)

  console.log('连接到浏览器...')
  const browser = await puppeteer.connect({
    browserWSEndpoint: cdpUrl,
  })

  const pages = await browser.pages()
  const page = pages[0]
  if (!page) throw new Error('没有打开的页面')
  console.log(`使用页面: ${await page.url()}`)

  fs.mkdirSync(OUTPUT_DIR, { recursive: true })

  for (const guide of GUIDES) {
    console.log(`\n${'='.repeat(60)}`)
    console.log(`处理: ${guide.name}`)
    console.log(`${'='.repeat(60)}`)

    // ── Step 1: 获取文档树 ──
    console.log('正在获取文档树...')
    const treeData = await page.evaluate(async (url) => {
      const response = await fetch(url)
      const data = await response.json()
      return {
        toc: data.toc,
        version: data.version?.doc_version || null,
        versionText: data.version?.version_text || null,
      }
    }, guide.treeUrl)

    if (!treeData.toc || !treeData.version) {
      console.error('无法获取文档树,跳过')
      continue
    }

    console.log(`版本: ${treeData.versionText} (doc_version: ${treeData.version})`)

    const guideDir = path.join(OUTPUT_DIR, guide.outputDir)
    fs.mkdirSync(guideDir, { recursive: true })

    // 保存 toc 供后续参考
    fs.writeFileSync(
      path.join(guideDir, 'toc.json'),
      JSON.stringify(treeData.toc, null, 2)
    )

    // ── Step 2: 收集所有文档 ──
    const allDocs = collectDocs(treeData.toc[0])
    console.log(`共发现 ${allDocs.length} 个文档`)

    // 保存文档列表
    fs.writeFileSync(
      path.join(guideDir, 'document-list.json'),
      JSON.stringify(allDocs.map((d) => ({ id: d.id, title: d.title, path: d.path })), null, 2)
    )

    // ── Step 3: 批量下载 ──
    let success = 0
    let failed = 0
    let skipped = 0
    const failedList = []

    for (let i = 0; i < allDocs.length; i++) {
      const doc = allDocs[i]
      const progress = `[${i + 1}/${allDocs.length}]`

      // 跳过已下载的文件（支持断点续传）
      const dirParts = doc.path.slice(0, -1)
      const dirPath = path.join(guideDir, ...dirParts)
      const fileName = `${sanitize(doc.id)}.html`
      const filePath = path.join(dirPath, fileName)

      if (fs.existsSync(filePath)) {
        skipped++
        if (skipped % 50 === 0) {
          console.log(`${progress} 跳过已存在: ${skipped}`)
        }
        continue
      }

      try {
        // 在浏览器上下文中执行 fetch
        const result = await page.evaluate(
          async (prefix, id, version) => {
            try {
              const url = `https://developer.salesforce.com/docs/get_document_content/${prefix}/${id}.htm/en-us/${version}`
              const response = await fetch(url)
              if (!response.ok) return { error: `HTTP ${response.status}` }
              const data = await response.json()
              return {
                content: data.content || '',
                title: data.title || '',
                id: data.id || '',
              }
            } catch (e) {
              return { error: e.message }
            }
          },
          guide.contentPrefix,
          doc.id,
          treeData.version
        )

        if (result.error) {
          failed++
          failedList.push({ id: doc.id, title: doc.title, error: result.error })
          if (failed <= 10) {
            console.log(`${progress} ✗ ${doc.id}: ${result.error}`)
          }
        } else if (!result.content || result.content.length === 0) {
          skipped++
        } else {
          // 创建目录结构
          fs.mkdirSync(dirPath, { recursive: true })

          // 保存 HTML 内容
          fs.writeFileSync(filePath, result.content)

          // 保存元数据
          fs.writeFileSync(
            path.join(dirPath, `${sanitize(doc.id)}.meta.json`),
            JSON.stringify(
              {
                id: doc.id,
                title: doc.title,
                apiTitle: result.title,
                path: doc.path,
              },
              null,
              2
            )
          )

          success++

          // 进度报告(只输出数字,不输出内容)
          if (success % 20 === 0 || i === allDocs.length - 1) {
            console.log(`${progress} 已下载: ${success} | 失败: ${failed} | 跳过: ${skipped}`)
          }
        }
      } catch (e) {
        failed++
        failedList.push({ id: doc.id, title: doc.title, error: e.message })
        if (failed <= 10) {
          console.log(`${progress} ✗ ${doc.id}: ${e.message}`)
        }
      }

      // 请求间隔
      await new Promise((r) => setTimeout(r, DELAY_MS))

      // 批次暂停
      if (i > 0 && i % BATCH_PAUSE === 0) {
        console.log(`  --- 暂停 ${BATCH_PAUSE_MS}ms 避免限流 ---`)
        await new Promise((r) => setTimeout(r, BATCH_PAUSE_MS))
      }
    }

    // 保存失败列表
    if (failedList.length > 0) {
      fs.writeFileSync(
        path.join(guideDir, 'failed-downloads.json'),
        JSON.stringify(failedList, null, 2)
      )
    }

    console.log(`\n${guide.name} 完成:`)
    console.log(`  成功: ${success}`)
    console.log(`  失败: ${failed}`)
    console.log(`  跳过: ${skipped}`)
    console.log(`  总计: ${allDocs.length}`)
  }

  console.log('\n✅ 全部下载完成!')
  await browser.disconnect()
}

// 入口
main().catch((e) => {
  console.error('致命错误:', e.message)
  process.exit(1)
})
