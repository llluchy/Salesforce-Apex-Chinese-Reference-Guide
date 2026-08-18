import { defineConfig } from 'vitepress'
import { getSidebar } from './utils/sidebar'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const docsDir = resolve(__dirname, '..')

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
})
