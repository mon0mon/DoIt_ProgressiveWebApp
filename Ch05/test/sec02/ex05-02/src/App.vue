<template>
  <div id="app">
    <p>클릭 숫자: {{nClicks}}</p>
    <p>카운트다운: {{fnCounter}}</p>
    <button @click="fnIncrement">눌러 주세요!</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      nClicks: 0
    }
  },
  computed: {
    fnCounter() {
      return 10 - this.nClicks;
    }
  },
  methods: {
    fnIncrement() {
      this.nClicks++;
    }
  }
}
</script>

<style>
</style>
