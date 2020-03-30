<template>
	<div>
		<router-link v-for="post of posts"
								 :to="{name: 'single-post', params: {postId: post._id}}"
			 v-bind:href="'/protocols/' + post._id"
				 class="post-container">
			<div class="post-text-preview" v-html="post.text"></div>
			<div class="post-author">{{ post.author }}</div>
		</router-link>
	</div>
</template>

<script lang="ts" src="./protocols.ts"></script>

<style lang="scss" src="./protocols.scss"></style>
