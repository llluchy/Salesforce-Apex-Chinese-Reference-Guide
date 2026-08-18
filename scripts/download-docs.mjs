/**
 * Salesforce 文档批量下载脚本 (一键式独立版)
 *
 * 自动启动 Chrome 浏览器,绕过 WAF 防护,批量下载官方英文文档。
 * 支持断点续传、失败重试、确定性输出。
 *
 * 用法:
 *   npm install          # 安装依赖 (首次)
 *   node scripts/download-docs.mjs              # 一键下载全部
 *   node scripts/download-docs.mjs --force       # 强制重新下载全部
 *   node scripts/download-docs.mjs --headed     # 显示浏览器窗口
 *   node scripts/download-docs.mjs --guide=apexref   # 只下载指定指南
 *
 * 前置条件:
 *   npm install puppeteer   # 会自动下载 Chromium
 */

import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'

// ─── 配置 ───────────────────────────────────────────
const OUTPUT_DIR = path.resolve(process.cwd(), 'raw-docs')

const GUIDES = [
  {
    name: 'Apex Developer Guide',
    treeUrl: 'https://developer.salesforce.com/docs/get_document/atlas.en-us.apexcode.meta',
    contentPrefix: 'apexcode',
    outputDir: 'apex-developer-guide',
    seedUrl: 'https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_dev_guide.htm',
  },
  {
    name: 'Apex Reference Guide',
    treeUrl: 'https://developer.salesforce.com/docs/get_document/atlas.en-us.apexref.meta',
    contentPrefix: 'apexref',
    outputDir: 'apex-reference-guide',
    seedUrl: 'https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_ref_guide.htm',
  },
]

const DELAY_MS = 300        // 每次请求间隔
const BATCH_PAUSE = 50      // 每 N 个请求后暂停
const BATCH_PAUSE_MS = 2000 // 批次暂停时长
const MAX_RETRIES = 3       // 单文档最大重试次数
const RETRY_DELAY_MS = 2000 // 重试间隔
const WAF_WAIT_MS = 5000    // 等待 WAF 挑战通过
// ────────────────────────────────────────────────────

// ─── CLI 参数解析 ────────────────────────────────────
const args = process.argv.slice(2)
const FORCE = args.includes('--force')
const HEADED = args.includes('--headed')
const GUIDE_FILTER = (() => {
  const a = args.find((a) => a.startsWith('--guide='))
  return a ? a.split('=')[1] : null
})()
// ────────────────────────────────────────────────────

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
 */
function extractDocId(node) {
  if (!node.id) return null
  if (node.a_attr && node.a_attr.href) {
    const href = node.a_attr.href
    const htmIndex = href.indexOf('.htm')
    if (htmIndex > 0) return href.substring(0, htmIndex)
  }
  return node.id
}

/**
 * 递归遍历 toc 树,收集所有文档节点 (去重 + 排序保证确定性)
 */
function collectDocs(node, pathParts = [], seenIds = new Set()) {
  const docs = []
  const currentPath = [...pathParts, sanitize(node.text || node.id || 'untitled')]

  const docId = extractDocId(node)
  if (docId && !seenIds.has(docId)) {
    seenIds.add(docId)
    docs.push({ id: docId, title: node.text || node.id, path: currentPath })
  }

  if (node.children && Array.isArray(node.children)) {
    // 按标题排序子节点,保证每次执行顺序一致
    const sorted = [...node.children].sort((a, b) =>
      (a.text || '').localeCompare(b.text || '', 'en')
    )
    for (const child of sorted) {
      docs.push(...collectDocs(child, currentPath, seenIds))
    }
  }
  return docs
}

/**
 * 查找可用的 Chrome/Chromium 可执行文件
 */
async function findChrome() {
  // 1. 尝试 puppeteer 自带的 Chromium (npm install 时自动下载)
  const bundledPath = puppeteer.executablePath()
  if (fs.existsSync(bundledPath)) {
    return { path: bundledPath, label: 'puppeteer Chromium' }
  }

  // 2. 尝试系统 Chrome (macOS / Linux / Windows 常见路径)
  const systemPaths = [
    // Linux
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium',
    // macOS
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    // Windows
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    // puppeteer cache (可能版本不同)
    ...globFind('/root/.cache/puppeteer', 'chrome', 3),
    ...globFind('/root/.agent-browser', 'chrome', 3),
    // Homebrew (macOS)
    '/opt/homebrew/bin/google-chrome',
  ]

  for (const p of systemPaths) {
    if (p && fs.existsSync(p)) {
      return { path: p, label: `系统 Chrome (${p})` }
    }
  }

  return null
}

