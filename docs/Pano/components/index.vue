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
        <h1 class="hero-title">Panoramic Video Stitching</h1>
        <p class="hero-description">
          Bringing you a different surveillance screen, allowing you to see more and see further.
        </p>
        <button class="btn btn-primary" @click="LearnMore">Learn more</button>
        <button class="btn btn-secondary" @click="ContactUs">Contact Us</button>
      </div>
    </div>

    <CardContainer title="Technology Application">
      <Card
        title="RTSP/RTMP"
        content="Support mainstream real-time streaming protocols for low latency real-time transmission of audio and video streams."
      />
      <Card
        title="ONVIF"
        content="Support common open protocols in the security industry, cross brand device interconnection, video streaming transmission, PTZ control, etc."
      />
      <Card
        title="CUDA"
        content="Utilizing the powerful computing power of GPU to accelerate video processing and significantly improving real-time processing performance through CUDA core."
      />
      <Card
        title="MP4/FLV"
        content="Support mainstream audio and video protocol storage, select downloads in different time periods, convenient, fast, and widely compatible."
      />
      <Card
        title="H.264/HEVC"
        content="Supports mainstream video compression technologies, significantly reducing bandwidth usage while maintaining high-definition image quality."
      />
      <Card
        title="Low latency"
        content="Real time display with millisecond level delay, maintaining smooth image in weak network environment, meeting the real-time command requirements of critical security scenarios."
      />
      <Card
        title="High pixel"
        content="4KHD with millions of pixels, outputting lossless image quality, everything is under control."
      />
      <Card
        title="Deep learning"
        content="Intelligent algorithms and scene adaptation enable precise recognition, prediction, and automated decision-making."
      />
      <Card
        title="AR Enhancement"
        content="Virtual real integration, immersive interactive experience, creating multi domain visualization solutions."
      />
    </CardContainer>
  </div>
</template>
 
<script>
import ImageOverlay from '/Pano/components/ImageOverlay.vue'
import CardContainer from '/Pano/components/CardContainer.vue'
import Card from '/Pano/components/Card.vue'

export default {
  mounted() {

  },
  methods: {
    // 了解更多
    LearnMore() {
      window.location.href = "/Pano/Document/what-is-pano"
    },
    // 联系我们
    ContactUs() {
      window.location.href = "/Pano/Document/contact-us"
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
::selection {
  background-color: #404042;
}

::-moz-selection {
  background-color: #404042;
}

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
  max-width: 830px;
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