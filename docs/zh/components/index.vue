<template>
  <div class="construction-page">
    <h5 class="ml9">
      <span class="text-wrapper">
        <span class="letters">正在建设中…</span>
      </span>
    </h5>
  </div>
</template>
 
<script>
export default {
  mounted() {
    // 动态加载 animejs 库
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js';
    script.onload = this.initAnimation;
    document.head.appendChild(script);
  },
  methods: {
    initAnimation() {
      if (typeof anime === 'undefined') {
        console.error('Failed to load animejs');
        return;
      }
 
      const textWrapper = document.querySelector('.ml9 .letters');
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
 
      anime.timeline({ loop: true })
        .add({
          targets: '.ml9 .letter',
          scale: [0, 1],
          duration: 1500,
          elasticity: 600,
          delay: (el, i) => 45 * (i + 1)
        })
        .add({
          targets: '.ml9',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
    }
  }
};
</script>
 
<style>
.construction-page {
  display: flex;
  justify-content: center;
  align-items: center;
}

.ml9 {
  position: relative;
  font-weight: 200;
  font-size: 4em;
  margin-top: 18%;
}
 
.ml9 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.2em;
  padding-right: 0.05em;
  padding-bottom: 0.1em;
  overflow: hidden;
}
 
.ml9 .letter {
  transform-origin: 50% 100%;
  display: inline-block;
  line-height: 1em;
}
</style>