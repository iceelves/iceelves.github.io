import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IceElves",
  description: "A VitePress Site",
  base: '/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/iceelves' }
    ],

    // 页脚
    footer: {
      message: 'Beijing BingYun Information Technology Co., Ltd.',
      copyright: 'Copyright &copy; 2019 - present www.iceelves.com All Rights Reserved'
    },

    // 左上角 LOGO
    logo: '/logo.png',
  },

  // 国际化多语言
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      link: '/'
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '例子', link: '/markdown-examples' }
        ],
        // 页脚
        footer: {
          message: '北京冰云信息科技有限公司',
          copyright: 'Copyright &copy; 2019 - present www.iceelves.com All Rights Reserved'
        },
      }
    },
  }
})
