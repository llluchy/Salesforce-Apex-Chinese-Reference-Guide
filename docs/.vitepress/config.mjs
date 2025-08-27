import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  base: '/Salesforce-Apex-Chinese-Reference-Guide/',  // 替换为你的仓库名
  title: 'APEX 中文文档',
  lang: 'zh-CN',
  description: "Salesforce Apex 中文文档网站",
  themeConfig: {
    search: {
      provider: 'local'
    },
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
        text: 'Apex 参考指南',
        items: [
          { text: '- 介绍', link: '/Apex%20参考指南/' },
          { text: '✅代表已完成人工检查' },
          { text: 'System 命名空间',
            collapsed: true,
            items: [
              { text: '- 介绍', link: '/Apex%20参考指南/System%20命名空间/' },
                { text: 'AccessLevel 类✅', link: '/Apex%20参考指南/System%20命名空间/AccessLevel%20类' },
                { text: 'AccessType 枚举', link: '/Apex%20参考指南/System%20命名空间/AccessType%20枚举' },
                { text: 'Address 类', link: '/Apex%20参考指南/System%20命名空间/Address%20类' },
                { text: 'Answers 类', link: '/Apex%20参考指南/System%20命名空间/Answers%20类' },
                { text: 'ApexPages 类', link: '/Apex%20参考指南/System%20命名空间/ApexPages%20类' },
                { text: 'Approval 类', link: '/Apex%20参考指南/System%20命名空间/Approval%20类' },
                { text: 'Assert 类', link: '/Apex%20参考指南/System%20命名空间/Assert%20类' },
                { text: 'AsyncInfo 类', link: '/Apex%20参考指南/System%20命名空间/AsyncInfo%20类' },
                { text: 'AsyncOptions 类', link: '/Apex%20参考指南/System%20命名空间/AsyncOptions%20类' },
                { text: 'Blob 类', link: '/Apex%20参考指南/System%20命名空间/Blob%20类' },
                { text: 'Boolean 类', link: '/Apex%20参考指南/System%20命名空间/Boolean%20类' },
                { text: 'BusinessHours 类', link: '/Apex%20参考指南/System%20命名空间/BusinessHours%20类' },
                { text: 'CallbackStatus 枚举', link: '/Apex%20参考指南/System%20命名空间/CallbackStatus%20枚举' },
                { text: 'Callable 接口', link: '/Apex%20参考指南/System%20命名空间/Callable%20接口' },
                { text: 'Cases 类', link: '/Apex%20参考指南/System%20命名空间/Cases%20类' },
                { text: 'Collator 类', link: '/Apex%20参考指南/System%20命名空间/Collator%20类' },
                { text: 'Comparable 接口', link: '/Apex%20参考指南/System%20命名空间/Comparable%20接口' },
                { text: 'Comparator 接口', link: '/Apex%20参考指南/System%20命名空间/Comparator%20接口' },
                { text: 'Continuation 类', link: '/Apex%20参考指南/System%20命名空间/Continuation%20类' },
                { text: 'Cookie 类', link: '/Apex%20参考指南/System%20命名空间/Cookie%20类' },
                { text: 'Crypto 类', link: '/Apex%20参考指南/System%20命名空间/Crypto%20类' },
                { text: 'Custom Metadata Type Methods', link: '/Apex%20参考指南/System%20命名空间/Custom%20Metadata%20Type%20Methods' },
                
                { text: 'Database 类', link: '/Apex%20参考指南/System%20命名空间/Database%20类' },
                { text: 'Date 类', link: '/Apex%20参考指南/System%20命名空间/Date%20类' },
                { text: 'Datetime 类', link: '/Apex%20参考指南/System%20命名空间/Datetime%20类' },
                
                { text: 'String 类', link: '/Apex%20参考指南/System%20命名空间/String%20类' },

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
