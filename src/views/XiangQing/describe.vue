<template>
  <div class="describe">
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
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
     
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
}
.big{
	font-size: 16px;
}

</style>
