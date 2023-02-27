<template src="./template.html">

</template>

<script>
export default {
  name: "CustomerRecord",
  data() {
    return {
      step: 1,
      registrationForm: {
        name: '',
        surname: '',
        firstname: '',
        telephone: '',
      },

    }
  },
  methods: {
    nextStep() {
      this.step++
    },
    backStep() {
      this.step--
    }
  }
}
</script>

<style src="./style.less" lang="less">

</style>