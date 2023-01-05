<template>
  <div>
    <button @click="fnIncrement">카운터 : {{ fnGetCount }}</button>
  </div>
</template>

<script>
export default {
  name: 'SimpleCounter',
  props: {
    startnumber: String,
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
    fnIncrement: function () {
      this.$store.commit('fnIncrement');
      console.log(this.$store.getters.fnGetCount);
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