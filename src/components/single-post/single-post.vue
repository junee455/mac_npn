<template>
	<div class="post-content"
			 v-html="content"></div>
</template>

<script lang="ts" src="./single-post.ts"></script>


<style lang="scss">
 .post-content {
		 text-align: justify;
		 * {
				 line-height: 1.5em;
		 }
 }
</style>

<style lang="css">
 @import "~vue2-editor/dist/vue2-editor.css";
 @import '~quill/dist/quill.core.css';
</style>
