import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Protocols from './components/protocols/protocols.vue';
import Regulations from './components/regulations/regulations.vue';
import Resolutions from './components/resolutions/resolutions.vue';
import PostEditor from './components/post-editor/post-editor.vue';
import SinglePost from './components/single-post/single-post.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
			redirect: '/protocols'
    }, {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    }, {
			path: '/protocols',
			name: 'protocols',
			component: Protocols
		}, {
			path: '/regulations',
			name: 'regulations',
			component: Regulations
		}, {
			path: '/protocols',
			name: 'protocols',
			component: Protocols
		}, {
			path: '/resolutions',
			name: 'resolutions',
			component: Resolutions
		}, {
			path: '/post-editor',
			name: 'post-editor',
			component: PostEditor
		},
		{
			path: '/protocols/:postId',
			name: 'single-post',
			component: SinglePost
		}
  ],
});
