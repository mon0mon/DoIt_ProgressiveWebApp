<template>
  <v-container>
    <v-content>
      <p class="text-h1 text-center my-4">메인페이지입니다.</p>
      <v-main class="mt-3">
        <p class="text--disabled">매개변수1</p>
        <p>{{param1}}</p>
      </v-main>
      <v-main class="mt-3">
        <v-text-field label="매개변수2" v-model="param2"></v-text-field>
      </v-main>
      <v-main class="mt-3 text-center">
        <v-btn @click="moveToSub">확인</v-btn>
      </v-main>
    </v-content>
  </v-container>
</template>

<script>
export default {
  name: 'MainPage',
  data() {
    return {
      param1 : '안녕하세요',
      param2 : '',
    }
  },
  methods: {
    moveToSub() {
      this.$router.push({
        name: 'sub',
        params: {
          p_param1 : this.param1,
          p_param2 : this.param2,
        }
      });
    }
  }
}
</script>

<style scoped>

</style>