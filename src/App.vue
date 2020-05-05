<template>
  <div id="app">
    <div id="nav">
			<div class="logo"></div>
			<router-link to="/protocols">Протоколы</router-link>
			<router-link to="/resolutions">Решения спб мас</router-link>
			<router-link to="/regulations">Устав</router-link>
			<router-link v-if="authorized" to="/post-editor">Новая запись</router-link>
    </div>
    <router-view id="router-view"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

axios.defaults.withCredentials = true

export default Vue.extend({
	name: "app",
	data() {
		return {
			authorized: false
		}
	},
	mounted() {
		// this.$host = 'http://localhost:8000/';
		let isAuthorized = (next = <any>undefined, to = <any>undefined) => {
			axios.get(this.$host + "api/isAuthorized").then((response) => {
				if(response.status == 200) {
					this.authorized = true
					if(!!next)
						next()
				}}).catch((_) => {
					console.log("next:", next)
					this.authorized = false
					if(!!to && to.name == "post-editor") {
						next({name: '/login'})
					}
					else if(!!next)
						next()
				})
		}
		
		
		
		this.$router.beforeResolve((to, from, next) => {
			console.log("the App guard");
			isAuthorized(next, to)
		})
		
		isAuthorized()
	}
})


</script>

<style lang="scss" src="./global.scss">

</style>
