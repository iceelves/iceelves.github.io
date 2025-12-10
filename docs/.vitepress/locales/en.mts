export default {
    label: "English",
    lang: "en-US",
    link: "/en/",
    title: "IceElves",
    description: "Professional software solution provider, focusing on visual algorithm products for enterprises and technology developers, covering core areas such as 3D reconstruction and panoramic video stitching, providing professional customized development services.",
    keywords: "3D Reconstruction,Tilt photography modeling,3DGS,Panoramic video stitching,Custom Development",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/en/', hreflang: 'en-US' },
            {
                text: 'Product',
                items: [
                    { text: 'Easy Deploy', link: '/en/EasyDeploy/', hreflang: 'US' },
                    { text: 'Pano Stitching', link: '/en/Pano/', hreflang: 'US' }
                ],
            }
        ],

        // 侧边栏
        sidebar: {
            // 为根路径配置侧边栏
            '/en/': [],

            // 为 EasyDeploy 部分配置侧边栏
            '/en/EasyDeploy/': [
                {
                    text: 'Introduction',
                    items: [
                        { text: 'What is EasyDeploy', link: '/en/EasyDeploy/Document/what-is-easydeploy.html', hreflang: 'US' },
                        { text: 'Supported file types', link: '/en/EasyDeploy/Document/supported-file-types.html', hreflang: 'US' }
                    ]
                }
            ],

            // 为 Pano 部分配置侧边栏
            '/en/Pano/': [
                {
                    text: 'Introduction',
                    items: [
                        { text: 'What is Pano video stitching', link: '/en/Pano/Document/what-is-pano.html', hreflang: 'US' },
                        { text: 'Create a Pano video', link: '/en/Pano/Document/create-pano.html', hreflang: 'US' },
                        { text: 'More Settings', link: '/en/Pano/Document/more-settings.html', hreflang: 'US' },
                        { text: 'Pano Player', link: '/en/Pano/Document/pano-player.html', hreflang: 'US' },
                        { text: 'Custom Development', link: '/en/Pano/Document/custom-development.html', hreflang: 'US' },
                        { text: 'Contact Us', link: '/en/Pano/Document/contact-us.html', hreflang: 'US' }
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
            message: 'Beijing BingYun Information Technology Co., Ltd.',
            copyright: 'Copyright &copy; 2019 - present www.iceelves.com All Rights Reserved'
        },

        // 左上角 LOGO
        logo: '/logo.png',
    }
}
