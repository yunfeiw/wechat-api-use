import Vue from 'vue'
import './plugins/axios'
import '@assets/css/iconfont.css'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
