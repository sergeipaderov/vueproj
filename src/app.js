import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './app.vue'
import { routes } from './system/routes'
import store from './store/index'
import { sync } from 'vuex-router-sync'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes
})

sync(store, router)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(app)
})
