<template>
  <div class="header">
  	<input type="text" placeholder="Q搜索你喜欢的商品、店铺"/>
  	<img src="../../assets/shop/inp-right.jpg" id="img2"/>
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
.header{
	width: 100%;
	height: 60px;/*70px*/
	background: #CE3232;
	position: fixed;
	top: 0;
	z-index: 100;
}
#img1{
	width: 40px;
	height: 30px;
	position: absolute;
	top: 16px;
	left: 2%;
}
#img2{
	position: absolute;
	top: 16px;
	right: 2%;
	width: 34px;
	height: 32px;
}
input{
	padding-left: 20px;
	background: #a22828;
	color: gainsboro;
	width: 70%;
	height: 36px;
	margin-left: 13%;
	margin-top: 16px;
	border: 1px solid #CE3232;
	border-radius: 6px;
}

</style>
