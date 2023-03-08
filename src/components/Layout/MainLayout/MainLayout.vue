<template>
  <div class="MainPage__wrapper full-screen">
    <div class="MainPage__header flex full-width flex-justify-between">
      <span class="UserName flex flex-center"><strong>Имя</strong></span>
      <button @click="logout" class="btn cursor-pointer">Выйти</button>
    </div>
          <router-view />
  </div>
</template>


<script>



export default {
  name: "MainLayout",
}
</script>

<style >

</style>