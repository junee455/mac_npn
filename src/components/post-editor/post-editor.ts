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
	},
	
	beforeDestroy() {
	},
	
	beforeMount() {},
	
	methods: {
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

			axios.post("http://localhost:8000/api/new-post", {text: text}).then((response) => {
				console.log("posted:", response)
			})
		},
	}	

})

