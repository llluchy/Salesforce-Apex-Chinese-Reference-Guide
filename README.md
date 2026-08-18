# Salesforce Apex 中文参考指南

Salesforce Apex 官方文档中文翻译项目。使用 VitePress 构建文档网站,部署到 GitHub Pages。实现一比一模拟原英文文档的结构与链接跳转,支持无限嵌套的节点即页面导航。

---

## 官方文档地址

| 文档 | 英文原文 | 文档树 API |
|------|---------|-----------|
| Apex Developer Guide | https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_dev_guide.htm | `https://developer.salesforce.com/docs/get_document/atlas.en-us.apexcode.meta` |
| Apex Reference Guide | https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_ref_guide.htm | `https://developer.salesforce.com/docs/get_document/atlas.en-us.apexref.meta` |

---

## 项目架构

```
Salesforce-Apex-Chinese-Reference-Guide/
├── docs/                          # VitePress 文档根目录
│   ├── .vitepress/
│   │   ├── config.mts            # VitePress 配置 (Salesforce 主题)
│   │   └── utils/
│   │       └── sidebar.ts        # 自动侧边栏生成 (无限嵌套)
│   ├── en-us/                    # 英文原文 Markdown (脚本自动转换)
│   │   ├── apex-developer-guide/ # 547 篇
│   │   └── apex-reference-guide/ # 2324 篇
│   ├── Apex 开发者指南/           # 中文翻译 (手动编辑)
│   └── Apex 参考指南/             # 中文翻译 (手动编辑)
├── raw-docs/                     # 下载的 HTML 英文原文
│   ├── apex-developer-guide/     # 547 个 HTML + toc.json + manifest.json
│   └── apex-reference-guide/    # 2324 个 HTML + toc.json + manifest.json
├── scripts/
│   ├── download-docs.mjs        # 批量下载脚本 (Puppeteer + CDP)
│   └── convert-to-md.mjs        # HTML → Markdown 转换脚本 (Turndown)
├── .github/workflows/
│   └── deploy.yml               # GitHub Actions 自动部署
├── package.json
└── README.md
```

### 技术栈

| 组件 | 技术 | 说明 |
|------|------|------|
| 文档框架 | VitePress 1.6+ | 节点即页面,无限嵌套侧边栏 |
| 部署 | GitHub Pages + GitHub Actions | push 后自动构建部署 |
| 文档下载 | Puppeteer (CDP) | 绕过 Salesforce WAF 防护 |
| HTML 转 MD | Turndown + turndown-plugin-gfm | 保留代码块/表格/提示框格式 |
| 运行时 | Node.js 18+ | ESM 模块 |

### 分支结构

| 分支 | 用途 |
|------|------|
| `main` | 正式发布分支,触发 GitHub Pages 部署 |
| `writing` | 文档写作分支,英文原文和脚本在此维护 |

---

## 脚本使用方式

### 前置准备

```bash
# 克隆仓库
git clone https://github.com/llluchy/Salesforce-Apex-Chinese-Reference-Guide.git
cd Salesforce-Apex-Chinese-Reference-Guide

# 安装依赖 (会自动下载 Chromium)
npm install
```

### 1. 下载官方文档 (download-docs.mjs)

通过 Puppeteer 启动 Chrome 浏览器,绕过 Salesforce 的 WAF 防护,批量下载文档英文原文 HTML。

```bash
# 下载全部文档 (增量模式,跳过已下载)
node scripts/download-docs.mjs

# 强制重新下载全部
node scripts/download-docs.mjs --force

# 只下载某个指南
node scripts/download-docs.mjs --guide=apexcode    # Developer Guide
node scripts/download-docs.mjs --guide=apexref      # Reference Guide

# 显示浏览器窗口 (调试用)
node scripts/download-docs.mjs --headed
```

| 参数 | 说明 |
|------|------|
| (无) | 增量下载,跳过已存在文件 |
| `--force` | 强制重新下载全部 |
| `--guide=apexcode` | 只下载 Apex Developer Guide |
| `--guide=apexref` | 只下载 Apex Reference Guide |
| `--headed` | 显示浏览器窗口 |

**输出目录**: `raw-docs/apex-developer-guide/` 和 `raw-docs/apex-reference-guide/`

