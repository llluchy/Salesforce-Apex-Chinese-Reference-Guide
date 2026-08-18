/**
 * Salesforce HTML → Markdown 转换脚本
 *
 * 将 raw-docs/ 下的 HTML 英文原文批量转换为 Markdown,
 * 输出到 docs/en-us/ 目录供 VitePress 使用,或供翻译人员编辑。
 *
 * 策略:
 *   1. 预处理:用正则从 HTML 中提取代码块、提示框、See Also,
 *      转成最终 Markdown,存入占位符
 *   2. Turndown 转换剩余 HTML (已不含复杂结构)
 *   3. 后处理:简单替换占位符
 *
 * 用法:
 *   node scripts/convert-to-md.mjs                    # 转换全部
 *   node scripts/convert-to-md.mjs --guide=apexcode   # 只转换 Developer Guide
 *   node scripts/convert-to-md.mjs --force              # 强制重新转换
 *   node scripts/convert-to-md.mjs --file=path.html    # 只转换单个文件
 */

import TurndownService from 'turndown'
import { tables, strikethrough } from 'turndown-plugin-gfm'
import fs from 'fs'
import path from 'path'

// ─── 配置 ───────────────────────────────────────────
const INPUT_DIR = path.resolve(process.cwd(), 'raw-docs')
const OUTPUT_DIR = path.resolve(process.cwd(), 'docs', 'en-us')

const GUIDES = [
  {
    name: 'Apex Developer Guide',
    inputDir: 'apex-developer-guide',
    outputDir: 'apex-developer-guide',
    contentPrefix: 'apexcode',
  },
  {
    name: 'Apex Reference Guide',
    inputDir: 'apex-reference-guide',
    outputDir: 'apex-reference-guide',
    contentPrefix: 'apexref',
  },
]
// ────────────────────────────────────────────────────

// ─── CLI 参数 ────────────────────────────────────────
const args = process.argv.slice(2)
const FORCE = args.includes('--force')
const FILE_FILTER = (() => {
  const a = args.find((a) => a.startsWith('--file='))
  return a ? a.split('=')[1] : null
})()
const GUIDE_FILTER = (() => {
  const a = args.find((a) => a.startsWith('--guide='))
  return a ? a.split('=')[1] : null
})()
// ────────────────────────────────────────────────────

// ─── 工具函数 ────────────────────────────────────────

function decodeEntities(str) {
  return str
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&apos;/g, "'")
}

function stripTags(html) {
  return html.replace(/<[^>]+>/g, '')
}

/**
 * 简单 HTML → Markdown 转换 (用于提示框内部内容)
 */
function simpleHtmlToMd(html) {
  let md = html
  // <br> → 换行
  md = md.replace(/<br\s*\/?>/gi, '\n')
  // <p> → 段落
  md = md.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '$1\n\n')
  // <strong>/<b> → **bold**
  md = md.replace(/<(?:strong|b)[^>]*>([\s\S]*?)<\/(?:strong|b)>/gi, '**$1**')
  // <em>/<i> → *italic*
  md = md.replace(/<(?:em|i)[^>]*>([\s\S]*?)<\/(?:em|i)>/gi, '*$1*')
  // <code> → `code`
  md = md.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, '`$1`')
  // <samp class="codeph"> → `code`
  md = md.replace(/<samp[^>]*class="[^"]*codeph[^"]*"[^>]*>([\s\S]*?)<\/samp>/gi, (m, c) => '`' + stripTags(c).trim() + '`')
  // <samp> (其他) → `code`
  md = md.replace(/<samp[^>]*>([\s\S]*?)<\/samp>/gi, (m, c) => '`' + stripTags(c).trim() + '`')
  // <a href="...">text</a> → [text](href)
  md = md.replace(/<a\s+[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (m, href, text) => '[' + stripTags(text).trim() + '](' + href + ')')
  // <ul><li>
  md = md.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n')
  md = md.replace(/<\/?[uo]l[^>]*>/gi, '')
  // 剥离剩余标签
  md = stripTags(md)
  md = decodeEntities(md)
  // 清理多余空行
  md = md.replace(/\n{3,}/g, '\n\n')
  return md.trim()
}

