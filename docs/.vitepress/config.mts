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

    sidebar: {
      // 为根路径配置侧边栏
      '/': [],

      // 为 EasyDeploy 部分配置侧边栏
      '/EasyDeploy/': [
        {
          text: 'Introduction',
          items: [
            { text: 'What is EasyDeploy', link: '/EasyDeploy/Document/what-is-easydeploy.html' },
            { text: 'Supported file types', link: '/EasyDeploy/Document/supported-file-types.html' }
          ]
        }
      ],

      // 为 Pano 部分配置侧边栏
      '/Pano/': [
        {
          text: 'Introduction',
          items: [
            { text: 'What is Pano video stitching', link: '/Pano/Document/what-is-pano.html' },
            { text: 'Create a Pano video', link: '/Pano/Document/create-pano.html' },
            { text: 'Contact Us', link: '/Pano/Document/contact-us.html' }
          ]
        }
      ]
    },

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
        // 侧边栏
        sidebar: {
          // 为根路径配置侧边栏
          '/zh/': [],

          // 为 EasyDeploy 部分配置侧边栏
          '/zh/EasyDeploy/': [
            {
              text: '简介',
              items: [
                { text: '什么是 EasyDeploy', link: '/zh/EasyDeploy/Document/what-is-easydeploy.html' },
                { text: '支持文件类型', link: '/zh/EasyDeploy/Document/supported-file-types.html' }
              ]
            }
          ],

          // 为 Pano 部分配置侧边栏
          '/zh/Pano/': [
            {
              text: '简介',
              items: [
                { text: '什么是全景视频拼接', link: '/zh/Pano/Document/what-is-pano.html' },
                { text: '创建一个全景视频', link: '/zh/Pano/Document/create-pano.html' },
                { text: '联系我们', link: '/zh/Pano/Document/contact-us.html' }
              ]
            }
          ]
        },
      }
    },
  }
})
