<template>
  <div id="app">
    <h1>{{sTitle}}</h1>
    <FavoriteFruit></FavoriteFruit>
    <FavoriteFruit></FavoriteFruit>
  </div>
</template>

<script>

import FavoriteFruit from "@/components/FavoriteFruit.vue";

export default {
  name: 'App',
  components: {
    FavoriteFruit
  },
  data() {
    return {
      sTitle: '안녕하세요!',
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
