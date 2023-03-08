<template>
  <div class="MainPage__wrapper">
    <div class="MainPage__header flex full-width flex-justify-between">
      <span class="UserName "><strong>{{ userName }}</strong></span>
      <div class="DateTime"> <strong>{{localeDate}}</strong></div>
      <button @click="logout" class="btn cursor-pointer">Выйти</button>
    </div>
  </div>
</template>

<script>
import {AuthHelpers} from "@/helpers/AuthHelpers";

export default {
  name: "SidebarTop",
  data() {
    return {
      date: 777
    }
  },
  methods: {
    logout() {
      AuthHelpers.logout();
    },
  },

  computed: {
    userName() {
      const userData = AuthHelpers.getUserInfo();
      return userData.login
    },
    localeDate() {
      return (new Date(this.date)).toLocaleTimeString()
    },
  },
  created() {
    this.intervalId = setInterval(() => this.date = Date.now(), 1000);
  }
}
</script>

<style src="./style.less" lang="less">

</style>