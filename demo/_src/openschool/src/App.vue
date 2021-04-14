<template>
<div id="app">
  <img width="25%" src="./assets/logo.png">
  <Header class="bg" />
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

