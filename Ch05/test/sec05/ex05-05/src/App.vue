<template>
  <div id="app">
    <h1>{{sTitle}}</h1>
    <ComCounter msg="카운터1"></ComCounter>
    <ComCounter msg="카운터2"></ComCounter>
  </div>
</template>

<script>

import ComCounter from "@/components/ComCounter.vue";

export default {
  name: 'App',
  components: {ComCounter},
  data() {
    return {
      sTitle: '안녕하세요!',
    }
  }
}
</script>

<style>
</style>
