<template>
  <div id="app">
  	<img1></img1>
  	<describe></describe>
  </div>
</template>

<script>
	 
	 import img1 from '../XiangQing/img.vue'
	 import describe from '../XiangQing/describe.vue'
		
export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  components:{
  	img1:img1,
  	describe:describe
  }
}
</script>

<style scoped="scoped">
#app{
	background: #F1F1F1;
}
</style>
