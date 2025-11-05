# 什么是全景视频拼接
[全景视频拼接](/zh/Pano/) 是一种基于计算机视觉、图形学与多传感器融合技术的创新监控方案。其核心在于通过软件算法将多个摄像头拍摄的带有重叠区域的视频流，实时拼接为无缝全景画面，形成超宽视角或立体监控场景。该技术突破了传统单摄像头视角局限，消除了画面割裂与信息孤岛，实现“一屏统览”的大场景动态感知。

<script>
import ImageOverlay from '/zh/Pano/components/ImageOverlay.vue'

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
    '/Pano/pano1.jpg',
    '/Pano/pano2.jpg'
    ]" 
    :duration="5000"
/>

## 想进一步了解？
- 👉 [创建一个全景视频](/zh/Pano/Document/create-pano)
- ⚙️ [其他配置](/zh/Pano/Document/other-config)
- 🧩 [定制开发](/zh/Pano/Document/custom-development)
- 📞 [联系我们](/zh/Pano/Document/contact-us)
