<template>
  <div>
    <section>
      <ImageOverlay :images="[
        '/PanoramaStitching/pano1.jpg',
        '/PanoramaStitching/pano2.jpg',
        '/PanoramaStitching/pano3.jpg'
      ]" :duration="5000" />

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
    </section>

    <section class="right-image-section">
      <div class="right-image-content">
        <div class="right-image-left">
          <h2 class="h2-title">技术介绍</h2>
          <p>
            全景视频拼接是一种基于计算机视觉、图形学与多传感器融合技术的创新监控方案。其核心在于通过软件算法将多个摄像头拍摄的带有重叠区域的视频流，实时拼接为无缝全景画面，形成超宽视角或立体监控场景。
          </p>
        </div>
        <div class="right-image-right">
          <iframe
            src="//player.bilibili.com/player.html?isOutside=true&aid=116305533341231&bvid=BV1xEXGBVE3g&cid=37040361383&p=1&danmaku=0&autoplay=0&preload=auto&t=3"
            width="680px" height="383px" scrolling="no" frameborder="no" framespacing="0"
            allowfullscreen="true"></iframe>
        </div>
      </div>
    </section>

    <section class="left-image-section">
      <div class="left-image-content">
        <div class="left-image-left">
          <img src="/PanoramaStitching/StitchingDemo.png" alt="拼接演示" width="680px" height="383px" />
        </div>
        <div class="left-image-right">
          <h2 class="h2-title">拼接演示</h2>
          <p>
            无需依赖一体化全景设备，根据实际需要自由选择摄像头品牌类型，即可实现 180° 甚至更广视野覆盖。自动识别并调整不同摄像头之间的色差、对焦差异、视角偏差，确保拼接结果的画质一致。
          </p>
        </div>
      </div>
    </section>

    <section class="right-image-section">
      <div class="right-image-content">
        <div class="right-image-left">
          <h2 class="h2-title">安防平台</h2>
          <p>
            在全景视频拼接能力之上，我们进一步打造了一套一体化全景安防平台，融合视频拼接、 地图可视化、AI 智能分析与业务定制能力，为企业提供完整解决方案。
          </p>
        </div>
        <div class="right-image-right">
          <img src="/PanoramaStitching/PanoramicPlatformClient.jpg" alt="安防平台" width="680px" height="383px" />
        </div>
      </div>
    </section>

    <section class="application-scene-section">
      <h2 class="h2-title">应用场景</h2>
      <div class="application-scene-content">
        <div class="application-scene-row">
          <div class="application-scene-item">
            <img src="/PanoramaStitching/ApplicationScenarios/airport.jpg" alt="机场" width="300px" height="200px" />
            <p class="scene-caption">机场</p>
          </div>
          <div class="application-scene-item">
            <img src="/PanoramaStitching/ApplicationScenarios/port.jpg" alt="港口" width="300px" height="200px" />
            <p class="scene-caption">港口</p>
          </div>
          <div class="application-scene-item">
            <img src="/PanoramaStitching/ApplicationScenarios/station.jpg" alt="车站" width="300px" height="200px" />
            <p class="scene-caption">车站</p>
          </div>
          <div class="application-scene-item">
            <img src="/PanoramaStitching/ApplicationScenarios/scenicarea.jpg" alt="景区" width="300px" height="200px" />
            <p class="scene-caption">景区</p>
          </div>
        </div>
        <div class="application-scene-row">
          <div class="application-scene-item">
            <img src="/PanoramaStitching/ApplicationScenarios/factory.jpg" alt="工厂" width="300px" height="200px" />
            <p class="scene-caption">工厂</p>
          </div>
          <div class="application-scene-item">
            <img src="/PanoramaStitching/ApplicationScenarios/school.jpg" alt="学校" width="300px" height="200px" />
            <p class="scene-caption">学校</p>
          </div>
          <div class="application-scene-item">
            <img src="/PanoramaStitching/ApplicationScenarios/park.jpg" alt="园区" width="300px" height="200px" />
            <p class="scene-caption">园区</p>
          </div>
          <div class="application-scene-item">
            <img src="/PanoramaStitching/ApplicationScenarios/venue.jpg" alt="场馆" width="300px" height="200px" />
            <p class="scene-caption">场馆</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <CardContainer title="技术应用">
        <Card title="RTSP/RTMP" content="支持主流实时流媒体传输协议，以低延迟实时传输音视频流。" />
        <Card title="ONVIF" content="支持安防行业通用的开放协议，跨品牌设备互联、视频流传输、 PTZ 控制等。" />
        <Card title="CUDA" content="利用 GPU 强大算力加速视频处理，通过 CUDA 核心大幅提升实时处理性能。" />
        <Card title="MP4/FLV" content="支持主流音视频协议存储，分时段选择下载，方便快捷，兼容广泛。" />
        <Card title="H.264/HEVC" content="支持主流的视频压缩技术，显著降低带宽占用，同时保持高清画质。" />
        <Card title="低延迟" content="毫秒级延迟实时展示，弱网环境下仍保持画面流畅，满足关键安防场景的实时指挥需求。" />
        <Card title="高像素" content="4KHD 千万像素，输出无损画质，一切尽在掌握。" />
        <Card title="深度学习" content="智能算法，场景自适应，实现精准识别、预测与自动化决策。" />
        <Card title="AR增强" content="虚实融合，沉浸式交互体验，打造多领域可视化解决方案。" />
      </CardContainer>
    </section>
  </div>
