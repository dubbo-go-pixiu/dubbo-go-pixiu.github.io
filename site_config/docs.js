export default {
    'en-us': {
        sidemenu: [
            {
                title: 'Overview',
                children: [
                    {
                        title: 'What is Pixiu?',
                        link: '/en-us/docs/overview/what-is-pixiu.html',
                    },
                    {
                        title: 'Terminology',
                        link: '/en-us/docs/overview/terminology.html',
                    },
                    {
                        title: 'FAQ',
                        link: '/en-us/docs/overview/faq.html',
                    }
                ],
            },

            {
                title: 'User Doc',
                children: [
                    {
                        title: 'Quick Start',
                        link: '/en-us/docs/user/quickstart.html',
                    },
                    {
                        title: 'API Guide',
                        link: '/en-us/docs/user/api.html',
                    },
                    {
                        title: 'Microservices Framework Supports',
                        link: '/en-us/docs/user/microservice.html',
                    }
                ],
            },
            {
                title: 'Developer Guide',
                children: [
                    {
                        title: 'Transaction Mode',
                        children: [
                            {
                                title: 'Seata AT mode',
                                link: '/en-us/docs/dev/mode/at-mode.html',
                            },
                            {
                                title: 'Seata TCC mode',
                                link: '/en-us/docs/dev/mode/tcc-mode.html',
                            },
                            {
                                title: 'Seata Saga mode',
                                link: '/en-us/docs/dev/mode/saga-mode.html',
                            }
                        ],
                    },
                    {
                        title: 'Metrics design',
                        link: '/en-us/docs/dev/seata-mertics.html',
                    },
                ],
            },
            {
                title: 'Ops Guide',
                children: [
                    {
                        title: 'Configuration Isolation',
                        link: '/en-us/docs/ops/multi-configuration-isolation.html',
                    },
                    {
                        title: 'Deploy',
                        children: [
                            {
                                title: 'Deploy Directly',
                                link: '/en-us/docs/ops/deploy-server.html',
                            },
                            {
                                title: 'Deploy by Docker',
                                link: '/en-us/docs/ops/deploy-by-docker.html',
                            },
                            {
                                title: 'Deploy by Kubernetes',
                                link: '/en-us/docs/ops/deploy-by-kubernetes.html',
                            },
                            {
                                title: 'Deploy by Helm',
                                link: '/en-us/docs/ops/deploy-by-helm.html',
                            },
                            {
                                title: 'Deploy in High Available Usage',
                                link: '/en-us/docs/ops/deploy-ha.html',
                            },
                        ]
                    }
                ]
            },
        ],
        barText: 'Documentation'
    },
    'zh-cn': {
        sidemenu: [
            {
                title: '概述',
                children: [
                    {
                        title: 'Pixiu 是什么？',
                        link: '/zh-cn/docs/overview/what-is-pixiu.html',
                    },
                    {
                        title: '术语表',
                        link: '/zh-cn/docs/overview/terminology.html',
                    },
                    {
                        title: 'FAQ',
                        link: '/zh-cn/docs/overview/faq.html',
                    }
                ],
            },
            {
                title: '用户文档',
                children: [
                    {
                        title: '快速启动',
                        link: '/zh-cn/docs/user/quickstart.html',
                    },
                    {
                        title: '启动参数和配置简介',
                        link: '/zh-cn/docs/user/configurations.html',
                    },
                    {
                        title: 'Listener 介绍',
                        children: [
                            {
                                title: 'HTTP Listener 介绍',
                                link: '/zh-cn/docs/user/listener/http.html',
                            },
                            {
                                title: 'HTTP2 Listener 介绍',
                                link: '/zh-cn/docs/user/listener/http2.html',
                            },
                            {
                                title: 'TCP Listener 介绍',
                                link: '/zh-cn/docs/user/listener/tcp.html',
                            },
                            {
                                title: 'Triple Listener 介绍',
                                link: '/zh-cn/docs/user/listener/triple.html',
                            }
                        ]
                    },
                    {
                        title: 'NetworkFilter 介绍',
                        children: [
                            {
                                title: 'Http NetworkFitler 介绍',
                                link: '/zh-cn/docs/user/networkfilter/http.html',
                            },
                            {
                                title: 'Grpc NetworkFitler 介绍',
                                link: '/zh-cn/docs/user/networkfilter/grpc.html',
                            },
                            {
                                title: 'Dubbo NetworkFitler 介绍',
                                link: '/zh-cn/docs/user/networkfilter/dubbo.html',
                            }
                        ]
                    },
                    {
                        title: 'HttpFilter 介绍',
                        children: [
                            {
                                title: 'Dubbo HttpFilter 介绍',
                                link: '/zh-cn/docs/user/httpfilter/dubbo.html',
                            },
                            {
                                title: 'RateLimiter 介绍',
                                link: '/zh-cn/docs/user/httpfilter/ratelimit.html',
                            },
                            {
                                title: '断路器介绍',
                                link: '/zh-cn/docs/user/httpfilter/hystrix.html',
                            }
                        ]
                    },
                    {
                        title: 'Adapter 介绍',
                        children: [
                            {
                                title: 'Dubbo 集群中心 Adapter',
                                link: '/zh-cn/docs/user/adapter/dubbo.html',
                            },
                            {
                                title: 'Spring Cloud 集群中心 Adapter',
                                link: '/zh-cn/docs/user/adapter/springcloud.html',
                            }
                        ]
                    },
                    {
                        title: '案例介绍',
                        children: [
                            {
                                title: 'HTTP代理案例',
                                link: '/zh-cn/docs/user/samples/http_proxy.html',
                            },
                            {
                                title: 'Spring Cloud 集群案例',
                                link: '/zh-cn/docs/user/samples/springcloud.html',
                            }
                        ]
                    },
                    {
                        title: '附录',
                        children: [
                            {
                                title: 'HTTP to Dubbo 默认转换协议',
                                link: '/zh-cn/docs/user/appendix/http-to-dubbo-default-stragety.html',
                            }
                        ]
                    }, {
                        title: '部署',
                        link: '/zh-cn/docs/user/deployment.html',
                    }
                ]
            },
            {
                title: '开发者指南',
                children: [
                    {
                        title: 'Filter 扩展',
                        children: [
                            {
                                title: 'Pixiu Filter 体系介绍',
                                link: '/zh-cn/docs/dev/filter-extension.html',
                            }
                        ],
                    },
                    {
                        title: 'Trie 前缀树介绍',
                        link: '/zh-cn/docs/dev/trie.html',
                    },
                    {
                        title: '文档和博客贡献',
                        link: '/zh-cn/docs/dev/blog.html',
                    },
                ],
            },
            {
                title: '质量指标',
                children: [
                    {
                        title: '性能',
                        link: '/zh-cn/docs/user/quality/performance.html',
                    },
                    {
                        title: '稳定性',
                        link: '/zh-cn/docs/user/quality/stability.html',
                    }
                ]

            },
        ],
        barText: '文档',
    },
};
