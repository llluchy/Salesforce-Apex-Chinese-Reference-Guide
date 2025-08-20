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
          { text: '- 介绍', link: '/Apex 参考指南/' },
          { text: '✅代表已完成人工检查' },
          { text: '系统命名空间',
            collapsed: true,
            items: [
              { text: '- 介绍', link: '/Apex 参考指南/系统命名空间/' },
                { text: 'AccessLevel 类✅', link: '/Apex 参考指南/系统命名空间/AccessLevel' },
                { text: 'Address 类', link: '/Apex 参考指南/系统命名空间/Address' },
                { text: 'Answers 类', link: '/Apex 参考指南/系统命名空间/Answers' },
                { text: 'ApexPages 类', link: '/Apex 参考指南/系统命名空间/ApexPages' },
                { text: 'Cases 类', link: '/Apex 参考指南/系统命名空间/Cases Class' },
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
