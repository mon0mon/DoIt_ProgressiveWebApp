<template>
  <div>
    <div v-for="item in aFruits" v-bind:key="item.id" class="fruit_style">
      <p>좋아하는 과일: {{item.sFruit_name}}</p>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: 'FavoriteFruits',
  data() {
    return {
      aFruits : [
        {sFruit_name : '사과', id : 0},
        {sFruit_name : '오렌지', id : 1},
        {sFruit_name : '수박', id : 2},
      ]
    }
  }
}
</script>

<style scoped>
.fruit_style {
  border: 1px solid #ccc;
  background-color: white;
  padding-left: 1em;
}
</style>