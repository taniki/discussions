import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import DefaultLayout from '~/layouts/Default.vue'
import AsyncComputed from 'vue-async-computed'

import axios from 'axios'
import VueAxios from 'vue-axios'

import Vuex from 'vuex'
import store from './store'

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(BootstrapVue)

  Vue.component('Layout', DefaultLayout)
  Vue.use(VueAxios, axios)
  Vue.use(AsyncComputed)
  Vue.use(require('vue-moment'))

  Vue.use(Vuex)

  if (isClient) {
    appOptions.store = store
    appOptions.store.subscribe((mutation, state) => {
      localStorage.setItem('store', JSON.stringify(state))
    })
    appOptions.beforeCreate = function () {
      this.$store.commit('initialiseStore')
    }
  }
}
