<template src="./template.html">

</template>

<script>
import CustomerRecord from "@/components/CustomerRecord/CustomerRecord";

export default {
  name: "CatalogBar",
  components:{
    CustomerRecord
  },
  props: {
    menu_tasks: {
      type: Array,
      default() {
        return []
      },
    }
  },
  data() {
    return {
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