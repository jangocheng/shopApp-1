<template>
  <div id="swiper" style="margin-top: 60px;">
  	<swiper :options="swiperOption" ref="mySwiper">
	    <swiper-slide v-for="data in arr">
	    	<img :src="data.imgpath"/>
	    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
    	arr:[],
     swiperOption:{
     	autoplay: 1000,
     	pagination: '.swiper-pagination',
     	mousewheelControl: true,
     }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  created(){
  	var url="http://114.55.249.153:8028/goods/list"
  	this.$http.get(url).then((res)=>{
  		console.log(res.data)
  		this.arr=res.data.bannerList
  	})
  }
}
</script>

<style scoped="scoped">
#swiper{
	width: 100%;
	height: 12.5rem;/*200px*/
}
img{
	width: 100%;
	height: 12.5rem;
}
</style>
