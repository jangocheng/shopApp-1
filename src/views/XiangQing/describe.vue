<template>
  <div class="describe" style="margin-top: 20px;">
		<ul class="ul1">
			<li style="border-bottom: 2px solid #CA3232;color: #CA3232;">商品详情</li>
			<li @click="pingjia()">评价(156)</li>
			<li>规格参数</li>
		</ul>
		<img src="../../assets/XiangQing/Xbanner.png" class="img"/>
		
		<ul class="ul2">
			<li>
				<img src="../../assets/XiangQing/icon1.png"/>
				<p>海关备案</p>
			</li>
			<li>
				<img src="../../assets/XiangQing/icon1.png"/>
				<p>海关备案</p>
			</li>
			<li>
				<img src="../../assets/XiangQing/icon1.png"/>
				<p>海关备案</p>
			</li>
		</ul>
		
		<ul class="ul3">
			<li>
				<div id="left">
					<img src="../../assets/XiangQing/icon4.png"/>
				</div>
				<div id="right">
					<p class="big">100%原装正品</p>
					<p class="p2">有商品海外正规渠道有售，承诺100%进口原装正品。</p>
				</div>
			</li>
			<li>
				<div id="left">
					<img src="../../assets/XiangQing/icon4.png"/>
				</div>
				<div id="right">
					<p class="big">100%原装正品</p>
					<p class="p2">有商品海外正规渠道有售，承诺100%进口原装正品。</p>
				</div>
			</li>
			<li>
				<div id="left">
					<img src="../../assets/XiangQing/icon7.png"/>
				</div>
				<div id="right">
					<p class="big">100%原装正品</p>
					<p class="p2">有商品海外正规渠道有售，承诺100%进口原装正品。</p>
				</div>
			</li>
			<li>
				<div id="left">
					<img src="../../assets/XiangQing/icon7.png"/>
				</div>
				<div id="right">
					<p class="big">100%原装正品</p>
					<p class="p2">有商品海外正规渠道有售，承诺100%进口原装正品。</p>
				</div>
			</li>
			<li>
				<div id="left">
					<img src="../../assets/XiangQing/icon4.png"/>
				</div>
				<div id="right">
					<p class="big">100%原装正品</p>
					<p class="p2">有商品海外正规渠道有售，承诺100%进口原装正品。</p>
				</div>
			</li>
			<li>
				<div id="left">
					<img src="../../assets/XiangQing/icon4.png"/>
				</div>
				<div id="right">
					<p class="big">100%原装正品</p>
					<p class="p2">有商品海外正规渠道有售，承诺100%进口原装正品。</p>
				</div>
			</li>
		</ul>
		<img src="../../assets/XiangQing/text.png" id="text"/>
		<div id="text2">
			<p>收货信息必须为：真实姓名，并且提供真实的身份证号码<br />
			您可以直接联系卖家提供相关信息，或者在下单时留言注身份信息<br />
			下单后地址无法修改，请您慎重填写
			</p>
		</div>
		<img src="../../assets/XiangQing/icon6.png" class="img3"/>
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
  		this.$router.push('shopCar1')
  	},
  	pingjia(){
  		this.$router.push('/pingjia')
  	}
  }
}
</script>

<style scoped="scoped">
*{
	margin: 0;
	padding: 0;
}
.describe{
	width: 100%;
	background: white;
}
.ul1{
	display: flex;
	width: 100%;
	height: 40px;
	line-height: 40px;
	border-bottom: 1px solid #DDDDDD;
}
.ul1 li{
	width: 33.3%;
	list-style: none;
	text-align: center;
	color: #666666;
}
.img{
	margin-top: 6px;
	width: 100%;
	height: 210px;
}
.ul2{
	display: flex;
	width: 100%;
	height: 80px;
	border-bottom: 1px solid #CE3232;
}
.ul2 li{
	width: 33.3%;
	list-style: none;
	text-align: center;
	color: #666666;
}
.ul3{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
}
.ul3 img{
	width: 46px;
}
.ul3 li{
	padding: 0 10px;
	list-style: none;
	width: 50%;
	height: 90px;
	color: #5a5a5a;
}
#right{
	padding-top: 10px;
	height: 90px;
}
.ul3 li:nth-child(1){
	background: #EEEEEE;
}
.ul3 li:nth-child(2){
	background: #EEEEEE;
}
.ul3 li:nth-child(5){
	background: #EEEEEE;
}
.ul3 li:nth-child(6){
	background: #EEEEEE;
}
#left{
	height: 90px;
	float: left;
}
#left img{
	width: 46px;
	height: 47px;
	margin-top: 20px;
	margin-right: 10px;
}
.p2{
	font-size: 12px;
}
#text{
	width: 100%;
	height: 210px;
}
#text2{
	font-size: 12px;
	border-top: 1px solid #CE3232;
	padding-top: 6px;
	width: 100%;
	height: 80px;
	text-align: center;
	background: #eeeeee;
	color: #f94471;
}
.img3{
	width: 100%;
	height: 480px;
	margin-bottom: 60px;
}
.big{
	font-size: 16px;
}
#footer{
	width: 100%;
	height: 60px;
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
	height: 60px;
	list-style: none;
}
#footer ul li:nth-child(1){
	padding-top: 8px;
	width: 15%;
	border-right: 1px solid #DDDDDD;
}
#footer ul li:nth-child(2){
	padding-top: 8px;
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
	line-height: 60px;
	font-size: 18px;
}
</style>
