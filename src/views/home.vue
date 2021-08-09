<template>
  <div>
    <HeroSection />
    <SkillSetSection v-scrollanimation />
    <MyWork />
  </div>
</template>

<script>
import HeroSection from "@/components/home - components/Hero-component.vue";
import SkillSetSection from "@/components/home - components/Skillsets-component.vue";
import MyWork from "@/components/home - components/Myworks-component.vue";

export default {
  components: {
    HeroSection,
    SkillSetSection,
    MyWork,
  },
};
</script>

<style scoped>
div {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.before-enter {
  opacity: 0.8;
  transform: translateY(100px);
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}
</style>