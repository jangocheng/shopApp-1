<template>
  <div id="app">
  	<div id="header">
			<router-link to='/password2'>
					<p style="color: white;" id="back">
						<img src="../../assets/img/back.png" id="png"/>
						<span style="padding-left: 22px;">返回</span> 
					</p>
			</router-link>
			<p id="top">找回密码</p>
		</div>
		
		<div id="center">
			<p id="p1">设置新密码</p>
			
			<input type="password" placeholder="新密码" v-model="newpassword" class="num"/>
			<input type="password" placeholder="确认新密码" v-model="surepassword" class="num"/>
			
		</div>
		
		<div id="footer">
				<button id="btn1" :class="{grey:disable}" @click="finish()">完成</button>
		</div>
  </div>
</template>

<script>

import {updatePassword} from '../../api/login'
export default {
  name: 'app',
  data () {
    return {
     	newpassword:'',
      surepassword:'',
      disable:true
    }
  },
  methods:{
  	
  	finish(){
  		
  		if(this.newpassword==''||this.surepassword==''){
  			this.disable=true
  		}else{
  			if(this.newpassword!=this.surepassword){
  				this.disable=true
  				this.newpasswor='两次密码不一样'
  			}else{
  				this.disable=false
  				var  params={
//					phone:this.$store.commit('updatePassword',res.data.phone),
  					password:this.newpasswor
  				}
  				updatePassword(params).then((res)=>{
			  		if(!data.error_code){
			  			
			  		  console.log('修改密码成功：'+this.newpasswor)
			  			this.$router.push('/Interface')
			  		}
			  	},(err)=>{
			  		console.log('密码修改失败')
			  	})
  			}
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
	height: 12.5rem;
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
