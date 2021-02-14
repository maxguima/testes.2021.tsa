import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    redirect:'/list'
    
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/List/List.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/Form/Form.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
