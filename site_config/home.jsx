import React from 'react';

export default {
    'zh-cn': {
        brand: {
            brandName: 'Dubbo-Go-Pixiu',
            briefIntroduction: 'Pixiu 是一款 Dubbo 生态下的高性能 API 网关和多语言解决方案 Sidecar',
            buttons: [
                {
                    text: '快速入门',
                    link: '/zh-cn/docs/overview/what-is-seata.html',
                    type: 'primary',
                },
                {
                    text: '用户登记',
                    link: 'https://github.com/apache/dubbo-go-pixiu/issues/64',
                    type: 'normal',
                },
                {
                    text: 'Github',
                    link: 'https://github.com/apache/dubbo-go-pixiu',
                    type: 'normal',
                },
            ],
            versionNote: {
                text: 'Release Note of 0.4.0',
                link: 'https://github.com/apache/dubbo-go-pixiu/releases/tag/v0.4.0-rc2',
            },
            releaseDate: 'Released on 11 10, 2021',
        },
        introduction: {
            title: 'Pixiu 是什么？',
            desc: 'Pixiu 是一款开源的 Dubbo 生态的 API 网关和 接入 dubbo 集群的语言解决方案。作为 API 网关形态， Pixiu 能接收外界的网络请求，将其转换为 dubbo 等协议请求，转发给背后集群；作为 Sidecar，Pixiu 期望可以代替代理服务注册到 Dubbo 集群，让多语言服务接入 Dubbo 集群提供更快捷的解决方案',
            img: '/img/pixiu-dubbo-ecosystem.png',
        },
        features: {
            title: '特色功能',
            list: [
                {
                    icon: 'feature-1',
                    title: '多协议支持',
                    content: '目前已支持 Http、Dubbo2、Triple、gRPC 协议代理和转换，其他协议持续集成中',
                },
                {
                    icon: 'feature-2',
                    title: '安全认证',
                    content: '支持 HTTPS、JWT Token 校验等安全认证措施',
                },
                {
                    icon: 'feature-3',
                    title: '注册中心集成',
                    content: '支持从 Dubbo 或 Spring Cloud 集群中获取服务元数据，支持 ZK、Nacos 注册中心',
                },
                {
                    icon: 'feature-4',
                    title: '流量治理',
                    content: '集成 sentinel，支持多种协议限流',
                },
                {
                    icon: 'feature-5',
                    title: '可观测性',
                    content: '集成 opentelemetry 和 jaeger，便于进行分布式链路追踪',
                },
                {
                    icon: 'feature-6',
                    title: '自持 admin 和可视化界面',
                    content: '拥有 pixiu-admin 进行远程管理和可视化',
                },
            ],
        },
        users: {
            title: '谁在使用 Pixiu',
            desc: <span>请在 <a rel="noopener noreferrer" target="_blank"
                              href="https://github.com/apache/dubbo-go-pixiu/issues/64">Wanted: who&#39;s using Pixiu</a> 上提供信息来帮助 Pixiu 做的更好。</span>,
            list: [
            ],
        },
    },
    'en-us': {
        brand: {
            brandName: 'Dubbo-Go-Pixiu',
            briefIntroduction: 'Pixiu is a high-performance API gateway and multi-language solution Sidecar in the Dubbo ecosystem',
            buttons: [
                {
                    text: 'Get Started',
                    link: '/en-us/docs/user/quickstart.html',
                    type: 'primary',
                },
                {
                    text: 'User Registration',
                    link: 'https://github.com/apache/dubbo-go-pixiu/issues/64',
                    type: 'normal',
                },
                {
                    text: 'Github',
                    link: 'https://github.com/apache/dubbo-go-pixiu',
                    type: 'normal',
                },
            ],
            versionNote: {
                text: 'Release Note of 0.4.0',
                link: 'https://github.com/apache/dubbo-go-pixiu/releases/tag/v0.4.0-rc2',
            },
            releaseDate: 'Released on 11 10, 2021',
        },
        
        introduction: {
            title: 'What is Pixiu?',
            desc: 'Pixiu is an open source Dubbo ecosystem API gateway and language solution for accessing dubbo clusters. As an API gateway, Pixiu can receive external network requests, convert them into dubbo and other protocol requests, and forward them to the back cluster; as a sidecar, Pixiu expects to register to the Dubbo cluster instead of the proxy service, allowing multilingual services to access the Dubbo cluster to provide faster solution',
            img: '/img/pixiu-dubbo-ecosystem.png',
        },
        features: {
            title: 'Feature List',
            list: [
                {
                    icon: 'feature-1',
                    title: 'Multi-protocol support',
                    content: 'Currently, Http, Dubbo2, Triple, gRPC protocol proxy and conversion are supported, and other protocols are being continuously integrated',
                },
                {
                    icon: 'feature-2',
                    title: 'Safety certificate',
                    content: 'Support HTTPS, JWT Token verification and other security authentication measures',
                },
                {
                    icon: 'feature-3',
                    title: 'Registry integration',
                    content: 'Support to obtain service metadata from Dubbo or Spring Cloud cluster, support ZK, Nacos registry',
                },
                {
                    icon: 'feature-4',
                    title: 'Traffic management',
                    content: 'Integrate with sentinel, support multiple protocols for rate limiting',
                },
                {
                    icon: 'feature-5',
                    title: 'Observability',
                    content: 'Integrate with opentelemetry and jaeger for distributed tracing',
                },
                {
                    icon: 'feature-6',
                    title: 'Admin and visual interface',
                    content: 'Have pixiu-admin for remote administration and visualization',
                },
            ]
        },
        users: {
            title: 'Who is using Pixiu',
            desc: <span>Please <a rel="noopener noreferrer" target="_blank"
                              href="https://github.com/apache/dubbo-go-pixiu/issues/64">Wanted: who&#39;s using Pixiu</a> to help improving pixiu better.</span>,
            list: [
            ],
        },
    },
};
