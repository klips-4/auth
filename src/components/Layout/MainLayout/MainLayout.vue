<template>
    <div class="Sidebar">
      <Sidebar/>
    </div>
    <div class="CatalogBar__wrapper">
      <CatalogBar/>
    </div>
    <router-view/>

</template>


<script>

import CatalogBar from "@/components/CatalogBar/CatalogBar";
import Sidebar from "@/components/Sidebar/Sidebar";
import SourceService from "@/services/SourceService";


export default {
  name: "MainLayout",
  components: {CatalogBar, Sidebar},

  data() {
    return {
      source: new SourceService({endpoint: 'Client'}),
    }

  },

}
</script>

<style src="./style.less" lang="less">

</style>