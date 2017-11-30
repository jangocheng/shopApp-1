<template>
  <div id="app">
  	<div id="header">
			<router-link to='/password2'>
					<p style="color: white;" id="back"> < 返回</p>
			</router-link>
			<p id="top">找回密码</p>
		</div>
		
		<div id="center">
			<p id="p1">设置新密码</p>
			
			<input type="password" placeholder="新密码" value="" class="num"/>
			<input type="password" placeholder="确认新密码" value="" class="num"/>
			
		</div>
		
		<div id="footer">
			<router-link to="/Interface">
			   <input type="button" id="btn1" value="完成" />
		  </router-link>
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
  methods(){
  	
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
	height: 12.5rem;
}
#p1{
	text-align: center;
	font-size: 20px;
}
.num{
	margin-top: 26px;
	width: 90%;
	height: 50px;
	color: #C0C0C0;
	text-align: center;
	border: 0;
	border-bottom: 1px solid #D7D7D7;
}
#footer{
	width: 100%;
	height: 200px;
	text-align: center;
	margin-top: 20px;
}

#btn1{
	background: #CE3232;
	color: white;
	width: 80%;
	margin: 12px 0;
	height: 50px;
	border: 2px solid #ca3232;
	border-radius: 8px;
}

</style>
