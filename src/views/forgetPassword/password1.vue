<template>
  <div id="app">
  	<div id="header">
			<router-link to='/login'>
					<p style="color: white;" id="back"> < 返回</p>
			</router-link>
			<p id="top">找回密码</p>
		</div>
		
		<div id="center">
			<p id="p1">请输入您的手机号码</p>
			
			<input type="number" placeholder="手机号" class="num"/>
			
		</div>
		
		<div id="footer">
			<router-link to="/password2">
				  <button id="btn1">下一步</button>
			</router-link>
			<button id="btn2">联系客服</button>
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
#header{
	width: 100%;
	height: 3.875rem;
	background: #ca3232;
	color: white;
	position: relative;
}
#top{
	text-align: center;
  line-height: 4rem;
  font-size: 18px;
}
#back{
	position: absolute;
	margin-top: 20px;
	left: 5%;
	font-size: 16px;
}

#center{
	text-align: center;
	margin-top: 60px;
	width: 100%;
	height: 9.375rem;
}
#p1{
	text-align: center;
	font-size: 20px;
}
.num{
	margin-top: 26px;
	width: 90%;
	height: 60px;
	color: #C0C0C0;
	text-align: center;
	border: 0;
	border-bottom: 1px solid #D7D7D7;
}
#footer{
	width: 100%;
	height: 200px;
	text-align: center;
}
#footer input{
	width: 80%;
	margin: 12px 0;
	height: 50px;
	border: 2px solid #ca3232;
	border-radius: 8px;
}
button{
	width: 80%;
	margin: 12px 0;
	height: 50px;
	border: 2px solid #ca3232;
	border-radius: 8px;
}
#btn1{
	background: #CE3232;
	color: white;
}
#btn2{
	background: white;
	color: #CE3232;
}
</style>
