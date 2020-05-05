import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
	name: "protocols",
	
	inject: ['host'],
	
	data() {
		return {
			authorized: false,
			focusSearch: {
				categories: false,
				author: false,
				date: false,
			},
			searchParams: {
				text: "",
				category: new Array,
				author: "",
				dateFrom: "",
				dateTo: "",
			},
			searchSuggestions: {},
			searchParametersActive: false,
			editClicked: false,
			posts: new Array
		}
	},
	
	watch: {
	},
	

	
	mounted() {
		axios.get(this.host + "api/isAuthorized").then((response) => {
						 if(response.status == 200)
								 this.authorized = true
				 })
		axios.get(this.host + "api/posts").then((response) => {
			this.posts = response.data
			console.log(this.posts)
		})
		axios.get(this.host + "api/categories").then((response) => {
			this.searchSuggestions = response.data
		})
	},
	
	beforeDestroy() {
	},
	
	beforeMount() {},
	
	methods: {
		clearSearch() {
			this.searchParams = {
				text: "",
				category: [],
				author: "",
				dateFrom: "",
				dateTo: "",
			}
		},
		removeSearchCategory(index) {
			this.searchParams.category.splice(index, 1)
		},
		findPosts() {
			let params = new Array
			if(this.searchParams.category.length)
				params.push({'category': {'$all': this.searchParams.category}})
			
			params.push({'text': {$regex: this.searchParams.text, $options: "i"}})
			
			if(this.searchParams.author.length)
				params.push({'author': this.searchParams.author})
			
			if(this.searchParams.dateFrom) {
				let dateTo = this.searchParams.dateTo
				if(dateTo == "") {
					params.push({date: {
						"$gte": new Date(this.searchParams.dateFrom + "T00:00:00"),
						"$lte": new Date(this.searchParams.dateFrom + "T23:59:59")
					}})
				}	else {
				params.push({date: {
					"$gte": new Date(this.searchParams.dateFrom),
					"$lte": new Date(dateTo)
				}})}

			}
			
			console.log(params)
			if(params.length) {
				axios.post(this.host + "/api/posts-find", params).then((response) => {
					console.log(response.data)
					this.posts = response.data
				})
			} else {
				axios.get(this.host + "api/posts").then((response) => {
					this.posts = response.data
					console.log(this.posts)
				})
			}
		},
		searchBlur(cat) {
			// await this.$nextTick()
			for(let key in this.focusSearch) {
				this.focusSearch[key] = false
			}
		},
		searchCategory(cat) {
			if(!this.searchParams.category.includes(cat))
				this.searchParams.category.push(cat);
		},
		searchAuthor(cat) {
			this.searchParams.author = cat;
		},
		focusSearchCategory(cat) {
			for(let key in this.focusSearch) {
				this.focusSearch[key] = false
			}
			this.focusSearch[cat] = true
		},
		editPost(id) {
			this.editClicked = true
			this.$router.push("post-editor/" + id)
		},
		confirm(postId) {
			if(!this.editClicked)
				this.$router.push("protocols/" + postId)
			this.editClicked = false
		}
	}	

})
