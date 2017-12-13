<template>
  <div class="footer">
	  	<ul class="footerUl">
	  		<li @click="click('0')">
		  		<router-link to="/index/shop">
		  			<img v-show="!isshow[0]" src="../../assets/index/icon4.jpg"/>
			  		<img v-show="isshow[0]" src="../../assets/index/icon8.jpg"/>
			  		<p>首页</p>
		  		</router-link>
	  		</li>
	  		
	  		<li @click="click('1')">
		  		<router-link to="/index/shopCar">
		  			<img v-show="!isshow[1]" src="../../assets/index/icon1.jpg"/>
			  		<img v-show="isshow[1]" src="../../assets/index/icon5.jpg"/>
			  		<p>购物车</p>
		  		</router-link>
	  		</li>
	  		
	  		<li @click="click('2')">
	        <router-link to="/index/product">
	        	<img v-show="!isshow[2]" src="../../assets/index/icon2.jpg"/>
			  		<img v-show="isshow[2]" src="../../assets/index/icon6.jpg"/>
			  		<p>订单管理</p>
	        </router-link>
        </li>
        
        <li @click="click('3')">
	        <router-link to="/index/mySelf">
	        	<img v-show="!isshow[3]" src="../../assets/index/icon3.jpg"/>
			  		<img v-show="isshow[3]" src="../../assets/index/icon7.jpg"/>
			  		<p>个人中心</p>
	        </router-link>
        </li>
        
	  	</ul>
	  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
     	isshow:[false,true,true,true]
    }
  },
  methods:{
  	click(i){
		  this.isshow=[true,true,true,true]
  		this.isshow[i]=false
  	}
  }
}
</script>

<style scoped="scoped">
*{
	margin: 0;
	padding: 0;
}
.footer{
	border-top: 1px solid #DDDDDD;
	width: 100%;
	height: 60px;
	background: white;
	position: fixed;
	bottom: 0;
	z-index: 100;
}
.footerUl{
	width: 100%;
	display: flex;
}
.footerUl li{
	height: 60px;
	text-align: center;
	width: 25%;
	list-style: none;
}
.footerUl li p{
	font-size: 12px;
	margin: -4px;
	color: darkgrey;
}
.footerUl li:hover p{
	color: #CE3232;
}
.footerUl li img{
	margin-top: 8px;
	width: 24px;
	height: 26px;
}
</style>
