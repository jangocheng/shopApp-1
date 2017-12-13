import Vue from 'vue'
import App from './App.vue'
import store from './store'

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
require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import Interface from './views/component/Interface.vue'
import login from './views/component/login.vue'
import enroll from './views/component/enroll.vue'
import password1 from './views/forgetPassword/password1.vue'
import password2 from './views/forgetPassword/password2.vue'
import password3 from './views/forgetPassword/password3.vue'

import index from './views/component/index.vue'
import shop from './views/component/shop.vue'
import shopCar from './views/component/shopCar.vue'
import product from './views/component/product.vue'
import mySelf from './views/component/mySelf.vue'

import XiangQing from './views/component/XiangQing.vue'
import describe from './views/XiangQing/describe.vue'
import pingjia from './views/XiangQing/pingjia.vue'
import params from './views/XiangQing/params.vue'

let vueRouter=new VueRouter({
	mode:'history',
	routes:[
		{path:'/',redirect:'Interface'},
		{path:'/Interface',component:Interface},
		{path:'/login',component:login},
		{path:'/enroll',component:enroll},
		{path:'/password1',component:password1},
		{path:'/password2',component:password2},
		{path:'/password3',component:password3},
		
		{path:'/XiangQing',component:XiangQing,
			children:[
				{path:'/',redirect:'describe'},
				{path:'describe',component:describe},
				{path:'pingjia',component:pingjia},
				{path:'params',component:params}
			]
		},
		{path:'/pingjia',component:pingjia},
		{path:'/index',component:index,
			children:[
				{path:'/',redirect:'shop'},
				{path:'shop',component:shop},
				{path:'shopCar',component:shopCar},
				{path:'product',component:product},
				{path:'mySelf',component:mySelf}
			]
	   }
	]
})

new Vue({
  el: '#app',
  store:store,
  router:vueRouter,
  render: h => h(App)
})
