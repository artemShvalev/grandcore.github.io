<template>
<div id="app">
  <h1>App.vue</h1>
  <!-- <Header class="bg" /> -->
  <router-view /> 
</div>
</template>



<script>

import Header from './layouts/header.vue'


export default {
  name: 'App',
  components: {
    Header
  }
}

</script>

<style>
.bg {
  background-color: aquamarine;
}

</style>

