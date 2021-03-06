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
                title: '??????',
                children: [
                    {
                        title: 'Pixiu ????????????',
                        link: '/zh-cn/docs/overview/what-is-pixiu.html',
                    },
                    {
                        title: '?????????',
                        link: '/zh-cn/docs/overview/terminology.html',
                    },
                    {
                        title: 'FAQ',
                        link: '/zh-cn/docs/overview/faq.html',
                    }
                ],
            },
            {
                title: '????????????',
                children: [
                    {
                        title: '????????????',
                        link: '/zh-cn/docs/user/quickstart.html',
                    },
                    {
                        title: '???????????????????????????',
                        link: '/zh-cn/docs/user/configurations.html',
                    },
                    {
                        title: 'Listener ??????',
                        children: [
                            {
                                title: 'HTTP Listener ??????',
                                link: '/zh-cn/docs/user/listener/http.html',
                            },
                            {
                                title: 'HTTP2 Listener ??????',
                                link: '/zh-cn/docs/user/listener/http2.html',
                            },
                            {
                                title: 'TCP Listener ??????',
                                link: '/zh-cn/docs/user/listener/tcp.html',
                            },
                            {
                                title: 'Triple Listener ??????',
                                link: '/zh-cn/docs/user/listener/triple.html',
                            }
                        ]
                    },
                    {
                        title: 'NetworkFilter ??????',
                        children: [
                            {
                                title: 'Http NetworkFitler ??????',
                                link: '/zh-cn/docs/user/networkfilter/http.html',
                            },
                            {
                                title: 'Grpc NetworkFitler ??????',
                                link: '/zh-cn/docs/user/networkfilter/grpc.html',
                            },
                            {
                                title: 'Dubbo NetworkFitler ??????',
                                link: '/zh-cn/docs/user/networkfilter/dubbo.html',
                            }
                        ]
                    },
                    {
                        title: 'HttpFilter ??????',
                        children: [
                            {
                                title: 'Dubbo HttpFilter ??????',
                                link: '/zh-cn/docs/user/httpfilter/dubbo.html',
                            },
                            {
                                title: 'RateLimiter ??????',
                                link: '/zh-cn/docs/user/httpfilter/ratelimit.html',
                            },
                            {
                                title: '???????????????',
                                link: '/zh-cn/docs/user/httpfilter/hystrix.html',
                            }
                        ]
                    },
                    {
                        title: 'Adapter ??????',
                        children: [
                            {
                                title: 'Dubbo ???????????? Adapter',
                                link: '/zh-cn/docs/user/adapter/dubbo.html',
                            },
                            {
                                title: 'Spring Cloud ???????????? Adapter',
                                link: '/zh-cn/docs/user/adapter/springcloud.html',
                            }
                        ]
                    },
                    {
                        title: '????????????',
                        children: [
                            {
                                title: 'HTTP????????????',
                                link: '/zh-cn/docs/user/samples/http_proxy.html',
                            },
                            {
                                title: 'Spring Cloud ????????????',
                                link: '/zh-cn/docs/user/samples/springcloud.html',
                            }
                        ]
                    },
                    {
                        title: '??????',
                        children: [
                            {
                                title: 'HTTP to Dubbo ??????????????????',
                                link: '/zh-cn/docs/user/appendix/http-to-dubbo-default-stragety.html',
                            }
                        ]
                    }, {
                        title: '??????',
                        link: '/zh-cn/docs/user/deployment.html',
                    }
                ]
            },
            {
                title: '???????????????',
                children: [
                    {
                        title: 'Filter ??????',
                        children: [
                            {
                                title: 'Pixiu Filter ????????????',
                                link: '/zh-cn/docs/dev/filter-extension.html',
                            }
                        ],
                    },
                    {
                        title: 'Trie ???????????????',
                        link: '/zh-cn/docs/dev/trie.html',
                    },
                    {
                        title: '?????????????????????',
                        link: '/zh-cn/docs/dev/blog.html',
                    },
                ],
            },
            {
                title: '????????????',
                children: [
                    {
                        title: '??????',
                        link: '/zh-cn/docs/user/quality/performance.html',
                    },
                    {
                        title: '?????????',
                        link: '/zh-cn/docs/user/quality/stability.html',
                    }
                ]

            },
        ],
        barText: '??????',
    },
};
