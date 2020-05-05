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

// interface Vue {
// 	$host: 'http://localhost:8000/'
// }

let vm = new Vue({
	// $host: 'http://localhost:8000/',
	provide: function() {
		return {
			// host: 'http://172.16.4.116:8000/'
			host: 'http://localhost:8000/'
		}
	},
  router,
  render: (h) => h(App),
}).$mount('#app');

