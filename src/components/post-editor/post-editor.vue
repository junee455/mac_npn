<template>
	<div>
		<vue-editor ref="vEditor" v-model="content"></vue-editor>
		<div class="sub-menu">
			<div class="generic-black-button"
					 @click="post()">{{postId ? "сохранить" : "опубликовать"}}</div>
			<div>категории
				<span class="category-tag"
							@click="deleteCategory(index)"
							v-for="(category, index) of categories">{{category}}</span>
				<span v-if="!newCategoryInput"
										class="big-plus-button"
							@click="addNewCategory()">+</span>
				<span v-else>
					<input v-model="newCategory" class="author-input"/>
					<span class="ok-button"
					@click="confirmCategory()">OK</span>
				</span>
			</div>
			<div>автор <input v-model="author" class="author-input"/></div>
		</div>
		<div class="delete-button"
				 v-if="postId"
				 @click="deletePost()">Удалить</div>
	</div>
</template>

<script lang="ts" src="./post-editor.ts"></script>

<style scoped lang="scss" src="./post-editor.scss"></style>
