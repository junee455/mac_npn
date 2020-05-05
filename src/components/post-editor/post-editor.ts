import Vue from 'vue';
import axios from 'axios';
import { VueEditor } from 'vue2-editor'

export default Vue.extend({
	name: "post-editor",
	
	components: { 
   VueEditor
  },
	
	data() {
		return {
			authorized: false,
			postId: "",
			newCategory: "",
			newCategoryInput: false,
			content: "",
			author: "",
			categories: new Array()
		}
	},
	
	watch: {
		postId: {
			deep: true,
			handler(newData) {
				if(!!this.postId) {
					this.content = ""
				}
			}
		},

		
	},
	
	
	
	mounted() {
		this.postId = this.$route.params.postId
		
		this.$router.beforeResolve((to, from, next) => {
			this.postId = (to.params.postId) ? to.params.postId : ''
			// if user creates new post
			if(!this.postId) {
				console.log('empty content')
				this.content = ""
				this.$forceUpdate()
			} else {
				this.getPost(this.postId)
			}
				
			next()
		})
		
		if(!!this.postId)
			this.getPost(this.postId)
		
		// axios.get(this.$host + "api/isAuthorized").then((response) => {
		// 	console.log("post-editor", response.status);
		// 	if(response.status == 200) {
		// 		this.authorized = true
		// 		if(!!this.postId) {

		// 		}
		// 		console.log("this.postId", this.$route.params.postId)
		// 	}})
		

		
		// .catch((_) => {
		// console.log("unauthorized");
		// this.$router.push('/login');
		// this.$router.go(1);
		// })
		

	},
	
	beforeDestroy() {
	},
	
	beforeMount() {},
	
	methods: {
		catchAuth(error) {

		},
		getPost(postId:string) {
			axios.post(this.$host + "api/get-post", {postId: postId}).then((res) => {
				console.log("single post")
				console.log(res.data)
				this.content = res.data.text
				this.author = res.data.author
				this.categories = res.data.category
			})
		},
		deletePost() {
			if(this.postId) {
				axios.post(this.$host + "api/delete-post", {postId: this.postId})

				this.postId = ""
			}
		},
		
		deleteCategory(index) {
			this.categories.splice(index, 1)
		},
		
		addNewCategory() {
			this.newCategoryInput = true;
		},
		
		confirmCategory() {
			this.newCategoryInput = false;
			if(this.newCategory.length != 0)
				this.categories.push(this.newCategory)
			this.newCategory = "";
		},
		
		post() {
			// @ts-ignore
			// console.log(this.content)
			// return
			let text = this.content
			console.log(text)

			if(this.postId) {
				axios.post(this.$host + "api/update-post", {text: text, category: this.categories, author: this.author, postId: this.postId}).then((response) => {
					console.log("updated:", response)
				})
			} else {
				axios.post(this.$host + "api/new-post", {text: text, category: this.categories, author: this.author}).then((response) => {
					console.log("posted:", response)
				})
			}
		},
	}	

})

