import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)



let sign = true
let mask = false
let nIslogin = false
const state = {
	sign,
	mask,
	nIslogin
}



export default new Vuex.Store({
	state,
	mutations:{
		handleSign(state,isLogin){
			state.sign = isLogin
			},
		handleMask(state,b){
			state.mask = b
		},
		handleLogin(state,n){
			state.nIslogin = n
		}
	}
})