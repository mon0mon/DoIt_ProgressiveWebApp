<template>
  <div id="app">
    <h1>{{sTitle}}</h1>
    <FavoriteFruits></FavoriteFruits>
    <FavoriteFruits></FavoriteFruits>
  </div>
</template>

<script>
import FavoriteFruits from "@/components/FavoriteFruits.vue";

export default {
  name: 'App',
  components: {
    FavoriteFruits,
  },
  data() {
    return {
      sTitle: '안녕하세요!',
    }
  }
}
</script>

<style>
</style>