</template>

<script>
import ImageOverlay from '/components/ImageOverlay.vue'
import CardContainer from '/components/CardContainer.vue'
import Card from '/components/Card.vue'

export default {
  mounted() {

  },
  methods: {
    // 了解更多
    LearnMore() {
      window.location.href = "/zh/PanoramaStitching/Document/what-is-pano"
    },
    // 联系我们
    ContactUs() {
      window.location.href = "/zh/PanoramaStitching/Document/contact-us"
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
  background: rgba(0, 0, 0, 0.1);
  /* 半透明黑色蒙版 */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  /* 确保在 ImageOverlay 上方 */
}

.hero-content {
  padding: 10px;
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

.h2-title {
  font-size: 2.0rem;
  margin-bottom: 40px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}

/* 右侧图片 */
.right-image-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.right-image-content {
  display: flex;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
}

.right-image-left {
  flex: 1;
  margin-right: 100px;
  margin-top: 80px;
}

.right-image-right {
  flex: 1;
}

/* 左侧图片 */
.left-image-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding: 30px;
  background-color: var(--vp-c-bg-alt);
}

.left-image-content {
  display: flex;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 50px;
}

.left-image-left {
  flex: 1;
}

.left-image-right {
  flex: 1;
  margin-left: 100px;
  margin-top: 80px;
}

/* 应用场景 */
.application-scene-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding: 30px;
  background-color: var(--vp-c-bg-alt);
}

.application-scene-content {
  max-width: 1400px;
  width: 100%;
}

.application-scene-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.application-scene-item {
  text-align: center;
  margin: 0 15px;
  /* 增加左右间距 */
  transition: transform 0.3s ease;
  /* 过渡动画 */
}

.application-scene-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease;
  /* 过渡动画 */
}

.application-scene-item:hover img {
  transform: scale(1.05);
  /* 鼠标悬停时图片变大 */
}

.scene-caption {
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
}

/* 移动端适配 */
@media (max-width: 768px) {

  /* 右侧图片 */
  .right-image-content {
    flex-direction: column;
    padding: 10px;
  }

  .right-image-left {
    margin-right: 0;
    margin-top: 0;
    text-align: center;
  }

  .right-image-right {
    margin-top: 20px;
    text-align: center;
  }

  .right-image-right iframe {
    width: 100%;
  }

  /* 左侧图片 */
  .left-image-content {
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .left-image-left,
  .left-image-right {
    margin-left: 0;
    margin-right: 0;
    text-align: center;
    margin-top: 20px;
  }

  /* 应用场景 */
  .application-scene-row {
    display: flex;
    flex-wrap: wrap;
    /* 允许换行 */
    justify-content: center;
    /* 居中对齐 */
    align-items: center;
  }

  .application-scene-item {
    margin: 10px;
    width: 40%;
    box-sizing: border-box;
  }

  .application-scene-item img {
    width: 100%;
  }

  .scene-caption {
    font-size: 14px;
    text-align: center;
  }
}
</style>