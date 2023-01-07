<template>
  <v-app>
    <v-app-bar app color="blue" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Virtual Company</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container>
        <v-card>
          <v-list two-line v-for="item in aList" v-bind:key="item.id">
            <v-list-item>
              <v-list-item-avatar>
                <v-icon :class="[item.icon_style]">
                  {{item.icon_name}}
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  {{item.title}}
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="grey">mdi-chevron-right</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    aList: [{
      icon_name: 'mdi-bank',
      icon_style: 'red white--text',
      title: '회사 소개',
    }, {
      icon_name: 'mdi-image',
      icon_style: 'green white--text',
      title: '제품 이미지',
    }, {
      divider: false,
      icon_name: 'mdi-movie',
      icon_style: 'yellow white--text',
      title: '홍보 동영상',
    }]
  }),
};
</script>
