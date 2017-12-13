<template>
  <div id="app">
  	<img1></img1>
  	<router-view style="margin-bottom: 60px;"></router-view>
  	<footer1></footer1>
  </div>
</template>

<script>
	 
	 import img1 from '../XiangQing/img.vue'
	 import footer1 from '../XiangQing/footer.vue'
export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  components:{
  	img1:img1,
  	footer1:footer1
  }
}
</script>

<style scoped="scoped">
#app{
	background: #F1F1F1;
}
</style>
