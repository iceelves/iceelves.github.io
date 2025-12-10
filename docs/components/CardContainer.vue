<!-- src/components/ThreeDCardContainer.vue -->
<template>
  <div class="container">
    <h2 v-if="title">{{ title }}</h2>

    <div class="cards-container">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
.container {
  max-width: 100%;
  text-align: center;
  color: var(--vp-c-text-1);
  background: transparent;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow-x: hidden;
  padding: 40px 20px;
}

h2 {
  font-size: 2.0rem;
  margin-bottom: 40px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  perspective: 1000px;
}
</style>