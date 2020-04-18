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
			postId: "",
			newCategory: "",
			newCategoryInput: false,
			content: "",
			author: "",
			categories: new Array()
		}
	},
	
	watch: {
		cabinetsData: {
			deep: true,
			handler(newData) {
			}
		},

		
		activeDropDown(newData, oldData) {
		}
	},
	

	
	mounted() {
		this.postId = this.$route.params.postId
		if(!!this.postId) {
			axios.post("http://172.16.4.116:8000/api/get-post", {postId: this.postId}).then((res) => {
				console.log("single post")
				console.log(res.data)
				this.content = res.data.text
				this.author = res.data.author
				this.categories = res.data.category
			})
		}
		console.log("this.postId", this.$route.params.postId)
	},
	
	beforeDestroy() {
	},
	
	beforeMount() {},
	
	methods: {
		deletePost() {
			if(this.postId) {
				axios.post("http://172.16.4.116:8000/api/delete-post", {postId: this.postId})
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
				axios.post("http://172.16.4.116:8000/api/update-post", {text: text, category: this.categories, author: this.author, postId: this.postId}).then((response) => {
					console.log("updated:", response)
				})
			} else {
				axios.post("http://172.16.4.116:8000/api/new-post", {text: text, category: this.categories, author: this.author}).then((response) => {
					console.log("posted:", response)
				})
			}
		},
	}	

})

