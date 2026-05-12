---
title: 开发说明
description: 轻松安装（Easy Install）是一款专为 Windows 软件开发者设计的现代化打包工具。
keywords: 轻松安装
---

# 开发说明
为了在 Windows 7 SP1 及以上版本在不安装任何运行环境的情况下运行，并且兼顾更方便的 UI 设计，使用 .Net Framework 4.5.2 环境开发。如使用 [Microsoft Visual Studio](https://visualstudio.microsoft.com/) 2022 及以上版本，需要安装 [.Net Framework 4.5.2](https://dotnet.microsoft.com/zh-cn/download/dotnet-framework/thank-you/net452-developer-pack-offline-installer) 开发包。

## 从源码构建
Release 构建通过 Costura.Fody 将 EasyInstall.Core.dll 嵌入 Setup.exe，输出为单文件。Debug 构建不嵌入，需要 DLL 在同目录。

``` CMD
# 克隆仓库
git clone https://github.com/IceElves/EasyInstall.git

# 用 Visual Studio 2019 或以上版本打开 EasyInstall.sln
# 选择 Release 配置，生成解决方案
```

## 项目结构
| 项目              | 说明                       |
| ---------------- | -------------------------- |
| EasyInstall | 控制台程序，用于通过命令打包安装包 |
| EasyInstall.Builder | 安装构建配置程序，用于UI配置并打包应用 |
| EasyInstall.Core | 核心库，包含核心打包解压等核心功能 |
| EasyInstall.Setup | 安装程序，解析配置文件安装与卸载 |

## 安装包格式
EasyInstall 生成的安装包是一个标准的 Windows PE 可执行文件，压缩数据和配置以 Overlay 方式附加在 EXE 末尾。Windows 加载器只处理 PE 头部，忽略末尾的附加数据，因此这个 EXE 可以正常运行。

| Setup | 压缩数据 | JSON 配置 | JSON 长度(4字节) | 压缩数据长度(8字节) | 模数(8字节) |
| --- | --- | --- | --- | --- | --- |
| 标准PE可执行文件 | [1字节压缩类型]+压缩后的文件包 | UTF-8明文，包含所有安装参数 | int32 | int64 | ASCII "EASYINST" |

卸载程序格式相同，但压缩数据长度为 0，只保留 JSON 配置。

## 图标处理
EXE 图标通过 Win32 Resource Update API 写入：

``` csharp
BeginUpdateResource(exePath)
  → UpdateResource(RT_ICON, iconData × N)
  → UpdateResource(RT_GROUP_ICON, grpData)
EndUpdateResource()
```

ImageHelper 负责将任意图片格式（ICO/PNG/JPG/GIF/BMP）统一转换为合法的 ICO 字节：

``` csharp
ICO → 直接使用
PNG → PngToIco()（包装成单图 ICO）
其他 → WPF BitmapImage 解码 → PngBitmapEncoder 重编码为 PNG → PngToIco()
```

内置的默认图标（Install.png、Uninstall.png）以 WPF 资源方式嵌入 EasyInstall.Core.dll，通过 ResourceReader 读取后转换为 ICO。

## 压缩数据格式
压缩数据在解压后是一个自描述的文件包，格式如下：

[4字节 条目数 N]
[4字节 路径长度] [路径 UTF-8] [8字节 文件大小] [文件内容]  × N
路径是相对路径，解压时直接拼接目标目录还原文件树。

支持的压缩算法
| 算法 | 枚举值 | 特点 |
| --- | --- | --- |
| LZMA | 0x03 | 默认，最高压缩率，基于 7-zip SDK |
| GZip | 0x01 | .NET 内置，速度与压缩率均衡 |
| Deflate | 0x02 | .NET 内置，与 GZip 压缩率相同，少 18 字节开销 |
| Store | 0x00 | 无压缩，适合已压缩的资源 |

压缩类型字节存储在压缩数据的第一个字节，解压时自动识别，无需在配置中重复记录。

## 注册表集成

| 项 | HKLM | HKCU |
| ------- | ------------------ | ----------------- |
| 全称      | HKEY_LOCAL_MACHINE | HKEY_CURRENT_USER |
| 作用范围    | 整台电脑（所有用户） | 当前用户 |
| 是否需要管理员 | ✅ 需要 | ❌ 不需要 |
| 常见用途    | 安装软件（系统级） | 用户配置、自启 |

### 标准 Windows 卸载注册表项：
```
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\{RegistryKey}
  DisplayName      = AppName
  DisplayVersion   = AppVersion
  DisplayIcon      = installDir\MainExecutable
  InstallLocation  = installDir
  Publisher        = Company
  UninstallString  = "uninstall.exe" /uninstall
  URLInfoAbout     = Website
```

### 开机自动启动
```
\HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Run\{{RegistryKey:AppName.exe}}
```

## 打包处理流程
```
1. 复制 Setup.exe 模板到输出路径
2. 替换 EXE 图标（Win32 BeginUpdateResource API）
3. 以 FileMode.Append 打开输出 EXE
4. 记录当前位置 dataStartPos
5. 流式压缩，直接写入 EXE（EntryFeedStream → 压缩器 → FileStream）
6. dataLen = 当前位置 - dataStartPos
7. 追加 JSON + jsonLen + dataLen + Magic
```

## 多语言支持
语言资源以 WPF ResourceDictionary（XAML）形式存储在 EasyInstall.Core 中，目前内置简体中文（zh-CN.xaml）和英文（en-US.xaml）。

语言选择逻辑：
* Language 字段为空 → 读取 CultureInfo.CurrentUICulture，以 zh 开头则中文，否则英文
* Language = "zh-CN" → 强制中文
* Language = "en-US" → 强制英文

切换语言通过替换 Application.Resources.MergedDictionaries 中的字典实现，在主窗口显示前完成。

## CI/CD 集成示例

``` YML
# GitHub Actions 示例
- name: Build installer
  run: |
    EasyInstall.exe app.json \
      --setup EasyInstall.Setup.exe \
      --output dist/MyApp_${{ github.ref_name }}_install.exe
```