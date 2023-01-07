<template>
  <v-app>
    <v-app-bar app color="blue" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-app-bar-title>Virtual University</v-app-bar-title>
    </v-app-bar>
    <v-content>
      <v-container>
        <v-row>
          <v-col xs="12">
            <v-card>
              <v-card-text style="height: 300px;" class="grey lighten-4"></v-card-text>
            </v-card>
            <v-card>
              <v-card-text style="height: 50px; position: relative">
                <v-btn absolute dark fab top right color="pink">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
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
