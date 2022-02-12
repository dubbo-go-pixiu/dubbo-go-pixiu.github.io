import React from 'react';

export default {
  'en-us': {
    barText: 'Community',
    events: {
      title: 'Events & News',
      list: [
        {
          img: '/img/event.png',
          title: 'Pixiu 0.4.0 release',
          content: 'Pixiu 0.4.0 release',
          dateStr: 'Dec 16，2021',
          link: 'https://mp.weixin.qq.com/s/dok42ssPJqazjeSRYaifVw',
        },
      ]
    },
    contacts: {
      title: 'Talk To Us',
      desc: 'Feel free to contact us via the following channel.',
      list: [
  {
      img: '/img/dingding.png',
      imgHover: '/img/dingding.png',
      title: 'Dubbogo2 group',
  },
  {
      img: '/img/wechat.png',
      imgHover: '/img/wechat.png',
      title: 'wechat',
  },
],
    },
    contributorGuide: {
      title: 'Contributor Guide',
      desc: 'You can always contribute to Seata.',
      list: [
        {
          img: '/img/channels/email_gray.svg',
          title: 'Mailing List',
          content: <span>Join our mailing list.</span>,
        },
        {
          img: '/img/channels/github_gray.svg',
          title: 'Issue',
          content: <span>Submit a <a href="https://github.com/apache/dubbo-go-pixiu/issues/new">new issue</a>.</span>,
        },
        {
          img: '/img/documents.png',
          title: 'Documents',
          content: <span>Improve the <a href="https://github.com/dubbogo/pixiu.github.io">documentation</a>.</span>,
        },
        {
          img: '/img/pullrequest.png',
          title: 'Pull Request',
          content: <span>Create a brilliant <a href="https://github.com/apache/dubbo-go-pixiu/pulls">pull request</a>.  </span>,
        },
      ],
    },
  },
  'zh-cn': {
    barText: '社区',
    events: {
      title: '事件 & 新闻',
      list: [
        {
          img: '/img/event.png',
          title: 'Pixiu 0.4.0 发布',
          content: 'Pixiu 0.4.0 发布，动态从 Spring Cloud 和 Dubbo 注册中心拉取路由和集群配置数据',
          dateStr: 'Dec 16，2021',
          link: 'https://mp.weixin.qq.com/s/dok42ssPJqazjeSRYaifVw',
        },
        {
          img: '/img/event3.png',
          title: 'ApacheConAsia2021 演讲',
          content: '云原生高性能网关 dubbo_go pixiu 介绍',
          dateStr: 'Aug 19，2021',
          link: 'https://www.bilibili.com/video/BV1uL4y1e7Pw?from=search&seid=14616380250806627212&spm_id_from=333.337.0.0',
        },
      ]
    },
    contacts: {
      title: '联系我们',
      desc: '有问题需要反馈？请通过一下方式联系我们。',
        list: [
            {
                img: '/img/dingding.png',
                imgHover: '/img/dingding.png',
                title: 'Dubbogo2 钉钉群聊',
            },
            {
                img: '/img/wechat.png',
                imgHover: '/img/wechat.png',
                title: '微信公众号',
            },
      ],
    },
    contributorGuide: {
      title: '贡献指南',
      desc: '欢迎为 Seata 做贡献！',
      list: [
        {
          img: '/img/channels/email_gray.svg',
          title: '邮件列表',
          content: <span>加入我们的邮件列表。</span>,
        },
        {
          img: '/img/channels/github_gray.svg',
          title: '报告问题',
          content: <span>提交<a href="https://github.com/apache/dubbo-go-pixiu/issues/new">新问题</a>。</span>,
        },
        {
          img: '/img/documents.png',
          title: '改进文档',
          content: <span>改进<a href="https://github.com/dubbogo/pixiu.github.io">文档</a>。</span>,
        },
        {
          img: '/img/pullrequest.png',
          title: '提交 PR',
          content: <span>创建一个<a href="https://github.com/apache/dubbo-go-pixiu/pulls">PR</a>。</span>,
        },
      ],
    },
  },
};
