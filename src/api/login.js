
import fetch from '../utils/fetch'
//登录
export function LoginByPhone(data){
	return fetch({
    url: '/login/LoginByPhone',
    method: 'post',
    data
})
}
//获取验证码
export function sendCode(data){
	return fetch({
    url: '/login/sendCode',
    method: 'post',
    data
  })
}

//注册账号
export function regWithPhone(data){
	return fetch({
    url: '/login/regWithPhone',
    method: 'post',
    data
  })
}

//找回密码
export function fontPassword(data){
	return fetch({
    url: '/login/findPasswordByPhone',
    method: 'post',
    data
  })
}
//设置新密码
export function updatePassword(data){
	return fetch({
    url: '/login/newPasswordByPhone',
    method: 'post',
    data
  })
}


