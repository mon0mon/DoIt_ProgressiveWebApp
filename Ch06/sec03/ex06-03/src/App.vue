<template>
  <div id="app">
    <v-app>
      <v-app-bar app color="primary" dark fixed>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>마스터 페이지</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-dots-horizontal</v-icon>
        </v-btn>
      </v-app-bar>
      <v-content>
        <v-container>
          <h1 class="display-1 my-5">안녕하세요.</h1>
          <p class="body-2 my-4">마스터 페이지입니다.</p>
          <v-divider></v-divider>
          <h1 class="display-3 my-4">안녕하세요</h1>
          <p class="body-1 my-4">마스터 페이지입니다.</p>
        </v-container>
      </v-content>
      <v-footer color="secondary" dark fixed>
        <div class="mx-auto">Copyright &copy;</div>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
