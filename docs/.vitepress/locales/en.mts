export default {
    label: "English",
    lang: "en-US",
    link: "/",
    title: "IceElves",
    description: "Professional software solution provider, focusing on visual algorithm products for enterprises and technology developers, covering core areas such as 3D reconstruction and panoramic video stitching, providing professional customized development services.",
    keywords: "3D Reconstruction,Tilt photography modeling,3DGS,Panoramic video stitching,Custom Development",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/', hreflang: 'en' },
            {
                text: 'Product',
                items: [
                    { text: 'Easy Deploy', link: '/EasyDeploy/', hreflang: 'en' },
                    { text: 'Pano Stitching', link: '/Pano/', hreflang: 'en' }
                ],
            }
        ],

        // 侧边栏
        sidebar: {
            // 为根路径配置侧边栏
            '/': [],

            // 为 EasyDeploy 部分配置侧边栏
            '/EasyDeploy/': [
                {
                    text: 'Introduction',
                    items: [
                        { text: 'What is EasyDeploy', link: '/EasyDeploy/Document/what-is-easydeploy.html', hreflang: 'en' },
                        { text: 'Supported file types', link: '/EasyDeploy/Document/supported-file-types.html', hreflang: 'en' }
                    ]
                }
            ],

            // 为 Pano 部分配置侧边栏
            '/Pano/': [
                {
                    text: 'Introduction',
                    items: [
                        { text: 'What is Pano video stitching', link: '/Pano/Document/what-is-pano.html', hreflang: 'en' },
                        { text: 'Create a Pano video', link: '/Pano/Document/create-pano.html', hreflang: 'en' },
                        { text: 'More Settings', link: '/Pano/Document/more-settings.html', hreflang: 'en' },
                        { text: 'Pano Player', link: '/Pano/Document/pano-player.html', hreflang: 'en' },
                        { text: 'Custom Development', link: '/Pano/Document/custom-development.html', hreflang: 'en' },
                        { text: 'Contact Us', link: '/Pano/Document/contact-us.html', hreflang: 'en' }
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
