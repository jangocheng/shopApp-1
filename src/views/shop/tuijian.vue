<template>
  <div class="tuijian">
  	<ul class="ul">
  		<li><p class="li"></p></li>
  		<li>为您推荐</li>
  		<li><p class="li"></p></li>
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
.tuijian{
	width: 100%;
	height: 30px;
	padding: 0 8px;
	margin-top: 12px;
}
.ul{
	width: 100%;
	display: flex;
}
.ul li{
	color: gray;
	list-style: none;
	text-align: center;
	height: 30px;
}
.ul li:nth-child(1){
	width: 38%;
}
.ul li:nth-child(2){
	width: 24%;
}
.ul li:nth-child(3){
	width: 38%;
}
.li{
	margin-top: 10px;
	width: 100%;
	background: gray;
	height: 1px;
}
</style>
