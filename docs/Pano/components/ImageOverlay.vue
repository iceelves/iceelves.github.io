<template>
  <div class="image-overlay-container">
    <transition name="fade">
      <img 
        v-if="showFirstImage"
        :src="image1" 
        class="overlay-image" 
        key="image1"
        alt="First image"
      />
    </transition>
    
    <transition name="fade">
      <img 
        v-if="!showFirstImage"
        :src="image2" 
        class="overlay-image" 
        key="image2"
        alt="Second image"
      />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ImageOverlay',
  props: {
    image1: {
      type: String,
      required: true
    },
    image2: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {
      showFirstImage: true,
      timer: null
    }
  },
  mounted() {
    this.startRotation();
  },
  beforeDestroy() {
    this.stopRotation();
  },
  methods: {
    startRotation() {
      this.timer = setInterval(() => {
        this.showFirstImage = !this.showFirstImage;
      }, this.duration);
    },
    stopRotation() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    }
  }
}
</script>

<style scoped>
.image-overlay-container {
  position: relative;
  width: 100%;    /* 或具体尺寸如500px */
  height: 450px;  /* 或具体尺寸 */
  margin: 0 auto; /* 居中 */
  overflow: hidden; /* 防止图片溢出容器 */
}
 
.overlay-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* 保持比例填充容器 */
  border: none;     /* 明确去除边框 */
  outline: none;    /* 去除可能的外轮廓线 */
  display: block;   /* 去除图片下方的空白间隙 */
  filter: blur(0.3px);  /* 极轻微模糊，肉眼几乎不可见但能减少摩尔纹 */
}
 
/* 淡入淡出动画 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* 移动端适配（可选） */
@media (max-width: 768px) {
  .image-overlay-container {
    aspect-ratio: 4 / 3; /* 手机端调整为更竖长的比例 */
  }
}
</style>