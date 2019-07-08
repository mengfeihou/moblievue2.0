import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		language: "中文"
	},
	mutations: {
		// 获取token的值
		/* LOGIN:(state,data)=>{
			state.token = data;
			localStorage.setItem('token',state.token);
			console.log('jwtoken',data)
		} */
	}
})
