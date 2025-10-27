# 其他配置
在启用全景视频拼接前还需要做一些工作。
![拼接配置](/Pano/StitchingConfig.jpg)

## 添加相机
以视频流 RTSP、Onvif 等方式添加到相机列表中，会按照拼接顺序获取视频流进行拼接。

注意：应该与创建拼接时的画面数量与分辨率分辨率保持一致。

## 配置拼接参数
拼接配置即为推流参数配置，主码流为默认必须勾选，根据算法拼接出的画面会给出建议播放大小，通常为标准 16:9 的倍数横向拼接展示。

根据配置可选择使用 H.264 或 H.265 方式编码，是否使用 Nvidia 的 CUDA 加速，是否需要启动 RTSP 服务进行推流（不勾选则需要自行启动 RTSP、RTMP 服务器进行推流）。

子码流推流可选，通常为主码流分辨率的一半，适合在网速较差的环境中预览使用。

## 配置 OSD
根据需求配置 OSD 叠加显示，可选择 OSD 类型与字体、坐标、文字大小、内边距。

### 选择 OSD Type

|  OSD Type   | Function  |
|  ----  | ----  |
| NullValue | 空值 |
| DateTime | 日期时间类型 |
| FixedText | 固定文本类型 |

### 选择 OSD 样式类型

| OSD Style Type | Function |
|  ----  | ----  |
| TransparentBackgroundWhiteFont | 半透明底白字 |
| TransparentBackgroundBlackFont | 半透明底黑字 |
| WhiteFontWithBlackBorder | 白字黑边框 |
| BlackFontWithWhiteBorder | 黑字白边框 |
| BlackandWhiteBrightnessInversion | 黑白亮度反色 |

![叠加 OSD](/Pano/OverlayOSD.jpg)