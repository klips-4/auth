<template src="./template.html">

</template>

<script>
import CatalogBar from "@/components/CatalogBar/CatalogBar";

export default {
  name: "MainPage",
  components: {CatalogBar},
  data() {
    return {
      menubar: ['Календарь установок', 'Замеры', 'Запись клиента', 'Договора', 'Прочее']
    }
  }

}
</script>

<style src="./style.less" lang="less">

</style>