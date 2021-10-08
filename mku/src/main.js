/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { BootstrapVue, IconsPlugin, BootstrapVueIcons, ModalPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
import Vuelidate from 'vuelidate'
import VueLocalStorage from 'vue-localstorage'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuelidate)
Vue.use(BootstrapVueIcons)
Vue.use(ModalPlugin)
Vue.use(VueAxios, axios)
Vue.use(VueCookies)
Vue.use(VueLocalStorage)
Vue.use(VueRouter)


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
