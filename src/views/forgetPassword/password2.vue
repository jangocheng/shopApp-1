<template>
  <div id="app">
  	<div id="header">
			<router-link to='/password1'>
					<p style="color: white;" id="back">
						<img src="../../assets/img/back.png" id="png"/>
						<span style="padding-left: 22px;">返回</span> 
					</p>
			</router-link>
			<p id="top">找回密码</p>
		</div>
		
		<div id="center">
			<p id="p1">短信验证码已发送，请输入验证码</p>
			
			<input type="text" placeholder="验证码" v-model.number="inpCode" class="num"/>
			
		</div>
		
		<div id="footer">
					<button id="btn1" @click="next()">下一步</button>
		    	<p id="p2">28’后重新发送</p>
		</div>
  </div>
</template>

<script>


export default {
  name: 'app',
  data () {
    return {
     code:'',
     inpCode:''
    }
  },
   created(){
// 		this.code=localStorage.getItem('code')
			this.code=this.$store.state.code

   },
  methods:{
    	next(){
    		if(this.inpCode===this.code){
    			this.$router.push('/password3')
    		}
    	}
    }
}
</script>

<style scoped="scoped">
*{
	margin: 0;
	padding: 0;
}
#png{
	width: 20px;
  height: 26px;
  position: absolute;
  margin: 0;
}
#header{
	width: 100%;
	height: 4.375rem;
	background: #ca3232;
	color: white;
	position: relative;
}
#top{
	text-align: center;
  line-height: 5.6rem;
  font-size: 18px;
}
#back{
	position: absolute;
	margin-top: 30px;
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
	outline: none;
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
#p2{
	color: #CE3232;
	margin-top: 12px;
}
</style>
