<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-row>
          <v-col cols="12" class="text-center">
            <h1 class="title white--text">반가워요!</h1>
            <p class="caption">by VueJS</p>
            <img src="./assets/hello-pwa.png" alt="">
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$vuetify.theme.dark = true;
  },
  data: () => ({
    //
  }),
};
</script>
