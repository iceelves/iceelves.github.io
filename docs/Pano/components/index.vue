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
        <button class="hero-button" @click="LearnMore">Learn more</button>
        <button class="hero-button" @click="ContactUs">Contact Us</button>
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
  max-width: 800px;
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
.hero-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  white-space: nowrap;
  line-height: 1;
  color: #fff;
  background-color: #409eff;
  border: 1px solid #409eff;
  margin-left: 20px;
  margin-right: 20px;
}
 
.hero-button:hover {
  background-color: #66b1ff;
  border-color: #66b1ff;
}
 
.hero-button:active {
  background-color: #3a8ee6;
  border-color: #3a8ee6;
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