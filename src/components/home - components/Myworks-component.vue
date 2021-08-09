<template>
  <div class="myWorks">
    <div class="myWorks-title">
      <h1>MYWORKS</h1>
    </div>

    <div class="myWorks-label">
      <TabWrapper>
        <Tab title="all">All</Tab>
        <Tab title="front-end">Front End</Tab>
        <Tab title="back-end">Back End</Tab>
        <Tab title="ux-design">UX design</Tab>
      </TabWrapper>
    </div>

    <div class="myworks-project"></div>
  </div>
</template>

<script>
import Tab from "./Myworks/Tab.vue";
import TabWrapper from "./Myworks/TabWrapper.vue";
export default {
  components: {
    Tab,
    TabWrapper,
  },
};
</script>

<style lang="scss" scoped>
.myWorks {
  width: 100%;
  background: green;
  display: block;
  justify-content: center;

  .myWorks-title {
    display: flex;
    background: yellow;
    justify-content: center;
  }
}
</style>