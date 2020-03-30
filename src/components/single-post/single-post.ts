import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
	name: "single-post",
	
	props: {
		postId: {
			type: String
		}
	},
	
	data() {
		return {
			content: "",
			author: ""
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
	},
	
	beforeDestroy() {
	},
	
	beforeMount() {
		let postId = this.$route.params.postId
		console.log("post id", postId);
		axios.post("http://localhost:8000/api/get-post", {postId: postId}).then((res) => {
			console.log("single post")
			console.log(res.data)
			this.content = res.data.text
			this.author = res.data.author
		})
	},
	
	methods: {
		// post() {
		// 	let text = this.$refs.vEditor.quill.getHTML()
		// 	console.log(text)

		// 	axios.post("http://localhost:8000/api/new-post", {text: text}).then((response) => {
		// 		console.log("posted:", response)
		// 	})

		// },
	}	

})