// ─── 占位符系统 ──────────────────────────────────────
let placeholderCounter = 0
let placeholders = []

function resetPlaceholders() {
  placeholderCounter = 0
  placeholders = []
}

function setPlaceholder(content) {
  const id = placeholderCounter++
  placeholders.push(content)
  return `@@PH${id}PH@@`
}

// ─── 预处理 ──────────────────────────────────────────

/**
 * 预处理 HTML:提取复杂结构,替换为占位符
 */
function preprocessHtml(html) {
  let result = html

  // ── 1. 提取代码块 ──
  // <div class="codeSection apex_code"><pre class="codeblock brush:apex">...</pre></div>
  result = result.replace(
    /<div\s+class="[^"]*codeSection[^"]*">\s*<pre\s+([^>]*)>([\s\S]*?)<\/pre>\s*<\/div>/gi,
    (match, preAttrs, codeContent) => {
      let lang = 'apex'
      const brushMatch = preAttrs.match(/brush:(\w+)/)
      if (brushMatch) lang = brushMatch[1]

      let code = codeContent
      code = code.replace(/<br\s*\/?>/gi, '\n')
      code = decodeEntities(code)
      code = stripTags(code)
      code = code.trim()

      return setPlaceholder('\n\n```' + lang + '\n' + code + '\n```\n\n')
    }
  )

  // ── 2. 提取提示框 ──
  // <div class="box message info">...</div>
  // 注意:提示框可能有嵌套 div,需要匹配最外层
  result = result.replace(
    /<div\s+class="[^"]*box\s+[^"]*message[^"]*"[^>]*>([\s\S]*?)<\/div>(?=\s*(?:<\/div>|<div\s|<h\d|<p|$))/gi,
    (match, inner) => {
      const cls = (match.match(/class="([^"]*)"/) || ['', ''])[1]
      let type = 'tip'
      let title = 'Note'

      if (cls.includes('warning') || cls.includes('caution')) {
        type = 'warning'
        title = 'Warning'
      } else if (cls.includes('important')) {
        type = 'danger'
        title = 'Important'
      }

      // 提取 h4 标题
      const h4Match = inner.match(/<h4[^>]*>([\s\S]*?)<\/h4>/i)
      if (h4Match && h4Match[1].trim()) {
        title = stripTags(h4Match[1]).trim()
      }

      // 清理内部内容
      let content = inner
      content = content.replace(/<img[^>]*>/gi, '')
      content = content.replace(/<h4[^>]*>[\s\S]*?<\/h4>/gi, '')
      // 移除嵌套 div 包裹
      content = content.replace(/<\/?div[^>]*>/gi, '')

      // 转为简单 Markdown
      const mdContent = simpleHtmlToMd(content)

      return setPlaceholder('\n\n:::' + type + ' ' + title + '\n' + mdContent + '\n:::\n\n')
    }
  )

  // ── 3. 提取 See Also ──
  result = result.replace(
    /<div\s+id="sfdc:seealso"[^>]*>([\s\S]*?)<\/div>/gi,
    (match, inner) => {
      const links = []
      const linkRegex = /<a\s+[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi
      let m
      while ((m = linkRegex.exec(inner)) !== null) {
        const href = m[1]
        const text = stripTags(m[2]).trim()
        if (text && href) {
          links.push('- [' + text + '](' + href + ')')
        }
      }
      if (links.length === 0) return ''
      return setPlaceholder('\n\n## See Also\n\n' + links.join('\n') + '\n\n')
    }
  )

  // ── 4. 清理锚点 ──
  result = result.replace(/<a\s+name="[^"]*">\s*<\/a>/gi, '')

  // ── 5. 清理图标图片 ──
  result = result.replace(/<img[^>]*(?:icon_note|icon_warning|icon_important|alt="(?:Note|Warning|Important)")[^>]*>/gi, '')

  return result
}

// ─── Turndown 配置 ──────────────────────────────────

