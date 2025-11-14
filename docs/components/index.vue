<template>
  <HeroBanner
  :titleLines="['Future technology','Leading innovation']"
  :subtitleLines="['Focusing on high performance software development and intelligent solutions']"/>

  <div class="padding-height"></div>
  <div class="padding-height"></div>
  <div class="padding-height"></div>

  <AlternatingImageText
    imgSrc="/Index/Technology.jpg"
  >
    <h2>Technology drives</h2>
    <div class="padding-height"></div>
    <div class="padding-height"></div>
    <p>Make technology the core driving force for business growth.</p>
    <p>Provide faster and more accurate data support for business decision-making through intelligent software systems.</p>
  </AlternatingImageText>

  <AlternatingImageText
    imgSrc="/Index/Customize.jpg"
    :reverse="true"
  >
    <h2>Customized solutions</h2>
    <div class="padding-height"></div>
    <div class="padding-height"></div>
    <p>Tailored system functionality based on industry characteristics, rather than forced adaptation.</p>
    <p>Create a digital solution that truly aligns with enterprise processes.</p>
  </AlternatingImageText>

  <AlternatingImageText
    imgSrc="/Index/Stable.jpg"
  >
    <h2>Stable architecture</h2>
    <div class="padding-height"></div>
    <div class="padding-height"></div>
    <p>Enterprise level technology stack ensures system stability and high availability.</p>
    <p>Modular architecture supports future expansion and reduces operational costs.</p>
  </AlternatingImageText>

  <AlternatingImageText
    imgSrc="/Index/Safety.jpg"
    :reverse="true"
  >
    <h2>System security</h2>
    <div class="padding-height"></div>
    <div class="padding-height"></div>
    <p>From transmission, storage to permission mechanisms, the entire chain protects data security.</p>
    <p>Compliant with enterprise level security standards and supporting multi-level security policies.</p>
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