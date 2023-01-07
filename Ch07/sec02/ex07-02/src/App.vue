<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="bDrawer = !bDrawer">
      </v-app-bar-nav-icon>
      <v-toolbar-title>Header입니다.</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer absolute temporary v-model="bDrawer">
      <v-toolbar flat height="70px">
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img src="https://i.pravatar.cc/400?img=47">
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="title">홍길동</v-list-item-title>
              <v-list-item-subtitle>로그인</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list class="pt-3">
        <v-list-item v-for="item in aMenu_items" :key="item.title" :href="item.link">
          <v-list-item-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            {{item.title}}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    bDrawer: false,
    aMenu_items: [{
      title: '스타벅스',
      icon: 'fas fa-mug-saucer',
      link: 'https://starbucks.com'
    }, {
      title: '애플',
      icon: 'mdi-apple',
      link: 'https://apple.com'
    }, {
      title: '페이스북',
      icon: 'fa-brands fa-square-facebook',
      link: 'https://www.facebook.com'
    }]
  }),
};
</script>
