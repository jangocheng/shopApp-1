<template>
  <div id="new1">
  	<ul>
  		<li>
  			<img src="../../assets/shop/new1.jpg" class="img"/>
  			<p>新品上架</p>
  		</li>
  		<li>
  			<img src="../../assets/shop/new2.jpg" class="img"/>
  			<p>排毒养颜</p>
  		</li>
  		<li>
  			<img src="../../assets/shop/new3.jpg" class="img"/>
  			<p>减肥塑形</p>
  		</li>
  		<li>
  			<img src="../../assets/shop/new4.jpg" class="img"/>
  			<p>女士调理</p>
  		</li>
  		<li>
  			<img src="../../assets/shop/new5.jpg" class="img"/>
  			<p>运动营养</p>
  		</li>
  		<li>
  			<img src="../../assets/shop/new6.jpg" class="img"/>
  			<p>心血管健康</p>
  		</li>
  		<li>
  			<img src="../../assets/shop/new7.jpg" class="img"/>
  			<p>男士健康</p>
  		</li>
  		<li>
  			<img src="../../assets/shop/new8.jpg" class="img"/>
  			<p>精品套装</p>
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
  }
}
</script>

<style scoped="scoped">
*{
	margin: 0;
	padding: 0;
}
#new1{
	background: white;
	width: 100%;
	padding: 8px 0;
	height: 230px;
	border-bottom: 1px solid #DDDDDD;
}
ul{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
}
ul li{
	margin-top: 10px;
	text-align: center;
	width: 25%;
	list-style: none;
}
ul li img{
	width: 60px;
	height: 60px;
}
ul li p{
	padding-top: 2px;
	color: gray;
}
</style>
