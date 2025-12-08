<template>
  <section :class="['alt-row', { 'alt-row-reverse': reverse }]" v-intersect="(flag: boolean) => visible = flag">
    <div class="alt-row__image" :class="{ visible: visible }">
      <img :src="imgSrc" :alt="imgAlt || ''" />
    </div>
    <div class="alt-row__text" :class="{ visible: visible }">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  imgSrc: string;
  imgAlt?: string;
  reverse?: boolean; // PC端左右顺序
}

const props = defineProps<Props>();
const { imgSrc, imgAlt = '', reverse = false } = props;

// 滚动触发动画控制
const visible = ref(false);
</script>

<style scoped>
.alt-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1310px;
  padding: 20px 0;
  margin: 2rem auto;
  box-sizing: border-box;
}

.alt-row__image,
.alt-row__text {
  flex: 1;
  opacity: 0;
  transform: translateX(0);
  transition: all 0.8s ease;
}

.alt-row__image img {
  display: block;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  margin: 0 auto;
}

/* 默认：图片左文字右 */
.alt-row__image {
  order: 0;
  flex: 0 0 49%;
  width: 49%;
}

.alt-row__text {
  order: 1;
  padding-left: 80px;
}

/* 反转布局 */
.alt-row-reverse .alt-row__image {
  order: 1;
}

.alt-row-reverse .alt-row__text {
  order: 0;
  padding-left: 20px;
}

/* 滚动动画 */
.alt-row__image.visible {
  opacity: 1;
  transform:
    translateX(-30px);
}

.alt-row-reverse .alt-row__image.visible {
  transform: translateX(30px);
}

.alt-row__text.visible {
  opacity: 1;
  transform: translateX(0);
}

/* 移动端适配 */
@media (max-width: 768px) {
  .alt-row {
    flex-direction: column !important;
    /* 强制纵向布局 */
    gap: 1rem;
    max-width: 100%;
    margin: 2rem auto;
    padding: 0;
    align-items: center;
    /* 所有子元素居中 */
    justify-content: flex-start;
  }

  .alt-row__image,
  .alt-row__text {
    width: 100% !important;
    order: unset !important;
    /* 清除左右顺序 */
    padding: 0;
    transform: translateY(20px);
    display: block;
    text-align: center;
    /* 居中文字和图片 */
  }

  .alt-row__image img {
    max-width: 90%;
    /* 图片最大宽度 */
    width: auto;
    max-height: 300px;
    height: auto;
    display: inline-block;
    margin: 0 auto;
    /* 水平居中 */
  }

  .alt-row__image.visible,
  .alt-row__text.visible {
    transform: translateY(0);
  }

  .alt-row-reverse .alt-row__image.visible {
    transform: translateX(0);
  }
}
</style>

<script lang="ts">
import { Directive } from 'vue';

// IntersectionObserver 指令
export const vIntersect: Directive = {
  mounted(el, binding) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (binding.value && typeof binding.value === 'function') {
            binding.value(entry.isIntersecting as boolean);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
  }
};
</script>
