---
title: 新贡献者向导
keywords: Pixiu
description: 这篇向导旨在给正在准备向 Pixiu 提交贡献的新手提供指导。
---

# 新贡献者向导

这篇向导旨在给正在准备向 Pixiu 提交贡献的新手提供指导。


### 报告问题

您始终可以通过Github [Issues](https://github.com/apache/dubbo-go-pixiu/issues) 向 Pixiu 报告问题。


### 发送 pull request

* 参考[pull request template](https://github.com/seata/seata/blob/develop/.github/PULL_REQUEST_TEMPLATE.md)
* 在您发送pull request之前，请在本地进行相应的 CI 检查，具体操作请看如下所示步骤：

#### import 拆分
社区推荐代码的 import 块按照所属进行拆分，有一个工具可以自动将import拆分 
imports-formatter -path . -module github.com/apache/dubbo-go-pixiu -bl false 

#### 证书检查

社区代码必须有 apache的 license，可以通过下列命令自动判断检查或增加license
https://github.com/apache/skywalking-eyes

#### ci 相关命令
排版检查
go fmt ./... && git status && [[ -z `git status -s` ]]

golint 静态检查
GO111MODULE=on golangci-lint run --timeout=10m -v --disable-all --enable=govet --enable=staticcheck --enable=ineffassign --enable=misspell

#### 单测
go mod vendor && go test ./pkg/... -coverprofile=coverage.txt -covermode=atomic

#### 集成测试

chmod +x start_integrate_test.sh && chmod +x integrate_test.sh && ./start_integrate_test.sh


