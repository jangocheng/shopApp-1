<template>
  <div id="app">
  	<div id="header">
			<img src="../../assets/img/enroll.png"/>
				<router-link to='/Interface'>
					<p id="back" style="color: white;"> < 返回</p>
				</router-link>
		</div>
		
		<div id="center">
			<div class="test"></div>
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
				<div id="p1">
					<input type="text" class="inp1" v-model.trim="phone" placeholder="请输入您的手机号" />
				</div>
				<div id="p1" style="position: relative;">
					<input type="text" class="inp2" v-model.number="inpCode" placeholder="请输入验证码"/>
					<button @click="getCode()" class="btn" :disabled="!show">
						 <span v-show="show">获取验证码</span>
             <span v-show="!show" class="count">{{count}}s</span>
					</button>
				</div>
				<div id="p1">
					<input type="password" class="inp3" v-model="password" placeholder="请输入密码"/>
				</div>
				<div id="p1">
					<input type="password" class="inp4" v-model="surepwd" placeholder="确认密码"/>
				</div>
				<button id="btn" @click="enroll()">注册</button>
		</div>
  </div>
</template>

<script>
const TIME_COUNT = 60;

import {sendCode,regWithPhone} from '../../api/login'

export default {
  name: 'app',
  data() {
			 return {
			 	show: true,
			 	count: '',
			 	phone:'',
			 	inpCode:'',
			 	password:'',
			 	surepwd:'',
		   }
		   
		},
// created(){
// 		this.code=localStorage.getItem('code')
// },
		methods:{
			enroll(){
				
					if(this.phone==''&&this.password==''&&this.surepwd==''&&this.inpCode==''){
						this.phone='手机号不能为空'
						this.password=''
						this.surepwd=''
						this.inpCode='验证码不能为空'
					}else if(!(/^1[3|4|5|6|7|8][0-9]\d{8}$/.test(this.phone))){
						this.phone='手机号不正确'
					}else if(this.inpCode!=this.code){
						this.inpCode='验证码不正确'
					}else{
							 if(this.inpCode===this.code){
								let params={
									phone:this.phone,
									password:this.password
							}
							
							regWithPhone(params).then((res)=>{
								if(res.data['error_code']==0){
									console.log('注册成功')
									this.$router.push('/Interface')
								}else{
									console.log(this.inpCode)
									console.log(this.code)
									console.log('注册失败')
								}
							})
						}
					}


				
//					else{
//						let params={
//								phone:this.phone,
//								password:this.password
//						}
//						
//						regWithPhone(params).then((res)=>{
//							if(res.data['error_code']==0){
//								console.log('注册成功')
//								this.$router.push('/Interface')
//							}else{
//								console.log(this.inpCode)
//								console.log(this.code)
//								console.log('注册失败')
//							}
//						})
//				}
			},
			getCode(){
				
				if(!(/^1[3|4|5|6|7|8][0-9]\d{8}$/.test(this.phone))){
					this.phone='手机号不正确'
				}else{
					 let params={
							phone:this.phone
						}
	        sendCode(params).then((res)=>{
	        	
	        	if(!res.error_code){
						localStorage.setItem('code',res.data.code)
						this.code=localStorage.getItem('code')
						console.log(res)
					}
	        	
	        		this.count = TIME_COUNT;
				        this.show = false;
				        setInterval(() => {
				          if (this.count > 0 && this.count <= TIME_COUNT) {
				            this.count--;
				          } else {
				            this.show = true;
				          }
				        }, 1000)
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
	height: 230px;
}
#header img{
	width: 100%;
	height: 100%;
}
.btn{
	position: absolute;
	width: 100px;
	height: 35px;
	line-height: 35px;
	border: 2px solid #C0C0C0;
	color: #C0C0C0;
	right: 10%;
	top: 20px;
	background: white;
	border-radius: 6px;
}
.test{
	position: absolute;
	top: 3.1rem;
	right: 22%;
	width: 0;
	height: 0;
	border-right: 10px solid transparent;
	border-bottom: 10px solid white;
	border-left: 10px solid transparent;
}
#center{
	position: relative;
	width: 100%;
}
#center ul{
	display: flex;
	background: #f3f3f3;
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
}
input{
	outline: none;
	margin-top: 18px;
	width: 80%;
	height: 50px;
	color: #C0C0C0;
	padding-left: 50px;
	border: 0;
	border-bottom: 1px solid #D7D7D7;
}
.inp1{
	background-image:url(../../assets/img/icon4.jpg);
	background-repeat:no-repeat ;
	background-size: 28px;
}
.inp2{
	background-image:url(../../assets/img/icon3.jpg);
	background-repeat:no-repeat ;
	background-size: 28px;
}
.inp3{
	background-image:url(../../assets/img/icon2.jpg);
	background-repeat:no-repeat ;
	background-size: 28px;
}
.inp4{
	background-image:url(../../assets/img/icon1.jpg);
	background-repeat:no-repeat ;
	background-size: 28px;
}
#footer{
	text-align: center;
}
#btn{
	margin-top: 1.875rem;
	width: 80%;
	height: 3.35rem;
	background: #ce3232;
	border: 1px solid red;
	border-radius: 10px 10px 10px 10px ;
	color: white;
}
</style>
