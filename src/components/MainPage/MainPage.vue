<template src="./template.html">

</template>

<script>
import {AuthHelpers} from "@/helpers/AuthHelpers";
import CatalogBar from "@/components/CatalogBar/CatalogBar";
import CustomerRecord from "@/components/CustomerRecord/CustomerRecord";
import SourceService from "@/services/SourceService";


export default {
  name: "MainPage",
  components: {CatalogBar, CustomerRecord},
  data() {
    return {
      menubar: ['CalendarForm', 'Замеры', 'Запись клиента', 'Договора', 'Прочее'],
      source: new SourceService({endpoint: 'Client'}),
    }
  },

  methods: {
    goToMenuItem(index) {
      this.$router.push({path:index})
    },
    logout() {
      AuthHelpers.logout();
    },
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