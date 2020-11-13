<template>
  <div>
    <HeroSection/>
    <SkillSetSection/>
  </div>
</template>

<script>
import HeroSection from "@/components/home - components/Hero-component.vue"
import SkillSetSection from "@/components/home - components/Skillsets-component.vue"
export default {
  components: {
    HeroSection,
    SkillSetSection
  }
}
</script>

<style scoped>
  div {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
</style>