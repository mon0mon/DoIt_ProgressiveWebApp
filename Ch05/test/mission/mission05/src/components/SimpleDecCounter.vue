<template>
  <div>
    <button @click="fnDecCount">카운터: {{ fnGetCount }}(감소)</button>
  </div>
</template>

<script>
export default {
  name: 'SimpleDecCounter',
  props: {
    startnumber: String
  },
  data() {
    return {
      nCount: parseInt(this.startnumber)
    }
  },
  computed: {
    fnGetCount: function () {
      return this.nCount + this.$store.getters.fnGetCount;
    }
  },
  methods: {
    fnDecCount: function () {
      this.$store.commit('fnDecrement');
    }
  }
}
</script>

<style scoped>
div {
  margin-left: 5px;
  margin-right: 5px;
}
</style>