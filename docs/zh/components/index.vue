<template>
  <HeroBanner :titleLines="['未来科技 引领创新']" :subtitleLines="['专注于高性能软件开发和智能解决方案']" />

  <div class="padding-height"></div>
  <div class="padding-height"></div>
  <div class="padding-height"></div>

  <AlternatingImageText imgSrc="/Index/Technology.jpg">
    <h2>技术驱动</h2>
    <div class="padding-height"></div>
    <div class="padding-height"></div>
    <p>让技术成为企业增长的核心动力。</p>
    <p>通过智能化的软件系统，为业务决策提供更快、更准的数据支持。</p>
  </AlternatingImageText>

  <AlternatingImageText imgSrc="/Index/Customize.jpg" :reverse="true">
    <h2>定制化解决方案</h2>
    <div class="padding-height"></div>
    <div class="padding-height"></div>
    <p>根据行业特性量身构建系统功能，而非强行适配。</p>
    <p>打造真正符合企业流程的数字化解决方案。</p>
  </AlternatingImageText>

  <AlternatingImageText imgSrc="/Index/Stable.jpg">
    <h2>稳定架构</h2>
    <div class="padding-height"></div>
    <div class="padding-height"></div>
    <p>企业级技术栈，确保系统稳定高可用。</p>
    <p>模块化架构支持未来扩展，降低运营成本。</p>
  </AlternatingImageText>

  <AlternatingImageText imgSrc="/Index/Safety.jpg" :reverse="true">
    <h2>系统安全</h2>
    <div class="padding-height"></div>
    <div class="padding-height"></div>
    <p>从传输、存储到权限机制，全链路保护数据安全。</p>
    <p>符合企业级安全规范，并支持多级安全策略。</p>
  </AlternatingImageText>
</template>

<script>
import HeroBanner from '/components/HeroBanner.vue'
import AlternatingImageText from '/components/AlternatingImageText.vue'

export default {
  mounted() {

  },
  methods: {

  },
  components: {
    HeroBanner,
    AlternatingImageText
  }
};
</script>

<style>
.padding-height {
  height: 20px;
}

h2 {
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  padding: 0;
}
</style>