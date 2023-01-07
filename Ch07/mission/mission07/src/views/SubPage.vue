<template>
  <v-container class="my-4">
    <v-content>
      <p class="text-center text-h3">서브 페이지입니다.</p>
    </v-content>
    <v-divider></v-divider>
    <v-content class="mt-3 text-center">
      <p class="text-h2">{{param1}}</p>
      <p class="text-h3">{{param2}}</p>
    </v-content>
    <div>
      <v-content class="text-center">
        <v-btn fab large class="mt-5" color="teal" dark @click="moveToMain">
          <v-icon>mdi-replay</v-icon>
        </v-btn>
      </v-content>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'SubPage',
  data() {
    return {
      param1: this.$route.params.p_param1,
      param2: this.$route.params.p_param2,
    }
  },
  methods: {
    moveToMain() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>