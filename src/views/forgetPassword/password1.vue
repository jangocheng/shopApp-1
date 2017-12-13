<template>
  <div id="app">
  	<div id="header">
			<router-link to='/login'>
					<p style="color: white;" id="back">
						<img src="../../assets/img/back.png" id="png"/>
						<span style="padding-left: 22px;">返回</span> 
					</p>
			</router-link>
			<p id="top">找回密码</p>
		</div>
		
		<div id="center">
			<p id="p1">请输入您的手机号码</p>
			
			<input type="text" placeholder="手机号" v-model="phone" class="num"/>
			
		</div>
		
		<div id="footer">
			<button id="btn1" @click="next()">下一步</button>
			<button id="btn2">联系客服</button>
		</div>
  </div>
</template>

<script>

import {fontPassword} from '../../api/login'

export default {
  name: 'app',
  data () {
    return {
     phone:''
    }
  },
  methods:{
  	next(){
  		if(this.phone==''){
  			this.phone='手机号不能为空'
  		}else if(!(/^1[3|4|5|6|7|8][0-9]\d{8}$/.test(this.phone))){
				this.phone='手机号不正确'
			}
  		else{
  			let params={
  				phone:this.phone
  			}
  			fontPassword(params).then((result)=>{
  			
  					if(!result.error_code){
//						  localStorage.setItem('phone',result.data.phone)
							this.$store.commit('saveCode',result.data.code)
//							this.$store.commit('saveCode',result.data.phone)
  						this.$router.push('/password2')
  						console.log(result.data.code)
  					}
  			},(err)=>{
  				console.log(err)
  			})
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
}
#header{
	width: 100%;
	height: 4.375rem;
	background: #ca3232;
	color: white;
	position: relative;
	margin: 0;
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
