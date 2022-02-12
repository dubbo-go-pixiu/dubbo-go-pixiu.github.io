// 全局的一些配置
export default {
    rootPath: '',
    port: 8080,
    domain: 'pixiu.github.io', // 站点部署域名，无需协议和path等
    defaultSearch: 'baidu', // 默认搜索引擎，baidu或者google
    defaultLanguage: 'en-us',
    'en-us': {
        pageMenu: [
            {
                key: 'home', // 用作顶部菜单的选中
                text: 'HOME',
                link: '/en-us/index.html',
            },
            // {
                // key: 'docs',
                // text: 'DOCS',
                // link: '/en-us/docs/overview/what-is-pixiu.html',
            // },

            // {
                // key: 'developers',
                // text: 'DEVELOPERS',
                // link: '/en-us/docs/developers/developers_dev.html',
            // },
            // {
                // key: 'blog',
                // text: 'BLOG',
                // link: '/en-us/blog/index.html',
            // },
            // {
                // key: 'community',
                // text: 'COMMUNITY',
                // link: '/en-us/community/index.html',
            // },
            // {
                // key: 'download',
                // text: 'DOWNLOAD',
                // link: '/en-us/blog/download.html',
            // }
        ],
        vision: {
            title: 'Vision',
            content: 'Pixiu is a high-performance API gateway and multi-language solution Sidecar in the Dubbo ecosystem',
        },
        asf: {
            title: 'ASF',
            list: [
                {
                    text: '基金会',
                    link: 'http://www.apache.org/',
                },
                {
                    text: '证书',
                    link: 'http://www.apache.org/licenses/',
                },
                {
                    text: '事件',
                    link: 'http://www.apache.org/events/current-event',
                },
                {
                    text: '赞助',
                    link: 'http://www.apache.org/foundation/sponsorship.html',
                },
                {
                    text: '赞助',
                    link: 'http://www.apache.org/foundation/thanks.html',
                }
            ],
        },
        documentation: {
            title: 'Documentation',
            list: [
                {
                    text: 'What is Pixiu?',
                    link: '/en-us/docs/overview/what-is-pixiu.html',
                },
                {
                    text: 'Quick Start',
                    link: '/en-us/docs/user/quickstart.html',
                },
                {
                    text: 'Report a doc issue',
                    link: 'https://github.com/seata/seata.github.io/issues/new',
                },
                {
                    text: 'Edit This Page on GitHub',
                    link: 'https://github.com/seata/seata.github.io',
                }
            ],
        },
        resources: {
            title: 'Resources',
            list: [
                {
                    text: 'Blog',
                    link: '/en-us/blog/index.html',
                },
                {
                    text: 'Community',
                    link: '/en-us/community/index.html',
                },
            ],
        },
        copyright: 'Copyright © 2021 Seata',
    },
    'zh-cn': {
        pageMenu: [
            {
                key: 'home',
                text: '首页',
                link: '/zh-cn/index.html',
            },
            {
                key: 'docs',
                text: '文档',
                link: '/zh-cn/docs/overview/what-is-pixiu.html',
            },
            
            {
                key: 'developers',
                text: '开发者',
                link: '/zh-cn/docs/developers/developers_dev.html',
            },
            {
                key: 'blog',
                text: '博客',
                link: '/zh-cn/blog/index.html',
            },
            {
                key: 'community',
                text: '社区',
                link: '/zh-cn/community/index.html',
            },
        ],
        vision: {
            title: '愿景',
            content: 'Pixiu 是一款 Dubbo 生态下的高性能 API 网关和多语言解决方案 Sidecar',
        },
        asf: {
            title: 'ASF',
            list: [
                {
                    text: '基金会',
                    link: 'http://www.apache.org/',
                },
                {
                    text: '证书',
                    link: 'http://www.apache.org/licenses/',
                },
                {
                    text: '事件',
                    link: 'http://www.apache.org/events/current-event',
                },
                {
                    text: '赞助',
                    link: 'http://www.apache.org/foundation/sponsorship.html',
                },
                {
                    text: '赞助',
                    link: 'http://www.apache.org/foundation/thanks.html',
                }
            ],
        },
        documentation: {
            title: '文档',
            list: [
                {
                    text: 'Pixiu 是什么？',
                    link: '/zh-cn/docs/overview/what-is-pixiu.html',
                },
                {
                    text: '快速开始',
                    link: '/zh-cn/docs/user/quickstart.html',
                },
                {
                    text: '报告文档问题',
                    link: 'https://github.com/dubbogo/pixiu.github.io/issues/new',
                },
                {
                    text: '在Github上编辑此文档',
                    link: 'https://github.com/dubbogo/pixiu.github.io',
                }
            ],
        },
        resources: {
            title: '资源',
            list: [
                {
                    text: '博客',
                    link: '/zh-cn/blog/index.html',
                },
                {
                    text: '社区',
                    link: '/zh-cn/community/index.html',
                },
            ],
        },
        copyright: 'Copyright © 2022 Pixiu',
    },
};
