import Vue from 'vue';
import CombinedVueInstance from 'vue'
import App from './App.vue';
import router from './router';
import VueCookies from 'vue-cookies'
import Vue2Editor from "vue2-editor"
import './global.scss'
Vue.config.productionTip = false;
Vue.use(VueCookies)
Vue.use(Vue2Editor)

let vm = new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
