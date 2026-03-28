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
          <h1 class="hero-title">Panorama Video Stitching</h1>
          <p class="hero-description">
            Real time fusion of multiple cameras seamlessly covers large scenes, making monitoring clearer, more
            efficient, and more intelligent.
          </p>
          <button class="btn btn-primary" @click="LearnMore">Learn more</button>
          <button class="btn btn-secondary" @click="ContactUs">Contact Us</button>
        </div>
      </div>
    </section>

    <section class="right-image-section">
      <div class="right-image-content">
        <div class="right-image-left">
          <h2 class="h2-title">Technical Introduction</h2>
          <p>
            Panorama video stitching is an innovative monitoring solution based on computer vision, graphics, and
            multi-sensor fusion technology. Its core lies in real-time stitching of video streams with overlapping areas
            captured by multiple cameras into seamless Panorama images through software algorithms, forming ultra wide
            viewing angles or stereoscopic monitoring scenes.
          </p>
        </div>
        <div class="right-image-right">
          <iframe width="680px" height="383px"
            src="https://www.youtube.com/embed/wPnUsllHuQk?si=DEtmrXcqOOmzuOFg&vq=hd1080" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </section>

    <section class="left-image-section">
      <div class="left-image-content">
        <div class="left-image-left">
          <img src="/PanoramaStitching/StitchingDemo.png" alt="StitchingDemo" width="680px" height="383px" />
        </div>
        <div class="left-image-right">
          <h2 class="h2-title">Stitching Demonstrate</h2>
          <p>
            Without relying on integrated panoramic equipment, you can freely choose the brand and type of camera
            according to actual needs, achieving a 180° or even wider field of view coverage.
          </p>
          <p>
            Automatically identify and adjust color differences, focus discrepancies, and view angle deviations among
            different cameras to ensure consistent image quality in the stitching results.
          </p>
        </div>
      </div>
    </section>

    <section class="right-image-section">
      <div class="right-image-content">
        <div class="right-image-left">
          <h2 class="h2-title">Panoramic Security Platform</h2>
          <p>
            Building upon our panoramic video stitching capabilities, we have further developed an integrated panoramic
            security platform that integrates video stitching, map visualization, AI intelligent analysis, and business
            customization capabilities, providing enterprises with a comprehensive solution.
          </p>
        </div>
        <div class="right-image-right">
          <img width="680px" height="383px" src="/PanoramaStitching/PanoramicPlatformClient.jpg"
            alt="PanoramicSecurityPlatform" />
        </div>
      </div>
    </section>

    <section class="application-scene-section">
      <h2 class="h2-title">Application Scenarios</h2>
      <div class="application-scene-content">
        <div class="application-scene-row">
          <div class="application-scene-item">
            <img src="/PanoramaStitching/ApplicationScenarios/airport.jpg" alt="Airport" width="300px" height="200px" />
            <p class="scene-caption">Airport</p>
          </div>
          <div class="application-scene-item">
            <img src="/PanoramaStitching/ApplicationScenarios/port.jpg" alt="Port" width="300px" height="200px" />
            <p class="scene-caption">Port</p>
          </div>
          <div class="application-scene-item">
            <img src="/PanoramaStitching/ApplicationScenarios/station.jpg" alt="Station" width="300px" height="200px" />
            <p class="scene-caption">Station</p>
          </div>
          <div class="application-scene-item">
            <img src="/PanoramaStitching/ApplicationScenarios/scenicarea.jpg" alt="Scenic area" width="300px"
              height="200px" />
            <p class="scene-caption">Scenic area</p>
          </div>
        </div>
        <div class="application-scene-row">
          <div class="application-scene-item">
            <img src="/PanoramaStitching/ApplicationScenarios/factory.jpg" alt="Factory" width="300px" height="200px" />
            <p class="scene-caption">Factory</p>
          </div>
          <div class="application-scene-item">
            <img src="/PanoramaStitching/ApplicationScenarios/school.jpg" alt="School" width="300px" height="200px" />
            <p class="scene-caption">School</p>
          </div>
          <div class="application-scene-item">
            <img src="/PanoramaStitching/ApplicationScenarios/park.jpg" alt="Park" width="300px" height="200px" />
            <p class="scene-caption">Park</p>
          </div>
          <div class="application-scene-item">
            <img src="/PanoramaStitching/ApplicationScenarios/venue.jpg" alt="Venue" width="300px" height="200px" />
            <p class="scene-caption">Venue</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <CardContainer title="Technology Application">
        <Card title="RTSP/RTMP"
          content="Support mainstream real-time streaming protocols for low latency real-time transmission of audio and video streams." />
        <Card title="ONVIF"
          content="Support common open protocols in the security industry, cross brand device interconnection, video streaming transmission, PTZ control, etc." />
        <Card title="CUDA"
          content="Utilizing the powerful computing power of GPU to accelerate video processing and significantly improving real-time processing performance through CUDA core." />
        <Card title="MP4/FLV"
          content="Support mainstream audio and video protocol storage, select downloads in different time periods, convenient, fast, and widely compatible." />
        <Card title="H.264/HEVC"
          content="Supports mainstream video compression technologies, significantly reducing bandwidth usage while maintaining high-definition image quality." />
        <Card title="Low latency"
          content="Real time display with millisecond level delay, maintaining smooth image in weak network environment, meeting the real-time command requirements of critical security scenarios." />
        <Card title="High pixel"
          content="4KHD with millions of pixels, outputting lossless image quality, everything is under control." />
        <Card title="Deep learning"
          content="Intelligent algorithms and scene adaptation enable precise recognition, prediction, and automated decision-making." />
        <Card title="AR Enhancement"
          content="Virtual real integration, immersive interactive experience, creating multi domain visualization solutions." />
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
      window.location.href = "/en/PanoramaStitching/Document/what-is-pano"
    },
    // 联系我们
    ContactUs() {
      window.location.href = "/en/PanoramaStitching/Document/contact-us"
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
    width: 45%;
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