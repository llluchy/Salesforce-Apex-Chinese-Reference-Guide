import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  base: '/Salesforce-Apex-Chinese-Reference-Guide/',  // 替换为你的仓库名
  title: 'APEX 中文文档',


  lang: 'zh-CN',
  title: "APEX 中文文档",
  description: "Salesforce Apex 中文文档网站",
  themeConfig: {
    logo: './logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/引言' }
    ],

    sidebar: [
      {
        text: '免责声明', link: '/免责声明'
      },
      {
        text: 'Apex 参考指南',
        items: [
          { text: '引言', link: '/引言' },
          { text: '正文',
            items: [
              { text: '类', link: '/正文/类/' },
              { text: '正文2', link: '/正文2' },
              { text: '正文3', link: '/正文3' },
            ]
          },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  lastUpdated: true
})
