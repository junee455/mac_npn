import Vue from 'vue';
import axios from 'axios';

axios.defaults.withCredentials = true

export default Vue.extend({
	name: "login",
	data() {
		return {
			email: "",
			password: ""
		}
	},
	methods: {
		login() {
			axios.post("http://localhost:8000/api/login", this.$data).then((response) => {
				console.log(response.data)
				this.$cookies.set('secret-key', response.data)
				console.log(document.cookie)
			})
		}
	}
})
