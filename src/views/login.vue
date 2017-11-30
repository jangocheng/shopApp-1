<template>
  <div id="app">
  	<div id="header">
			<img src="../assets/login.png"/>
			<router-link to='/Interface'>
					<p id="back" style="color: white;"> < 返回</p>
			</router-link>
		</div>
		
		<div id="center">
			<ul>
				<li>
					<router-link to='/login'>
						<span class="span1">登录</span>
					</router-link>
				</li>
				<li>
					<router-link to='/enroll'>
						<span class="span1">注册</span>
					</router-link>
				</li>
			</ul>
		</div>
		
		<div id="footer" >
			<form action="" method="post">
				<div id="p1">
					<input type="text"  class="inp1" placeholder="请输入手机号"/>
				</div>
				<div id="p1">
					<input type="text" class="inp2" placeholder="请输入密码"/>
				</div>
				<button id="btn">登录</button>
				<router-link to='/password1'>
					<p id="forget"> 忘记密码?</p>
				</router-link>
				
			</form>
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
#back{
	font-size: 16px;
	position: fixed;
	top: 3%;
	left: 5%;
}
.span1{
	color: gray;
}
#header{
	width: 100%;
	height: 220px;
}
#header img{
	width: 100%;
	height: 100%;
}
#center{
	width: 100%;
}
#center ul{
	display: flex;
	background: #EBEEF3;
}
#center ul li{
	width: 100%;
	list-style: none;
}
#center ul li{
	text-align: center;
	line-height: 3.75rem;
	color: darkgray;
	text-decoration: none;
	width: 50%;
}
input{
	margin-top: 36px;
	width: 80%;
	height: 50px;
	color: #C0C0C0;
	text-align: center;
	border: 0;
	border-bottom: 1px solid #D7D7D7;

}
.inp1{
	background-image:url(../assets/4.jpg);
	background-repeat:no-repeat ;
	background-size: 28px;
}
.inp2{
	background-image:url(../assets/5.jpg);
	background-repeat:no-repeat ;
	background-size: 28px;
}
#footer{
	text-align: center;
}
#btn{
	margin-top: 3.125rem;
	width: 80%;
	height: 3.35rem;
	background: #ce3232;
	border: 1px solid red;
	border-radius: 10px 10px 10px 10px ;
	color: white;
}
#forget{
	margin-top: 1.325rem;
	color: dimgrey;
}
</style>
