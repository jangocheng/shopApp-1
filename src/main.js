import Vue from 'vue'
import App from './App.vue'

//引入muse-ui
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

//导入路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//http
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入轮播组件
//require('swiper/dist/css/swiper.css')
//import VueAwesomeSwiper from 'vue-awesome-swiper'
//Vue.use(VueAwesomeSwiper)

import Interface from './views/Interface.vue'
import login from './views/login.vue'
import enroll from './views/enroll.vue'
import password1 from './views/forgetPassword/password1.vue'
import password2 from './views/forgetPassword/password2.vue'
import password3 from './views/forgetPassword/password3.vue'

let vueRouter=new VueRouter({
	routes:[
		{path:'/',redirect:'Interface'},
		{path:'/Interface',component:Interface},
		{path:'/login',component:login},
		{path:'/enroll',component:enroll},
		{path:'/password1',component:password1},
		{path:'/password2',component:password2},
		{path:'/password3',component:password3}
	]
})

new Vue({
  el: '#app',
  router:vueRouter,
  render: h => h(App)
})
