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

<script>
 import Vue from 'vue';
 import axios from 'axios';

 
 axios.defaults.withCredentials = true

 export default Vue.extend({
		 name: "app",
		 inject: ['host'],
		 data() {
				 return {
						 authorized: false
				 }
		 },
		 mounted() {
				 axios.get(this.host + "api/isAuthorized").then((response) => {
						 if(response.status == 200)
								 this.authorized = true
				 })
		 }
 })

 
</script>

<style lang="scss" src="./global.scss">

</style>
