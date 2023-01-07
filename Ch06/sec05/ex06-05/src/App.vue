<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container>
          <v-row text-center>
            <v-col cols="12" class="border_style">xs12</v-col>
            <v-col cols="6" class="border_style">xs6</v-col>
            <v-col cols="3" class="border_style">xs3</v-col>
            <v-col cols="4" class="border_style">xs4</v-col>
            <v-col cols="1" v-for="item in 12" v-bind:key="item.id" class="border_style">xs1</v-col>
          </v-row>
          <br>
          <br>
          <v-row text-center>
            <v-col cols="1" v-for="item in 20" v-bind:key="item.id" class="border_style">xs1</v-col>
          </v-row>
        </v-container>
        <v-container fluid>
          <v-row text-center>
            <v-col sm="4" class="border_style">sm4</v-col>
            <v-col sm="4" offset-sm="4" class="border_style">4</v-col>
          </v-row>
        </v-container>
      </v-content>
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

<style>
  .border_style {
    border-color: rgb(5, 121, 30);
    border-width: 1px;
    border-style: solid;
    background-color: rgb(153, 204, 14);
  }
</style>