<template>
  <v-app>
   <v-app-bar app>
     <v-app-bar-nav-icon></v-app-bar-nav-icon>
     <v-toolbar-title>Header입니다.</v-toolbar-title>
   </v-app-bar>
    <v-content>
      안녕하세요
      <v-container>Contents입니다.</v-container>
    </v-content>
    <v-footer>
      <div>Footer입니다.</div>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
