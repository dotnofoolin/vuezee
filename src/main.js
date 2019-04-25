import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import store from './store/main.js'

import _ from 'lodash'
Object.defineProperty(Vue.prototype, '$_', { value: _ })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
