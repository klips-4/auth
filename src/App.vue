<template>
<div class="App__wrapper">
  <component :is="layout">
    <router-view/>
  </component>
</div>
</template>

<script>
import MainLayout from "@/components/Layout/MainLayout/MainLayout";

export default {
  name: 'App',
  components: {
    MainLayout
  },
  computed: {
    layout() {
      return (this.$route.meta.layout) + '-layout'
    }
  }
}
</script>

<style lang="less" src="./assets/style.less">
.App__wrapper {
  background: gray;
}
</style>
