import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/views/main_page.vue'
import SubPage from '@/views/sub_page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/main',
    name: 'main_page',
    component: MainPage
  },
  {
    path: '/sub',
    name: 'sub_page',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SubPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
