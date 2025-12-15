---
title: 什么是全景视频拼接？
description: 全景视频拼接可以将多机位拍摄的视频融合成沉浸式宽幅画面，广泛用于学校、园区、广场、体育场馆、机场、港口等场景。多路摄像头实时融合，全景视频安防平台，定制化开发。
keywords: 全景视频拼接,多路摄像头实时融合,全景视频安防平台
---

# 什么是全景视频拼接
[全景视频拼接](/zh/PanoramaStitching/) 是一种基于计算机视觉、图形学与多传感器融合技术的创新监控方案。其核心在于通过软件算法将多个摄像头拍摄的带有重叠区域的视频流，实时拼接为无缝全景画面，形成超宽视角或立体监控场景。该技术突破了传统单摄像头视角局限，消除了画面割裂与信息孤岛，实现“一屏统览”的大场景动态感知。

安装零定制成本，无需更换现有硬件或购买专用终端，视频画质取决于选择摄像机画质，无缝兼容 RTSP、Onvif 协议的安防摄像机，覆盖全球 95% 以上品牌设备。

<script>
import ImageOverlay from '/components/ImageOverlay.vue'

export default {
  components: {
    ImageOverlay
  }
};
</script>

<style scoped>
.image-overlay-container {
  height: 160px;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .image-overlay-container {
    aspect-ratio: 16 / 9;
    height: auto;
  }
}
</style>

<ImageOverlay height="100px"
    :images="[
    '/PanoramaStitching/pano1.jpg',
    '/PanoramaStitching/pano2.jpg'
    ]" 
    :duration="5000"
/>

## 想进一步了解？
- 👉 [创建一个全景视频](/zh/PanoramaStitching/Document/create-pano)
- ⚙️ [更多设置](/zh/PanoramaStitching/Document/more-settings)
- 📺 [全景投屏](/zh/PanoramaStitching/Document/pano-player)
- 🧩 [定制开发](/zh/PanoramaStitching/Document/custom-development)
- 📞 [联系我们](/zh/PanoramaStitching/Document/contact-us)
