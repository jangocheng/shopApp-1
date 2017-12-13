<template>
  <div id="index">
    <keep-alive>
    	<router-view></router-view>
    </keep-alive>
    <footer1></footer1>
  </div>
</template>

<script>
import footer1 from './footer.vue'

export default {
	components:{
		footer1:footer1
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
.footerUl li img{
	margin-top: 6px;
	width: 30px;
	height: 28px;
}
</style>
