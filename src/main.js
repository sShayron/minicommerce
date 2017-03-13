import Vue from 'vue'
import VueRouter from 'vue-router'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import App from './App'
import Categories from './components/categories.vue'
import Products from './components/products.vue'

Vue.use(VueMaterial)
Vue.use(VueRouter)

const routes = [
  { path: '/products', component: Products },
  { path: '/categories', component: Categories }
]

const router = new VueRouter({
  routes
})

Vue.material.registerTheme('default', {
  primary: {
    color: 'black',
    hue: 500
  },
  accent: {
    color: 'cyan',
    hue: 700
  },
  warn: {
    color: 'red',
    hue: 500
  },
  background: {
    color: 'grey',
    hue: 500
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
