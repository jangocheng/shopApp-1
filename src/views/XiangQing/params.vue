<template>
  <div id="params">
  	<ul>
  		<li>
  			<span>2H & 2D</span>
  			<p>品牌</p>
  		</li>
  		<li>
  			<span>袋装</span>
  			<p>包装方式</p>
  		</li>
  		<li>
  			<span>片剂</span>
  			<p>产品剂型</p>
  		</li>
  		<li>
  			<span>成人</span>
  			<p>年龄</p>
  		</li>
  		<li>
  			<span>日本</span>
  			<p>食品产地</p>
  		</li>
  		<li>
  			<span>36个月</span>
  			<p>保质期</p>
  		</li>
  		<li>
  			<span>350mg*60粒</span>
  			<p>规格</p>
  		</li>
  		<li>
  			<span>通用</span>
  			<p>性别</p>
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
#params{
	width: 100%;
}
#params ul li{
	background: white;
	list-style: none;
	padding: 0 16px;
	height: 50px;
	line-height: 50px;
	width: 100%;
	border-bottom: 1px solid #DDDDDD;
}
#params ul li span{
	float: right;
}
#params ul li p{
	color: darkgray;
}
</style>
