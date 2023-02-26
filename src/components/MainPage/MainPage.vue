<template src="./template.html">

</template>

<script>
import {AuthHelpers} from "@/helpers/AuthHelpers";
import CatalogBar from "@/components/CatalogBar/CatalogBar";
import CustomerRecord from "@/components/CustomerRecord/CustomerRecord";


export default {
  name: "MainPage",
  components: {CatalogBar, CustomerRecord},
  data() {
    return {
      menubar: ['Календарь установок', 'Замеры', 'Запись клиента', 'Договора', 'Прочее']
    }
  },

  methods: {
    goToMenuItem(index) {
      this.$router.push({path:index})
    }
  },

  computed: {
    userName() {
      const userData = AuthHelpers.getUserInfo();
      return userData.login
    }
  }

}
</script>

<style src="./style.less" lang="less">

</style>