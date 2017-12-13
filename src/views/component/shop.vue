<template>
  <div id="app">
  	<header1></header1>
  	<swiper></swiper>
  	<new1></new1>
  	<week></week>
  	<month></month>
  	<family></family>
  	<tuijian></tuijian>
  	<list></list>
  </div>
</template>

<script>
	 
	 import header from '../shop/header.vue' 
	 import swiper from '../shop/swiper.vue' 
	 import new1 from '../shop/new1.vue' 
	 import week from '../shop/week.vue' 
	 import month from '../shop/month.vue' 
	 import family from '../shop/family.vue' 
	 import tuijian from '../shop/tuijian.vue' 
	 import list from '../shop/list.vue' 
		
export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  components:{
  	header1:header,
  	swiper:swiper,
  	new1:new1,
  	week:week,
  	month:month,
  	family:family,
  	tuijian:tuijian,
  	list:list
  }
}
</script>

<style scoped="scoped">
#app{
	background: #F1F1F1;
}
</style>
