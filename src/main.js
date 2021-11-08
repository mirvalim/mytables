import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import router from './router'


Vue.config.productionTip = false
Vue.use(VueRouter)

const Router = new  VueRouter({
  routes:router
})

new Vue({
  router:Router,
  render: h => h(App),
}).$mount('#app')
