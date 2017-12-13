<template>
	<div id="footer">
			<ul>
				<li>
					<p><img src="../../assets/XiangQing/icon9.png"/></p>
					<p class="bottom1">购物车</p>
				</li>
				<li>
					<p><img src="../../assets/XiangQing/icon8.png"/></p>
					<p class="bottom1">收藏</p>
				</li>
				<li @click="push()">
					<p class="bottom2">加入购物车</p>
				</li>
				<li>
					<p class="bottom2">立即购买</p>
				</li>
			</ul>
		</div>
</template>

<script>


export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  methods:{
  	push(){
  		this.$router.push('/index/shopCar')
  	}
  }
}
</script>

<style scoped="scoped">
*{
	margin: 0;
	padding: 0;
}
#footer{
	width: 100%;
	height: 50px;
	background: white;
	position: fixed;
	bottom: 0;
}
#footer ul{
	width: 100%;
	display: flex;
}
#footer ul li{
	text-align: center;
	height: 50px;
	list-style: none;
}
#footer ul li:nth-child(1){
	width: 15%;
	border-right: 1px solid #DDDDDD;
}
#footer ul li:nth-child(2){
	width: 15%;
}
#footer ul li:nth-child(3){
	width: 35%;
	background: #ff6060;
}
#footer ul li:nth-child(4){
	width: 35%;
	background: #CA3232;
}
.bottom1{
	margin-top: -6px;
	color: gray;
}
.bottom2{
	color: white;
	line-height: 50px;
	font-size: 18px;
}
</style>
