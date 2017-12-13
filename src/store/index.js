import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	//state数据状态
	state:{
		code:'',
		phone:'',
		user:{}
	},
//	mutations同步更改state数据
	mutations:{
		//保存验证码
		saveCode:function(state,code,phone,password){
			state.code=code
			state.phone=phone
			state.password=password
		},
		saveUserInfo:function(state,user){
			state.user=user
		},
		updatePassword:function(state,phone,password){
			state.phone=phone
			state.password=password
		}
	},
//	actions异步更改state数据
	actions:{
		
	}
})

export default store
