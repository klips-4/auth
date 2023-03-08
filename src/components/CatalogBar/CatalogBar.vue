<template src="./template.html">

</template>

<script>

export default {
  name: "CatalogBar",

  data() {
    return {
      links: [
        {title: 'Календарь', url: '/CalendarForm', exact: true},
        {title: 'Замеры', url: '/MeasuringCard'},
        {title: 'Запись', url: '/Customer'},
        {title: 'Договора', url: '/CustomerRecord'},
        {title: 'Прочее', url: '/Others'}
      ]
    }
  },

  methods: {
    goToMenuItem() {
      this.$emit('goToMenuItem')
    },
  }

}
</script>

<style src="./style.less" lang="less">

</style>