/**
 * 简单的 glob 查找 (查找指定目录下的可执行文件)
 */
function globFind(baseDir, name, maxDepth = 3) {
  const results = []
  if (!fs.existsSync(baseDir)) return results

  function walk(dir, depth) {
    if (depth > maxDepth || results.length > 0) return
    let entries
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true })
    } catch {
      return
    }
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        walk(fullPath, depth + 1)
      } else if (entry.name === name || entry.name === 'google-chrome') {
        results.push(fullPath)
      }
    }
  }

  walk(baseDir, 0)
  return results
}

/**
 * 启动浏览器
 */
async function launchBrowser() {
  console.log('正在启动浏览器...')

  const launchArgs = [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-blink-features=AutomationControlled',
    '--disable-features=IsolateOrigins,site-per-process',
    '--window-size=1920,1080',
  ]

  const chrome = await findChrome()

  if (!chrome) {
    console.error('未找到 Chrome/Chromium,请执行:')
    console.error('  npx puppeteer browsers install chrome')
    console.error('或安装系统 Chrome 后重试')
    throw new Error('无法找到 Chrome/Chromium 可执行文件')
  }

  console.log(`使用: ${chrome.label}`)

  const browser = await puppeteer.launch({
    headless: HEADED ? false : 'new',
    executablePath: chrome.path,
    args: launchArgs,
    defaultViewport: { width: 1920, height: 1080 },
  })

  return browser
}

/**
 * 导航到 Salesforce 文档页面,等待 WAF 挑战通过
 */
async function warmupBrowser(page, seedUrl) {
  console.log(`正在访问 Salesforce 文档页面 (建立 session)...`)
  console.log(`  URL: ${seedUrl}`)

  await page.goto(seedUrl, { waitUntil: 'networkidle2', timeout: 60000 })

  // 等待 WAF 挑战 (Cloudflare) 通过
  console.log(`  等待 WAF 验证 (${WAF_WAIT_MS / 1000}s)...`)
  await new Promise((r) => setTimeout(r, WAF_WAIT_MS))

  // 验证页面是否正常加载
  const title = await page.title()
  console.log(`  页面标题: ${title}`)

  if (title.includes('Just a moment') || title.includes('Attention Required')) {
    console.log('  ⚠ WAF 验证未通过,等待更长时间...')
    await new Promise((r) => setTimeout(r, 10000))
  }

  return page
}

/**
 * 在浏览器上下文中 fetch 单个文档 (带重试)
 */
async function fetchDoc(page, prefix, docId, version) {
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const result = await page.evaluate(
        async (url) => {
          try {
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
        `https://developer.salesforce.com/docs/get_document_content/${prefix}/${docId}.htm/en-us/${version}`
      )

      if (!result.error) return result

      // HTTP 404 是永久错误,不需要重试
      if (result.error.includes('404')) return result

      // 其他错误进行重试
      if (attempt < MAX_RETRIES) {
        await new Promise((r) => setTimeout(r, RETRY_DELAY_MS * attempt))
      } else {
        return result
      }
    } catch (e) {
      if (attempt === MAX_RETRIES) return { error: e.message }
      await new Promise((r) => setTimeout(r, RETRY_DELAY_MS * attempt))
    }
  }
  return { error: 'max retries exceeded' }
}

/**
 * 获取文档树
 */
async function fetchTree(page, guide) {
  const treeData = await page.evaluate(async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return {
      toc: data.toc,
      version: data.version?.doc_version || null,
      versionText: data.version?.version_text || null,
    }
  }, guide.treeUrl)

  return treeData
}

/**
 * 主函数
 */
