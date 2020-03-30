<template>
  <div id="app">
    <div id="nav">
			<div class="logo"></div>
			<router-link to="/protocols">протоколы</router-link>
			<router-link to="/resolutions">решения спб мас</router-link>
			<router-link to="/regulations">устав</router-link>
			<router-link to="/post-editor">новая запись</router-link>
    </div>
    <router-view id="router-view"/>
  </div>
</template>

<style lang="scss" src="./global.scss">

</style>
