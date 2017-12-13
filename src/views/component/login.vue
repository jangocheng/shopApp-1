<template>
  <div id="app">
  	<div id="header">
			<img src="../../assets/img/login.png"/>
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
					<input type="text" class="inp1" v-model.trim="phone" placeholder="请输入手机号"/>
				</div>
				<div id="p1">
					<input type="password" class="inp2" v-model="password" placeholder="请输入密码"/>
				</div>
				<button id="btn" @click="submit()">登录</button>
				<router-link to='/password1'>
					<p id="forget"> 忘记密码?</p>
				</router-link>
		</div>
  </div>
</template>

<script>
	
		import {LoginByPhone} from '../../api/login'
	
	export default {

	data() {
		return {
			phone: '',
			password: ''
		}
	},

	methods: {
		submit() {
			
			if(this.phone==''){
				this.phone='手机号不能为空'
			}else if(!(/^1[3|4|5|6|7|8][0-9]\d{8}$/.test(this.phone))){
				this.phone='手机号不正确'
			}
			else{
				let options = {
					phone: this.phone,
					password: this.password
				}
				LoginByPhone(options).then((res)=>{
					if(res.data['error_code']==0) {
						this.$store.commit('saveUserInfo',res.data.data)
						console.log('登录成功')
						this.$router.push('/index')
					} else {
						console.log('登录失败')
					}
				})
				
//				let url = 'http://114.55.249.153:8028/login/LoginByPhone'		
//				let params = {
//					phone: this.phone,
//					password: this.password
//				}
//				this.$http.post(url, params, {emulateJSON: true}).then((res) => {
////					let msg = res.data.error_code
//					if(res.data['error_code']==0) {
//						console.log('登录成功')
//						this.$router.push('/shop')
//					} else {
//						console.log('登录失败')
//					}
//				})
//			}
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
#center{
	width: 100%;
	position: relative;
}
.test{
	position: absolute;
	top: 3.1rem;
	left: 22%;
	width: 0;
	height: 0;
	border-right: 10px solid transparent;
	border-bottom: 10px solid white;
	border-left: 10px solid transparent;
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
	outline: none;
	margin-top: 36px;
	width: 80%;
	height: 50px;
	color: #C0C0C0;
	text-align: center;
	border: 0;
	border-bottom: 1px solid #D7D7D7;

}
.inp1{
	background-image:url(../../assets/img/icon4.jpg);
	background-repeat:no-repeat ;
	background-size: 28px;
}
.inp2{
	background-image:url(../../assets/img/icon5.jpg);
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
