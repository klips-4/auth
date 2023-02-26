<template src="./template.html">

</template>

<script>
export default {
  name: "CatalogBar",
  props: {
    menu_tasks: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },

  methods: {
    goToMenuItem() {
      this.$emit('goToMenuItem')
    }
  }

}
</script>

<style src="./style.less" lang="less">

</style>