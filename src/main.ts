import Vue from 'vue';
import CombinedVueInstance from 'vue'
import App from './App.vue';
import router from './router';
import VueCookies from 'vue-cookies'
import Vue2Editor from "vue2-editor"
import './global.scss'
import axios from 'axios';

Vue.config.productionTip = false;
Vue.use(VueCookies)
Vue.use(Vue2Editor)

let host = 'http://localhost:8000/';

Vue.prototype.$host = host;

let isAuthorized = (next) => {
	axios.get(host + "api/isAuthorized").then((response) => {
		next()
	}).catch((_) => {
		next({name: 'login'})
	})
}

let guardedRoutes = ["api/delete-post", "api/update-post", "api/new-post", "post-editor"]

router.beforeResolve((to, from, next) => {
	if(to.name === 'post-editor') {
		isAuthorized(next)
	} else {
		next()
	}
})


let vm = new Vue({
  router,
  render: (h) => h(App),
})



vm.$mount('#app');
