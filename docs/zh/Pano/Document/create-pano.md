# 如何创建一个全景视频
## 基础设施
零定制成本安装，无缝兼容 RTSP、Onvif 协议的安防摄像机，覆盖全球 95% 以上品牌设备，无需更换现有硬件或购买专用终端。

选择 2-12 个尽可能相同品牌型号以及分辨率和焦段的摄像头，安装按照扇形排布，临近两个相机间叠加 ≥10% ~ ≤90% 画面用于拼接，固定于墙面或者龙门架等监控设备承载结构上，避免因自然环境造成的画面抖动。

![监控相机部署](/Pano/CameraDeployment.jpg)

## 创建拼接
如有任何拼接相关问题可以选择[联系我们](/zh/Pano/Document/contact-us)。

### 安装前测试
安装前以最小成本测试使用效果是否满足使用需求，使用手机站在高处按照顺序拍摄一组照片，使用 [AutoStitch](https://matthewalunbrown.com/autostitch/autostitch.html) 或者使用 [Photoshop](https://www.adobe.com/products/photoshop.html) 中的 [Photomerge](https://helpx.adobe.com/photoshop/using/create-panoramic-images-photomerge.chromeless.html) 功能创建全景拼接照片。

![AutoStitch splash](https://matthewalunbrown.com/files/autostitch/splash.png)

### 已安装测试
对于已安装监控相机可以直接通过 PanoramaStitching 的客户端程序，输入相机参数连接到相机后自动创建拼接，程序会自动进行拼接校验、特征点提取、畸变矫正、图像融合、色差矫正、裁切最大内接矩形等工作。

保存拼接文件，即可直接用于全景视频拼接使用。

![创建拼接](/Pano/CreateStitching.jpg)
