import Vue from 'vue'

declare module 'vue/types/vue' {
	interface Vue {
		$host: 'http://localhost:8000/'
	}
}
