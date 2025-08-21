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
      { text: '文档', link: '/免责声明' }
    ],

    sidebar: [
      {
        text: '免责声明', link: '/免责声明'
      },
      {
        text: 'Apex_参考指南',
        items: [
          { text: '- 介绍', link: '/Apex_参考指南/' },
          { text: '✅代表已完成人工检查' },
          { text: 'System_命名空间',
            collapsed: true,
            items: [
              { text: '- 介绍', link: '/Apex_参考指南/System_命名空间/' },
                { text: 'AccessLevel 类✅', link: '/Apex_参考指南/System_命名空间/AccessLevel%20类' },
                { text: 'AccessType 枚举', link: '/Apex_参考指南/System_命名空间/AccessType%20枚举' },
                { text: 'Address 类', link: '/Apex_参考指南/System_命名空间/Address%20类' },
                { text: 'Answers 类', link: '/Apex_参考指南/System_命名空间/Answers%20类' },
                { text: 'ApexPages 类', link: '/Apex_参考指南/System_命名空间/ApexPages%20类' },
                { text: 'Approval 类', link: '/Apex_参考指南/System_命名空间/Approval%20类' },
                { text: 'Assert 类', link: '/Apex_参考指南/System_命名空间/Assert%20类' },
                { text: 'AsyncInfo 类', link: '/Apex_参考指南/System_命名空间/AsyncInfo%20类' },
                { text: 'AsyncOptions 类', link: '/Apex_参考指南/System_命名空间/AsyncOptions%20类' },
                { text: 'Cases 类', link: '/Apex_参考指南/System_命名空间/Cases%20类' },
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
