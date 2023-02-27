<template src="./template.html"/>


<script>


export default {
  name: "NotificationPage",
  props: {
    messages: {
      type: Array,
      default: () => {
        return []
      }
    },
    rightButton: {
      type: String,
      default: ''
    },
    leftButton: {
      type: String,
      default: ''
    },
  },
  data() {
    return {}
  },
  methods: {}
}
</script>


<style lang="less" scoped src="./style.less">

</style>