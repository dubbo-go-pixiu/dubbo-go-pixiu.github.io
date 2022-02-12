---
title: 如何完善 Pixiu 文档和博客建设
keywords:  文档
description: 
---

### 文档类型

- 特性介绍文档
- 案例介绍文档
- 源码分析文档
- 使用经验文档

### 博客贡献需知

本博客基于 seata website 改造而来，使用了 docsite。

- 网站的顶部导航栏可以查看 `/site_config/site.js`，其中可以修改导航栏的名称和数量；
- 首页的修改可以查看 `/site_config/home.jsx`；
- 开发者页面的修改可以查看 `/site_config/develop.js`；
- 社区页面的修改可以查看 `/site_config/comunity.jsx`；
- 对于文档页面的修改可以查看 `/site_config/doc.js`；
- 对于通用页面组件，比如 footer 的修改可以查看 `src` 下的文件；
- 贡献新的文档可以在 `/docs/zh-cn` 中添加对应的 md 文件。
- 贡献博客文章，可以直接在 `/blog/zh-cn` 下添加 md 文件即可。文章中的图片可以放置在 `img/blog/[文章文件名称]/`下，文件开头格式如下


```
---
title: Dubbo 跨语言调用神兽：dubbo-go-pixiu
keywords: Pixiu 介绍
description: dubbo-go-pixiu 项目是一个基于 dubbo-go 发展起来的项目，目前接口协议层支持的是七层的 HTTP 请求调用
author: 冯振宇,于雨
date: 2021-8-25
---
```
