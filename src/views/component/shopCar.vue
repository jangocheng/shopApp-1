<template>
  <div id="app">
  	<div id="header">
			<p>购物车</p>
		</div>
		<div id="center">
			<div id="top">
				<input type="radio"/><span>洋玩意总店</span>
			</div>
			<div id="bottom">
				<ul>
					<li>
						<p><input type="radio"/> </p>
					  <p><img src="../../assets/shopCar/icon2.png"/></p>
					  <div>
					  	<p>Metabolic酵素x酵母精华立 减肥排毒60粒</p>
					  	<p>￥219.00 <s>￥596.00</s></p>
					  </div>
					</li>
				</ul>
			</div>
		</div>
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
#app{
	background: #F1F1F1;
}
#header{
	width: 100%;
	height: 4.375rem;
	background: white;
	margin: 0;
	border-bottom: 1px solid #CE3232;
}
#header p{
	text-align: center;
  line-height: 5rem;
  font-size: 22px;
  font-weight: bold;
}
#top{
	width: 100%;
	height: 50px;
	background: white;
	font-size: 16px;
	line-height: 50px;
	padding-left: 12px;
	border-bottom: 1px solid #DDDDDD;
}
#bottom ul{
	width: 100%;
}
#bottom ul li{
	padding: 12px;
	display: flex;
}
</style>
