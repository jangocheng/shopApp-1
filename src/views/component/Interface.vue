<template>
  <div id="app">
  	<img src="../../assets/img/logo.png" id="img"/>
   <div id="footer">
   	 <button id="btn1">微信一键登录</button>
			<button id="btn2" @click="login()">登录</button>
			<button id="btn3" @click="enroll()">新用户</button>
			<p id="copy">Copyright @ 2016 logo.com</p>
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
  methods:{
  	login(){
  		this.$router.push('/login')
  	},
  	enroll(){
  		this.$router.push('/enroll')
  	}
  }
}
</script>

<style scoped="scoped">
	*{
		margin: 0;
		padding: 0;
	 font-size: 18px;
	}
#app{
	width: 100%;
	height: 100vh;
	background:url(../../assets/img/主界面.png) no-repeat;
	background-size: 100% 100vh;
	text-align: center;
}
#copy{
	margin-top: 18px;
	font-size: 14px;
	color: white;
}
#footer{
	width: 100%;
	height: 170px;
	position: fixed;
	bottom: 0;
}
button{
	height: 43px;
	border-radius: 6px;
	background: none;
	width: 42%;
	border: 1px solid white;
}
button:hover{
	background: white;
	color: #CE3232;
}
#btn2{
	margin-right: 6%;
	background: white;
	color: #CE3232;
}
#btn1{
	width: 90%;
	background: #00a80c;
	color: white;
	border: 1px solid green;
	margin-bottom: 30px;
}
#img{
	width: 100%;
	height: 99vh;
}
</style>
