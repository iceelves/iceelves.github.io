---
title: 使用说明
description: 轻松安装（Easy Install）是一款专为 Windows 软件开发者设计的现代化打包工具。
keywords: 轻松安装
---

# 使用说明
建议通过 Builder 程序创建配置文件并打包

![Builder](/EasyInstall/Builder.jpg)

## 配置文件
所有安装行为由一个 JSON 配置对象描述，打包时序列化后存入 EXE，安装时反序列化读取：

``` json
{
  "AppName": "MyApp",
  "AppVersion": "1.0.0",
  "Company": "My Company",
  "CompanySimplify": "myco",
  "Website": "https://example.com",
  "DefaultInstallDir": "{ProgramFiles}\\{Company}\\{AppName}",
  "RegistryKey": "MyApp",
  "MainExecutable": "MyApp.exe",
  "LicenseText": "...",
  "CompressionMethod": "Lzma",
  "UncompressedSize": 157286400,
  "Language": "",
  "DesktopShortcut": true,
  "StartMenuShortcut": true,
  "StartWithWindows": false,
  "LaunchAfterInstall": false,
  "InstallIconBase64": "...",
  "UninstallIconBase64": "...",
  "Style": { ... },
  "Files": [ ... ]
}
```

UncompressedSize 在打包时通过遍历文件系统计算（不读取文件内容），存入 JSON，安装时直接读取用于显示"所需磁盘空间"，无需解压扫描。

### 占位符

| 占位符 | 解析结果 |
| --- | --- |
| \{ProgramFiles\} | C:\Program Files (x86) |
| \{ProgramFiles64\} | C:\Program Files |
| \{LocalAppData\} | C:\Users\<user>\AppData\Local |
| \{AppData\} | C:\Users\<user>\AppData\Roaming |
| \{Company\} | CompanySimplify 字段值 |
| \{AppName\} | AppName 字段值 |

### 样式配置

``` json
"Style": {
  "HideTitleBar": false,
  "InstallBackgroundBase64": "...",
  "InstallCarouselImages": ["...", "..."],
  "InstallButtonColor": "#4083FD",
  "InstallCheckBoxColor": "#69AFE7",
  "InstallProgressBarColor": "#1E90FF",
  "InstallWaveColor": "#6DB8FF",
  "UninstallBackgroundBase64": "...",
  "UninstallCarouselImages": [],
  "UninstallButtonColor": "#4083FD",
  "UninstallCheckBoxColor": "#69AFE7",
  "UninstallProgressBarColor": "#1E90FF",
  "UninstallWaveColor": "#6DB8FF"
}
```

## 安装模式
### 界面安装
默认配置启动后显示 安装向导，分三个页面：
1. 起始页：显示应用信息、许可协议、安装路径选择、快捷方式选项、磁盘空间信息
1. 安装页：流式解压并显示进度，同时写注册表、生成卸载程序、创建快捷方式
1. 完成页：显示安装完成，可选择立即启动

### 静默安装
传入 /silent 或 -s 参数时不显示任何 UI，直接执行安装，结果写入 Windows 事件日志。

```
MyApp_install.exe /silent
MyApp_install.exe /silent /dir="D:\MyApp"
MyApp_install.exe /uninstall /silent
```

安装路径优先级：/dir= 参数 > 注册表中上次安装路径 > 配置文件默认路径。

### 卸载模式
文件名为 uninstall.exe 或传入 /uninstall 参数时进入卸载模式。卸载程序自身的删除通过 cmd.exe 延迟执行。

## 命令行接口
EasyInstall.exe 支持以下参数风格，与常见 CLI 工具保持一致：

```
/key value    --key value    -k value    --key=value    /key:value
```

完整用法：
```
EasyInstall <config.json> [选项]

选项：
  --output, -o     输出路径（默认：AppName_Version_时间戳_install.exe）
  --setup, -s      Setup.exe 模板路径（默认：自动检测同目录）
  --verbose        显示详细输出
  --version        显示版本信息
  --help           显示帮助
退出码：0 成功，1 参数错误，2 配置文件错误，3 打包失败。
```