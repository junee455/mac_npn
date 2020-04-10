<template>
  <div id="app">
    <div id="nav">
			<div class="logo"></div>
			<router-link to="/protocols">протоколы</router-link>
			<router-link to="/resolutions">решения спб мас</router-link>
			<router-link to="/regulations">устав</router-link>
			<router-link v-if="authorized" to="/post-editor">новая запись</router-link>
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
		 data() {
				 return {
						 authorized: false
				 }
		 },
		 mounted() {
				 axios.get("http://localhost:8000/api/isAuthorized").then((response) => {
						 if(response.status == 200)
								 this.authorized = true
				 })
		 }
 })

 
</script>

<style lang="scss" src="./global.scss">

</style>
