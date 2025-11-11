<template>
  <section class="hero-banner">
    <canvas ref="canvas" class="background-canvas"></canvas>
    <div class="hero-content">
      <div class="title-block">
        <h1 v-for="(line, index) in titleLines" :key="index" class="title-line">
          {{ line }}
        </h1>
      </div>
      <div class="subtitle-block">
        <p v-for="(line, index) in subtitleLines" :key="index" class="subtitle-line">
          {{ line }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

defineProps({
  titleLines: {
    type: Array,
  },
  subtitleLines: {
    type: Array,
  },
})

const canvas = ref(null)
let ctx
let width, height
let rectangles = []
const rectCount = 50
const mouse = { x: 0, y: 0 }

const random = (min, max) => Math.random() * (max - min) + min

const initRectangles = () => {
  rectangles = []
  for (let i = 0; i < rectCount; i++) {
    rectangles.push({
      x: random(0, width),
      y: random(0, height),
      w: random(50, 150),
      h: random(20, 80),
      baseAlpha: random(0.05, 0.15),
      offsetX: 0,
      offsetY: 0,
      vx: random(-0.2, 0.2), // x方向漂浮速度
      vy: random(-0.1, 0.1), // y方向漂浮速度
    })
  }
}

const draw = () => {
  ctx.clearRect(0, 0, width, height)
  const themeIsDark = getComputedStyle(document.documentElement)
    .getPropertyValue('--vp-c-bg')
    .trim() !== '#ffffff'
  const rectColor = themeIsDark ? '255,255,255' : '0,0,0'

  rectangles.forEach(rect => {
    // 漂浮运动
    rect.x += rect.vx
    rect.y += rect.vy

    // 超出边界反弹
    if (rect.x < -rect.w) rect.x = width
    if (rect.x > width) rect.x = -rect.w
    if (rect.y < -rect.h) rect.y = height
    if (rect.y > height) rect.y = -rect.h

    // 根据鼠标距离改变亮度偏移
    const dx = mouse.x - (rect.x + rect.w / 2)
    const dy = mouse.y - (rect.y + rect.h / 2)
    const dist = Math.sqrt(dx * dx + dy * dy)
    const maxDist = 300
    const alpha =
      rect.baseAlpha + Math.max(0, (maxDist - dist) / maxDist * 0.3)

    // 绘制矩形微光渐变
    const gradient = ctx.createLinearGradient(
      rect.x,
      rect.y,
      rect.x + rect.w,
      rect.y + rect.h
    )
    gradient.addColorStop(0, `rgba(${rectColor}, ${alpha})`)
    gradient.addColorStop(1, `rgba(${rectColor}, ${alpha * 0.2})`)

    ctx.fillStyle = gradient
    ctx.fillRect(rect.x, rect.y, rect.w, rect.h)
  })

  requestAnimationFrame(draw)
}

const onMouseMove = (e) => {
  mouse.x = e.clientX
  mouse.y = e.clientY
}

const onResize = () => {
  width = canvas.value.clientWidth
  height = canvas.value.clientHeight
  canvas.value.width = width
  canvas.value.height = height
  initRectangles()
}

onMounted(() => {
  ctx = canvas.value.getContext('2d')
  onResize()
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('resize', onResize)
  draw()
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('resize', onResize)
})
</script>

<style scoped>
.hero-banner {
  position: relative;
  height: 80vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-text);
}

.background-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero-content {
  position: relative;
  text-align: center;
  z-index: 1;
}

.title-block {
  margin-bottom: 1.5rem;
}

.title-line {
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.2;
}

.subtitle-block {
  margin-top: 1rem;
}

.subtitle-line {
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--vp-c-text-secondary);
}
</style>
