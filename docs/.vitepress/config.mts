import { defineConfig } from 'vitepress'
import { getSidebar } from './utils/sidebar'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import { readFileSync, writeFileSync } from 'fs'
import type { Plugin } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))
const docsDir = resolve(__dirname, '..')
const configPath = resolve(__dirname, 'config.mts')

/**
 * Vite 插件: 监听 docs 目录下 .md 文件的新增/删除/重命名,
 * 自动触发 VitePress 配置热重载以刷新侧边栏。
 *
 * 原理: VitePress 启动时执行一次 getSidebar() 生成侧边栏,
 * 之后文件结构变化不会触发重新计算。本插件监听文件变化后
 * 通过修改 config.mts 末尾的时间戳注释来触发 VitePress
 * 内置的配置文件变更检测,从而自动重启并重新执行 getSidebar()。
 *
 * 仅在 dev 模式下生效,不影响生产构建。
 */
function sidebarHotReload(): Plugin {
  return {
    name: 'sidebar-hot-reload',
    apply: 'serve',
    configureServer(server) {
      let restartTimer: ReturnType<typeof setTimeout> | null = null

      const scheduleRestart = (reason: string) => {
        if (restartTimer) clearTimeout(restartTimer)
        restartTimer = setTimeout(() => {
          console.log(
            `\n\x1b[36m[sidebar]\x1b[0m 检测到文件结构变更 (${reason}), 正在刷新侧边栏...\n`
          )
          // 通过修改 config.mts 内容来触发 VitePress 内置的配置热重载。
          // 在文件末尾更新时间戳注释,改变文件内容以触发 chokidar 的 change 事件。
          try {
            const content = readFileSync(configPath, 'utf-8')
            const timestamp = Date.now()
            const newContent = content.replace(
              /\/\/ sidebar-reload:.*/,
              `// sidebar-reload: 1787047277719
            )
            writeFileSync(configPath, newContent)
          } catch {
            // 忽略写入错误
          }
        }, 300)
      }

      // 监听 .md 文件的新增和删除 (重命名 = unlink + add)
      server.watcher.on('add', (file: string) => {
        if (file.endsWith('.md') && !file.includes('.vitepress')) {
          scheduleRestart(`新增: ${file.split('/').pop()}`)
        }
      })
      server.watcher.on('unlink', (file: string) => {
        if (file.endsWith('.md') && !file.includes('.vitepress')) {
          scheduleRestart(`删除: ${file.split('/').pop()}`)
        }
      })
      server.watcher.on('addDir', (dir: string) => {
        if (!dir.includes('.vitepress') && !dir.includes('node_modules')) {
          scheduleRestart(`新增目录: ${dir.split('/').pop()}`)
        }
      })
      server.watcher.on('unlinkDir', (dir: string) => {
        if (!dir.includes('.vitepress') && !dir.includes('node_modules')) {
          scheduleRestart(`删除目录: ${dir.split('/').pop()}`)
        }
      })
    },
  }
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Salesforce-Apex-Chinese-Reference-Guide/',
  title: 'Salesforce Apex 中文文档',
  lang: 'zh-CN',
  description: 'Salesforce Apex 中文文档翻译项目',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: '',
      },
    ],
  ],

  themeConfig: {
    // 本地搜索
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
            },
          },
        },
      },
    },

    logo: '/logo.svg',

    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      {
        text: '文档',
        items: [
          { text: 'Apex 开发者指南', link: '/Apex 开发者指南/' },
          { text: 'Apex 参考指南', link: '/Apex 参考指南/' },
        ],
      },
      {
        text: 'Salesforce 官方',
        items: [
          {
            text: 'Apex Developer Guide (EN)',
            link: 'https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_dev_guide.htm',
          },
          {
            text: 'Apex Reference Guide (EN)',
            link: 'https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_ref_guide.htm',
          },
        ],
      },
    ],

    // 自动生成的侧边栏(支持无限嵌套)
    sidebar: getSidebar(docsDir),

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/llluchy/Salesforce-Apex-Chinese-Reference-Guide',
      },
    ],

    // 页脚
    footer: {
      message: '本项目仅用于学习和研究目的,不代表 Salesforce 官方立场',
      copyright: 'Copyright © 2024-present Salesforce Apex 中文文档翻译项目',
    },

    // 大纲配置
    outline: {
      level: [2, 3],
      label: '本页目录',
    },

    // 文档页脚
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    // 最后更新时间
    lastUpdatedText: '最后更新',

    // 侧边栏标签
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',

    // 暗色模式切换
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },

  // Vite 插件: 侧边栏热重载 (仅 dev 模式)
  vite: {
    plugins: [sidebarHotReload()],
  },
})

// sidebar-reload: 0
