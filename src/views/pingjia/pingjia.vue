<template>
  <div id="app">
  	<img1></img1>
  	<pingjia></pingjia>
  </div>
</template>

<script>

import img from '../XiangQing/img.vue'
import pingjia2 from './pingjia2.vue'

export default {
  name: 'app',
  data () {
    return {
     	swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: 1000
      }
    }
  },
  created(){
  	var url="http://114.55.249.153:8028/goods/list"
  	this.$http.get(url).then((res)=>{
  		this.arr=res.data.homeRecommend
  	})
  },
  components:{
  	img1:img,
  	pingjia:pingjia2
  }
}
</script>

<style scoped="scoped">
#app{
	background: #F1F1F1;
}
</style>
