<!-- src/components/ThreeDCard.vue -->
<template>
  <div class="card">
    <!-- 标题 -->
    <h3 class="card-title">{{ title }}</h3>

    <!-- 内容 -->
    <p class="card-content">{{ content }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.card {
  width: 286px;
  height: 190px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transform-style: preserve-3d;
}

.card:hover {
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
}

.card-title {
  font-size: 26px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 15px;
  transition: all 0.3s ease;
  transform: translateZ(20px);
}

.card:hover .card-title {
  transform: translateZ(40px);
  color: #ffdb58;
}

.card-content {
  color: var(--vp-c-text-1);;
  line-height: 1.6;
  margin-bottom: 25px;
  transform: translateZ(10px);
  transition: all 0.3s ease;
}

.card:hover .card-content {
  transform: translateZ(30px);
}
</style>