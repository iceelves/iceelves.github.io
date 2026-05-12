---
title: 支持文件类型
description: 轻松部署是一个在 Windows 中运行的软件托管程序，更方便的运行多个应用程序，控制台程序，命令行程序或脚本程序。
keywords: 轻松部署
---

# 支持文件类型
默认支持可执行文件(*.exe) 与批处理文件(*.bat) 执行。
同时也支持脚本文件，例如：Python(*.py)、Powershell(*.ps1)。

## 配置方法
### 可执行文件(*.exe)
| 类型 | 内容 |
| --- | --- |
| Service Name | 自定义服务名称 |
| Service Path | 选择 *.exe 文件 |
| Service Path Type | 以绝对路径或以相对路径保存 |
| Parameter | 应用程序参数 |

### 批处理文件(*.bat)
| 类型 | 内容 |
| --- | --- |
| Service Name | 自定义服务名称 |
| Service Path | 选择 *.bat 文件 |
| Service Path Type | 以绝对路径或以相对路径保存 |
| Parameter | 无应用程序参数 |

### Python 脚本(*.py)
| 类型 | 内容 |
| --- | --- |
| Service Name | 自定义服务名称 |
| Service Path | 固定内容：python |
| Service Path Type | 任意 |
| Parameter | Python 脚本文件路径 |

### Powershell 脚本(*.ps1)
| 类型 | 内容 |
| --- | --- |
| Service Name | 自定义服务名称 |
| Service Path | 固定内容：powershell |
| Service Path Type | 任意 |
| Parameter | Powershell 脚本文件路径 |