import Vue from 'vue';
import CombinedVueInstance from 'vue'
import App from './App.vue';
import router from './router';
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false;
Vue.use(VueCookies)

let vm = new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