function createTurndownService() {
  const td = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    fence: '```',
    bulletListMarker: '-',
    emDelimiter: '*',
    strongDelimiter: '**',
    linkStyle: 'inlined',
  })

  td.use([tables, strikethrough])

  // 行内代码 <samp class="codeph">
  td.addRule('inlineCodeSamp', {
    filter: function (node) {
      return (
        node.nodeName === 'SAMP' &&
        node.getAttribute('class') &&
        node.getAttribute('class').includes('codeph')
      )
    },
    replacement: function (content, node) {
      let text = node.textContent || content
      text = text.replace(/\s+/g, ' ').trim()
      return '`' + text + '`'
    },
  })

  // 系统输出 <samp class="...systemoutput">
  td.addRule('systemOutput', {
    filter: function (node) {
      return (
        node.nodeName === 'SAMP' &&
        node.getAttribute('class') &&
        node.getAttribute('class').includes('systemoutput')
      )
    },
    replacement: function (content) {
      return '`' + content.trim() + '`'
    },
  })

  // 清理 section/example/body/shortdesc div
  td.addRule('sectionDiv', {
    filter: function (node) {
      if (node.nodeName !== 'DIV') return false
      const cls = node.getAttribute('class') || ''
      return cls.includes('section') || cls.includes('exampleblock') || cls.includes('body') || cls.includes('shortdesc')
    },
    replacement: function (content) {
      return '\n\n' + content + '\n\n'
    },
  })

  // 术语 <dfn>
  td.addRule('termDef', {
    filter: 'dfn',
    replacement: function (content) {
      return '**' + content + '**'
    },
  })

  // <cite>
  td.addRule('cite', {
    filter: 'cite',
    replacement: function (content) {
      return '*' + content + '*'
    },
  })

  // 图片
  td.addRule('images', {
    filter: 'img',
    replacement: function (content, node) {
      const alt = (node.getAttribute('alt') || '').trim()
      const src = (node.getAttribute('src') || '').trim()
      if (!alt && !src) return ''
      return '![' + alt + '](' + src + ')'
    },
  })

  return td
}

// ─── 后处理 ──────────────────────────────────────────

function postprocessMarkdown(md) {
  let result = md

  // 简单替换占位符 (Turndown 不会转义 @@ 字符)
  for (let i = 0; i < placeholders.length; i++) {
    result = result.split('@@PH' + i + 'PH@@').join(placeholders[i])
  }

  // 清理多余空行
  result = result.replace(/\n{3,}/g, '\n\n')
  result = result.trim() + '\n'

  return result
}

// ─── 核心转换函数 ─────────────────────────────────────

function extractDocIdFromHtml(html) {
  const match = html.match(/<a\s+name="([^"]+)">/)
  return match ? match[1] : null
}

function convertHtmlToMd(html, docId) {
  resetPlaceholders()

  const preprocessed = preprocessHtml(html)
  const td = createTurndownService()
  let markdown = td.turndown(preprocessed)
  markdown = postprocessMarkdown(markdown)

  if (docId) {
    markdown = '---\ndoc_id: "' + docId + '"\n---\n\n' + markdown
  }

  return markdown
}

// ─── 文件遍历 ─────────────────────────────────────────

function findHtmlFiles(dir, baseDir = dir) {
  const results = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      results.push(...findHtmlFiles(fullPath, baseDir))
    } else if (entry.name.endsWith('.html')) {
      const relPath = path.relative(baseDir, fullPath)
      results.push({ absPath: fullPath, relPath })
    }
  }
  return results
}

function getOutputPath(relPath, guideOutputDir) {
  const mdRelPath = relPath.replace(/\.html$/, '.md')
  return path.join(OUTPUT_DIR, guideOutputDir, mdRelPath)
}

// ─── 主函数 ───────────────────────────────────────────

