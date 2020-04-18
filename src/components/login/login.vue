<template>
	<div class="form">
		<div>Email
			<input type="email"
						 v-model="email"/></div>
			<div>Пароль
				<input type="password"
							 v-model="password"/></div>
				<button class="generic-black-button"
								@click="login()">Войти</button>
	</div>
</template>

<script lang="ts" src="./login.ts"></script>

<style lang="scss" src="./login.scss"></style>
