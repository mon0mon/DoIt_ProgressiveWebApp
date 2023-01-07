<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-card height="100%" class="d-flex display-2 align-center justify-center">
          선택 : {{aSelect}}
        </v-card>
      </v-content>
      <v-footer>
        <v-bottom-navigation absolute v-model="aSelect" dark class="d-flex align-center justify-center">
          <v-btn text value="자전거">
            자전거
            <v-icon>mdi-bike</v-icon>
          </v-btn>
          <v-btn text value="지하철">
            지하철
            <v-icon>mdi-subway</v-icon>
          </v-btn>
          <v-btn text value="버스">
            버스
            <v-icon>mdi-bus</v-icon>
          </v-btn>
        </v-bottom-navigation>
      </v-footer>
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    aSelect: '자전거'
  }),
};
</script>
