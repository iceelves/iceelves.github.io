<template>
  <div class="image-overlay-container">
    <transition-group name="fade" tag="div">
      <img 
        v-for="(image, index) in images" 
        v-show="currentIndex === index"
        :key="image"
        :src="image" 
        class="overlay-image" 
        :alt="'Image ' + (index + 1)"
      />
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'ImageCarousel',
  props: {
    images: {
      type: Array,
      required: true,
      validator: value => value.length > 0
    },
    duration: {
      type: Number,
      default: 3000
    },
    initialIndex: {
      type: Number,
      default: 0,
      validator: value => value >= 0
    }
  },
  data() {
    return {
      currentIndex: this.initialIndex,
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
      // 确保初始索引在有效范围内
      if (this.currentIndex >= this.images.length) {
        this.currentIndex = 0;
      }
      
      this.timer = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, this.duration);
    },
    stopRotation() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    // 可以添加手动切换的方法
    goToIndex(index) {
      if (index >= 0 && index < this.images.length) {
        this.currentIndex = index;
        this.resetTimer();
      }
    },
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.resetTimer();
    },
    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      this.resetTimer();
    },
    resetTimer() {
      this.stopRotation();
      this.startRotation();
    }
  }
}
</script>

<style scoped>
.image-overlay-container {
  position: relative;
  width: 100%;
  height: 450px;
  margin: 0 auto;
  overflow: hidden;
}

.overlay-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: none;
  outline: none;
  display: block;
  filter: blur(0.3px);
}

/* 淡入淡出动画 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* 确保离开的图片不会占据空间 */
.fade-leave-active {
  position: absolute;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .image-overlay-container {
    aspect-ratio: 16 / 9;
    height: auto;
  }
}
</style>