async function main() {
  console.log('='.repeat(60))
  console.log('Salesforce 文档批量下载工具')
  console.log('='.repeat(60))
  console.log(`模式: ${FORCE ? '强制重新下载' : '增量下载 (跳过已存在)'}`)
  console.log(`浏览器: ${HEADED ? '有头模式' : '无头模式'}`)
  if (GUIDE_FILTER) console.log(`仅下载: ${GUIDE_FILTER}`)
  console.log()

  // ── 启动浏览器 ──
  const browser = await launchBrowser()
  const page = await browser.newPage()

  // 设置真实浏览器指纹
  await page.setUserAgent(
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ' +
      '(KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
  )
  await page.setExtraHTTPHeaders({
    'Accept-Language': 'en-US,en;q=0.9',
  })

  // ── 访问第一个指南的页面建立 session ──
  const firstGuide = GUIDE_FILTER
    ? GUIDES.find((g) => g.outputDir === GUIDE_FILTER || g.contentPrefix === GUIDE_FILTER)
    : GUIDES[0]

  if (!firstGuide) {
    console.error(`未找到指南: ${GUIDE_FILTER}`)
    console.log(`可选值: ${GUIDES.map((g) => g.outputDir).join(', ')}`)
    await browser.close()
    process.exit(1)
  }

  await warmupBrowser(page, firstGuide.seedUrl)

  fs.mkdirSync(OUTPUT_DIR, { recursive: true })

  const guidesToProcess = GUIDE_FILTER
    ? GUIDES.filter((g) => g.outputDir === GUIDE_FILTER || g.contentPrefix === GUIDE_FILTER)
    : GUIDES

  const allResults = []

  for (const guide of guidesToProcess) {
    console.log(`\n${'='.repeat(60)}`)
    console.log(`处理: ${guide.name}`)
    console.log(`${'='.repeat(60)}`)

    // ── Step 1: 获取文档树 ──
    console.log('正在获取文档树...')
    let treeData
    try {
      treeData = await fetchTree(page, guide)
    } catch (e) {
      console.error(`获取文档树失败: ${e.message}`)
      // 可能需要重新建立 session
      console.log('尝试重新建立 session...')
      await warmupBrowser(page, guide.seedUrl)
      treeData = await fetchTree(page, guide)
    }

    if (!treeData.toc || !treeData.version) {
      console.error('无法获取文档树,跳过')
      continue
    }

    console.log(`版本: ${treeData.versionText} (doc_version: ${treeData.version})`)

    const guideDir = path.join(OUTPUT_DIR, guide.outputDir)
    fs.mkdirSync(guideDir, { recursive: true })

    // 保存 toc
    fs.writeFileSync(path.join(guideDir, 'toc.json'), JSON.stringify(treeData.toc, null, 2))

    // ── Step 2: 收集所有文档 (确定性排序) ──
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

      // 计算文件路径
      const dirParts = doc.path.slice(0, -1)
      const dirPath = path.join(guideDir, ...dirParts)
      const fileName = `${sanitize(doc.id)}.html`
      const filePath = path.join(dirPath, fileName)
      const metaPath = path.join(dirPath, `${sanitize(doc.id)}.meta.json`)

      // 跳过已下载的文件 (除非 --force)
      if (!FORCE && fs.existsSync(filePath) && fs.existsSync(metaPath)) {
        skipped++
        if (skipped % 50 === 0) {
          console.log(`${progress} 跳过已存在: ${skipped}`)
        }
        continue
      }

      // 下载文档
      const result = await fetchDoc(page, guide.contentPrefix, doc.id, treeData.version)

      if (result.error) {
        failed++
        failedList.push({ id: doc.id, title: doc.title, error: result.error })
        if (failed <= 20) {
          console.log(`${progress} ✗ ${doc.id}: ${result.error}`)
        }
      } else if (!result.content || result.content.length === 0) {
        skipped++
      } else {
        // 创建目录并保存
        fs.mkdirSync(dirPath, { recursive: true })
        fs.writeFileSync(filePath, result.content)
        fs.writeFileSync(
          metaPath,
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

        if (success % 20 === 0 || i === allDocs.length - 1) {
          console.log(`${progress} 已下载: ${success} | 失败: ${failed} | 跳过: ${skipped}`)
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

    // 保存下载清单 (保证可追溯)
    const manifest = {
      guide: guide.name,
      version: treeData.versionText,
      docVersion: treeData.version,
      total: allDocs.length,
      success,
      failed,
      skipped,
      failedList,
      timestamp: new Date().toISOString(),
    }
    fs.writeFileSync(
      path.join(guideDir, 'manifest.json'),
      JSON.stringify(manifest, null, 2)
    )

    console.log(`\n${guide.name} 完成:`)
    console.log(`  成功: ${success}`)
    console.log(`  失败: ${failed}`)
    console.log(`  跳过: ${skipped}`)
    console.log(`  总计: ${allDocs.length}`)

    allResults.push(manifest)
  }

  // ── 汇总 ──
  console.log('\n' + '='.repeat(60))
  console.log('全部完成!')
  console.log('='.repeat(60))
  for (const r of allResults) {
    console.log(`  ${r.guide}: ${r.success} 下载 / ${r.failed} 失败 / ${r.skipped} 跳过`)
  }

  await browser.close()
}

// 入口
main().catch((e) => {
  console.error('致命错误:', e.message)
  process.exit(1)
})