async function main() {
  console.log('='.repeat(60))
  console.log('Salesforce HTML → Markdown 转换工具')
  console.log('='.repeat(60))
  console.log(`模式: ${FORCE ? '强制重新转换' : '增量转换 (跳过已存在)'}`)
  if (GUIDE_FILTER) console.log(`仅转换: ${GUIDE_FILTER}`)
  if (FILE_FILTER) console.log(`单文件: ${FILE_FILTER}`)
  console.log()

  // 单文件模式
  if (FILE_FILTER) {
    const inputPath = path.resolve(INPUT_DIR, FILE_FILTER)
    if (!fs.existsSync(inputPath)) {
      console.error(`文件不存在: ${inputPath}`)
      process.exit(1)
    }

    const guide = GUIDES.find((g) => FILE_FILTER.startsWith(g.inputDir))
    const guideOutputDir = guide ? guide.outputDir : 'misc'

    const html = fs.readFileSync(inputPath, 'utf-8')
    const docId = extractDocIdFromHtml(html)
    const markdown = convertHtmlToMd(html, docId)

    const outputPath = path.join(OUTPUT_DIR, guideOutputDir, FILE_FILTER.replace(/\.html$/, '.md'))
    fs.mkdirSync(path.dirname(outputPath), { recursive: true })
    fs.writeFileSync(outputPath, markdown)

    console.log(`转换完成:`)
    console.log(`  输入: ${FILE_FILTER}`)
    console.log(`  输出: ${outputPath}`)
    console.log(`  大小: ${markdown.length} 字符`)
    return
  }

  // 批量模式
  const guidesToProcess = GUIDE_FILTER
    ? GUIDES.filter((g) => g.inputDir === GUIDE_FILTER || g.contentPrefix === GUIDE_FILTER)
    : GUIDES

  if (guidesToProcess.length === 0) {
    console.error(`未找到指南: ${GUIDE_FILTER}`)
    console.log(`可选值: ${GUIDES.map((g) => g.inputDir).join(', ')}`)
    process.exit(1)
  }

  let totalSuccess = 0
  let totalSkipped = 0
  let totalFailed = 0
  const startTime = Date.now()

  for (const guide of guidesToProcess) {
    console.log(`\n${'='.repeat(60)}`)
    console.log(`处理: ${guide.name}`)
    console.log(`${'='.repeat(60)}`)

    const guideInputDir = path.join(INPUT_DIR, guide.inputDir)
    if (!fs.existsSync(guideInputDir)) {
      console.error(`输入目录不存在: ${guideInputDir}`)
      continue
    }

    const htmlFiles = findHtmlFiles(guideInputDir)
    console.log(`发现 ${htmlFiles.length} 个 HTML 文件`)

    let success = 0
    let skipped = 0
    let failed = 0

    for (let i = 0; i < htmlFiles.length; i++) {
      const file = htmlFiles[i]
      const progress = `[${i + 1}/${htmlFiles.length}]`

      try {
        const outputPath = getOutputPath(file.relPath, guide.outputDir)

        if (!FORCE && fs.existsSync(outputPath)) {
          skipped++
          if (skipped % 200 === 0) {
            console.log(`${progress} 跳过: ${skipped}`)
          }
          continue
        }

        const html = fs.readFileSync(file.absPath, 'utf-8')
        const docId = extractDocIdFromHtml(html)
        const markdown = convertHtmlToMd(html, docId)

        fs.mkdirSync(path.dirname(outputPath), { recursive: true })
        fs.writeFileSync(outputPath, markdown)

        success++
        if (success % 200 === 0) {
          console.log(`${progress} 已转换: ${success} | 跳过: ${skipped} | 失败: ${failed}`)
        }
      } catch (e) {
        failed++
        if (failed <= 10) {
          console.log(`${progress} ✗ ${file.relPath}: ${e.message}`)
        }
      }
    }

    console.log(`\n${guide.name} 完成:`)
    console.log(`  成功: ${success}`)
    console.log(`  跳过: ${skipped}`)
    console.log(`  失败: ${failed}`)
    console.log(`  总计: ${htmlFiles.length}`)

    totalSuccess += success
    totalSkipped += skipped
    totalFailed += failed
  }

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1)
  console.log(`\n${'='.repeat(60)}`)
  console.log('全部完成!')
  console.log('='.repeat(60))
  console.log(`  总成功: ${totalSuccess}`)
  console.log(`  总跳过: ${totalSkipped}`)
  console.log(`  总失败: ${totalFailed}`)
  console.log(`  耗时: ${elapsed}s`)
}

main().catch((e) => {
  console.error('致命错误:', e.message)
  process.exit(1)
})
