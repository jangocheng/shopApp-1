import fetch from '../utils/fetch'

export function selectData(params){
	return fetch({
		url:'/goods/list',
		method:'get',
		params
	})
}

export function getShopInfoById(params){
	return fetch({
		url:'/goods/getModelById',
		method:'get',
		params
	})
}
