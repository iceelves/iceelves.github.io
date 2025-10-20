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
        <h1 class="hero-title">全景视频监控</h1>
        <p class="hero-description">
          带给你不一样的监控画面，看到的更多，看到的更远。
        </p>
        <button class="hero-button">了解更多</button>
        <button class="hero-button">联系我们</button>
      </div>
    </div>
  </div>
</template>
 
<script>
import ImageOverlay from '/Pano/components/ImageOverlay.vue'

export default {
  mounted() {

  },
  methods: {

  },
  components: {
    ImageOverlay
  }
};
</script>
 
<style>
.hero-container {
  position: relative; /* 父容器相对定位 */
  width: 100%;
  height: 100vh; /* 确保高度占满屏幕 */
}
 
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
 
.hero-button {
  margin-left: 10px;
  margin-right: 10px;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}
 
.hero-button:hover {
  background: #0056b3;
}
 
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  .hero-description {
    font-size: 1rem;
  }
}
</style>