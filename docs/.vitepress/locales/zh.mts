export default {
    label: "简体中文",
    lang: "zh-CN",
    link: "/zh/",
    title: "冰云科技",
    description: "专业软件方案提供商，专注于面向企业与技术开发者的视觉算法产品，覆盖三维重建、全景视频拼接等核心方向，提供专业的定制化开发服务。",
    keywords: "三维重建,倾斜摄影建模,3DGS,全景视频拼接,定制化开发",
    themeConfig: {
        nav: [
            { text: '首页', link: '/zh/', hreflang: 'zh-CN' },
            {
                text: '产品',
                items: [
                    { text: '轻松部署', link: '/zh/EasyDeploy/', hreflang: 'zh-CN' },
                    { text: '全景拼接', link: '/zh/Pano/', hreflang: 'zh-CN' }
                ],
            }
        ],

        // 侧边栏
        sidebar: {
            // 为根路径配置侧边栏
            '/zh/': [],

            // 为 EasyDeploy 部分配置侧边栏
            '/zh/EasyDeploy/': [
                {
                    text: '简介',
                    items: [
                        { text: '什么是 EasyDeploy', link: '/zh/EasyDeploy/Document/what-is-easydeploy.html', hreflang: 'zh-CN' },
                        { text: '支持文件类型', link: '/zh/EasyDeploy/Document/supported-file-types.html', hreflang: 'zh-CN' }
                    ]
                }
            ],

            // 为 Pano 部分配置侧边栏
            '/zh/Pano/': [
                {
                    text: '简介',
                    items: [
                        { text: '什么是全景视频拼接', link: '/zh/Pano/Document/what-is-pano.html', hreflang: 'zh-CN' },
                        { text: '创建一个全景视频', link: '/zh/Pano/Document/create-pano.html', hreflang: 'zh-CN' },
                        { text: '更多设置', link: '/zh/Pano/Document/more-settings.html', hreflang: 'zh-CN' },
                        { text: '全景投屏', link: '/zh/Pano/Document/pano-player.html', hreflang: 'zh-CN' },
                        { text: '定制开发', link: '/zh/Pano/Document/custom-development.html', hreflang: 'zh-CN' },
                        { text: '联系我们', link: '/zh/Pano/Document/contact-us.html', hreflang: 'zh-CN' }
                    ]
                }
            ]
        },

        // 社交链接
        socialLinks: [
            { icon: 'github', link: 'https://github.com/iceelves' }
        ],

        // 页脚
        footer: {
            message: '北京冰云信息科技有限公司',
            copyright: 'Copyright &copy; 2019 - present www.iceelves.com All Rights Reserved'
        },

        // 左上角 LOGO
        logo: '/logo.png',
    }
}
