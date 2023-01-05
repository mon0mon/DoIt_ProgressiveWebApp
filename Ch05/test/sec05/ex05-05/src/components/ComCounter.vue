<template>
  <div>
    <h2>{{msg}}</h2>
    <p>카운터 : {{fnGetCount}}</p>
    <button @click="fnIncCount">+1 증가</button>
    <button @click="fnDecCount">-1 감소</button>
    <button @click="fnAPIDecCount">-1 감소(원격 API 실행)</button>
    <hr>
  </div>
</template>

<script>

export default {
  name: 'ComCounter',
  props: ['msg'],
  computed: {
    fnGetCount() {
      return this.$store.getters.fnGetCount;
    }
  },
  methods: {
    fnIncCount() {
      this.$store.commit('fnIncData')
    },
    fnDecCount() {
      this.$store.commit('fnDecData')
    },
    fnAPIDecCount() {
      this.$store.dispatch('fnAPIDecData')
    }
  }
}
</script>

<style scoped>

</style>