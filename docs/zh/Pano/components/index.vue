<template>
  <div>
    <ImageOverlay 
      :images="[
        '/Pano/pano1.jpg',
        '/Pano/pano2.jpg'
      ]" 
      :duration="5000"
    />

    <div class="hero-overlay">
      <div class="hero-content">
        <h1 class="hero-title">全景视频拼接</h1>
        <p class="hero-description">
          多路摄像头实时融合，无缝覆盖大场景，让监控更清晰、更高效、更智能。
        </p>
        <button class="btn btn-primary" @click="LearnMore">了解更多</button>
        <button class="btn btn-secondary" @click="ContactUs">联系我们</button>
      </div>
    </div>

    <CardContainer title="技术应用">
      <Card
        title="RTSP/RTMP"
        content="支持主流实时流媒体传输协议，以低延迟实时传输音视频流。"
      />
      <Card
        title="ONVIF"
        content="支持安防行业通用的开放协议，跨品牌设备互联、视频流传输、PTZ 控制等。"
      />
      <Card
        title="CUDA"
        content="利用 GPU 强大算力加速视频处理，通过 CUDA 核心大幅提升实时处理性能。"
      />
      <Card
        title="MP4/FLV"
        content="支持主流音视频协议存储，分时段选择下载，方便快捷，兼容广泛。"
      />
      <Card
        title="H.264/HEVC"
        content="支持主流的视频压缩技术，显著降低带宽占用，同时保持高清画质。"
      />
      <Card
        title="低延迟"
        content="毫秒级延迟实时展示，弱网环境下仍保持画面流畅，满足关键安防场景的实时指挥需求。"
      />
      <Card
        title="高像素"
        content="4KHD 千万像素，输出无损画质，一切尽在掌握。"
      />
      <Card
        title="深度学习"
        content="智能算法，场景自适应，实现精准识别、预测与自动化决策。"
      />
      <Card
        title="AR增强"
        content="虚实融合，沉浸式交互体验，打造多领域可视化解决方案。"
      />
    </CardContainer>
  </div>
</template>
 
<script>
import ImageOverlay from '/zh/Pano/components/ImageOverlay.vue'
import CardContainer from '/zh/Pano/components/CardContainer.vue'
import Card from '/zh/Pano/components/Card.vue'

export default {
  mounted() {

  },
  methods: {
    // 了解更多
    LearnMore() {
      window.location.href = "/zh/Pano/Document/what-is-pano"
    },
    // 联系我们
    ContactUs() {
      window.location.href = "/zh/Pano/Document/contact-us"
    }
  },
  components: {
    ImageOverlay,
    CardContainer,
    Card
  }
};
</script>
 
<style>
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 450px;
  background: rgba(0, 0, 0, 0.1); /* 半透明黑色蒙版 */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10; /* 确保在 ImageOverlay 上方 */
}
 
.hero-content {
  padding: 2rem;
  text-align: center;
  color: white;
}
 
.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}
 
.hero-description {
  font-size: 1.2rem;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}
 
/* 基础按钮样式 */
.btn {
  display: inline-block;
  padding: 0.4rem 1.4rem;
  border-radius: 20px;
  font-weight: 600;
  text-decoration: none;
  margin: 0rem 2rem;
  transition: all 0.3s ease;
  font-size: 14px;
}

.btn-primary {
  background: linear-gradient(90deg, #0ea5e9, #38bdf8);
  color: white;
  box-shadow: 0 4px 20px rgba(0, 165, 233, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 30px rgba(0, 165, 233, 0.5);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.7);
  color: #106ba8;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.8);
  border-color: rgba(255, 255, 255, 0.6);
}

/* 移动端适配 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  .hero-description {
    font-size: 1rem;
  }
  .hero-overlay {
    aspect-ratio: 16 / 9;
    height: auto;
  }
}
</style>