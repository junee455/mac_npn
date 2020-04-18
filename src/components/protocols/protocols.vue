<template>
	<div>
		<div class="search-bar">
			<input class="search-input"
						 :class="[searchParams.text.length ? 'text' : '']"
						 v-model="searchParams.text"/>
			<button :class="[searchParametersActive ? 'parameters-active' : 'parameters-inactive']"
							@click="searchParametersActive = !searchParametersActive">Парметры</button>
			<button class="generic-black-button"
							@click="findPosts()">Найти</button>
		</div>
		<div style="display: flex; justify-content: space-between; max-width: 700px"
				 :class="[searchParametersActive ? '' : 'hidden']">
			<div class="search-parameters">
				<div>Категории
					<div class="categories-container"> 
						<div v-for="(category, index) of searchParams.category"
								 class="category-tag"
								 @click="removeSearchCategory(index)">{{category}}</div>
					</div>
					<div @click="focusSearchCategory('categories')"
							 class="big-plus-button">+</div>
					<div class="search-input-dropdown"
							 :style="{display: focusSearch.categories ? 'block' : 'none'}">
						<div class="search-input-dropdown-items">
							<div v-for="cat of searchSuggestions.category"
									 @click="searchCategory(cat)">{{cat}}</div>
						</div>
						<div @click="searchBlur()"
								 class="close-button">✖</div>
					</div>
				</div>
				<div>Автор
					<input @focus="focusSearchCategory('author')"
								 v-model="searchParams.author"/>
					<div class="search-input-dropdown"
							 :style="{display: focusSearch.author ? 'block' : 'none'}">
						<div class="search-input-dropdown-items">
							<div v-for="cat of searchSuggestions.author"
									 @click="searchAuthor(cat)">{{cat}}</div>
						</div>
						<div @click="searchBlur()"
								 class="close-button">✖</div>
					</div>
				</div>
				<div>
					<div>Дата</div>
					<div>от</div>
					<input type="date"
								 @focus="focusSearchCategory('date')"
								 v-model="searchParams.dateFrom"/>
					
				</div>
				<div>
					<div style="color: transparent">Дата</div>
					<div>до</div>
					<input type="date"
								 @focus="focusSearchCategory('date')"
								 v-model="searchParams.dateTo"/>
				</div>
			</div>
			<button class="generic-black-button"
							@click="clearSearch()">Сброс</button>
		</div>
		<router-link v-for="post of posts"
								 :to="{name: 'single-post', params: {postId: post._id}}"
								 v-bind:href="'/protocols/' + post._id"
								 event=""
								 @click.native.prevent="confirm(post._id)"
								 class="post-container">
			<div class="post-text-preview" v-html="post.text"></div>
			<div style="display: flex; justify-content: space-between">
				<div>
					<div class="post-author">{{ post.author }}</div>
					<div style="font-size: 80%">
						<div v-if="post.category.length"
								 class="post-categories">
							<b>категории: &nbsp;</b> {{ post.category.join(', ') }}
						</div>
					</div>
				</div>
				<div style="font-size: 80%">
					{{post.timestamp[1]}}
					{{post.timestamp[0]}}
					{{post.timestamp[2]}}
				</div>
				
			</div>
			
			<div class="edit-button"
					 v-if="authorized"
					 @click="editPost(post._id)"></div>
		</router-link>
	</div>
</template>

<script lang="ts" src="./protocols.ts"></script>

<style lang="scss" src="./protocols.scss"></style>
