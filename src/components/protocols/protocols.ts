import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
	name: "protocols",
	
	data() {
		return {
			posts: []
		}
	},
	
	watch: {
	},
	

	
	mounted() {
		axios.get("http://localhost:8000/api/posts").then((response) => {
			console.log(response.data)
			this.posts = response.data
		})
	},
	
	beforeDestroy() {
	},
	
	beforeMount() {},
	
	methods: {
	}	

})