每个指南目录下会生成:
- `toc.json` — 文档树结构
- `manifest.json` — 下载清单 (记录每个文档的 ID、标题、状态)
- `*.html` — 文档原文

### 2. 转换 HTML 为 Markdown (convert-to-md.mjs)

使用 Turndown 将下载的 HTML 转换为 Markdown,保留代码块、表格、提示框等格式。

```bash
# 转换全部 (增量模式,跳过已转换)
node scripts/convert-to-md.mjs

# 强制重新转换全部
node scripts/convert-to-md.mjs --force

# 只转换某个指南
node scripts/convert-to-md.mjs --guide=apexcode

# 只转换单个文件
node scripts/convert-to-md.mjs --file="apex-developer-guide/Apex Developer Guide/.../apex_testing_integration_testing.html"
```

| 参数 | 说明 |
|------|------|
| (无) | 增量转换,跳过已存在文件 |
| `--force` | 强制重新转换全部 |
| `--guide=apexcode` | 只转换 Developer Guide |
| `--guide=apexref` | 只转换 Reference Guide |
| `--file=<path>` | 只转换单个文件 |

**输出目录**: `docs/en-us/apex-developer-guide/` 和 `docs/en-us/apex-reference-guide/`

**转换规则**:

| HTML 元素 | Markdown 输出 |
|-----------|-------------|
| `<div class="codeSection apex_code"><pre>` | `` ```apex `` 代码块 |
| `<samp class="codeph">` | `` `inline code` `` |
| `<div class="box message info">` | `:::tip Note` 容器 |
| `<div class="box message warning">` | `:::warning Warning` 容器 |
| `<table class="featureTable">` | GFM 表格 |
| `<div id="sfdc:seealso">` | `## See Also` 链接列表 |
| `<dfn class="term">` | `**term**` |
| `<a name="docId">` | frontmatter `doc_id` 字段 |

### 3. 本地预览文档网站

```bash
# 启动开发服务器
npm run docs:dev

# 构建生产版本
npm run docs:build

# 预览构建结果
npm run docs:preview
```

### 完整工作流

```bash
# 1. 下载最新英文原文
node scripts/download-docs.mjs

# 2. 转换为 Markdown
node scripts/convert-to-md.mjs

# 3. 本地预览
npm run docs:dev

# 4. 翻译 (手动编辑 docs/Apex 开发者指南/ 下的 .md 文件)

# 5. 提交
git add -A && git commit -m "update docs"
git push origin writing
```

---

## 项目变更记录

| 日期 | 变更内容 |
|------|---------|
| 2026-08-18 | 编写 HTML→Markdown 转换脚本,批量转换 2871 篇文档 |
| 2026-08-18 | 重写下载脚本为一键式独立执行 (无需 agent-browser) |
| 2026-08-18 | 批量下载 Salesforce Apex 官方英文文档 (2871 篇) |
| 2026-08-18 | 搭建 VitePress 文档网站框架,部署到 GitHub Pages |
| 2026-08-05 | 之前的飞书文档翻译阶段 (已弃用,迁移到本项目) |

### 下载统计

| 文档 | HTML 文件数 | Markdown 文件数 | 状态 |
|------|------------|----------------|------|
| Apex Developer Guide | 547 | 547 | 完成 |
| Apex Reference Guide | 2324 | 2324 | 完成 |
| **合计** | **2871** | **2871** | **全部完成** |

---

## 免责声明

本项目仅用于学习和研究目的,所有文档内容均来自 Salesforce 官方文档的中文翻译。本项目不涉及任何商业用途,也不代表 Salesforce 官方立场。

**版权声明:**
- 原始英文文档版权归 Salesforce 所有
- 本项目仅提供中文翻译,用于学习交流
- 如有任何版权问题,请及时联系,我们将立即删除相关内容

**联系方式:**
- 邮箱:llluchy@outlook.com

**使用声明:**
请使用者遵守相关法律法规,仅将本项目用于合法的学习目的。使用者因使用本项目而产生的任何后果,本项目不承担任何责任。

**内容免责:**
- 本项目不承担因文档内容错误而产生的任何责任
- 请辩证性地参考本文档,结合实际情况进行判断
- 本项目的每一页文档都标注了 Salesforce 官方文档地址
- 本文档仅提供参考理解作用,请以 Salesforce 官方文档为准
