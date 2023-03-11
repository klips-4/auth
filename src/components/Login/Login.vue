<template src="./template.html">

</template>

<script>
import SourceService from "@/services/SourceService";
import {AuthHelpers} from "@/helpers/AuthHelpers";

export default {
  name: "LoginPage",
  data() {
    return {
      loginForm: {
        login: '',
        password: ''
      },
      source: new SourceService({
        endpoint: 'User',
        bindings: {
          login: 'Login'
        }
      })
    }
  },
  methods: {
    _login() {
      this.source.customQuery('login', this.loginForm).then((result) => {
        if (result.success) {
          const res = result.data;
          AuthHelpers.login(false, res.id, res);
        }
        else {
          alert('Не верно указан логин или пароль')
        }
      });
    },
  }
}
</script>

<style src="./style.less" lang="less">

</style>