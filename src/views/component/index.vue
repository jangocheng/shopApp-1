<template>
  <div id="index">
    <keep-alive>
    	<router-view></router-view>
    </keep-alive>
    <div id="empty">
    	
    </div>
    <footer1></footer1>
  </div>
</template>

<script>
import footer1 from './footer.vue'

export default {
	components:{
		footer1:footer1
	}
}
</script>

<style scoped="scoped">
*{
	margin: 0;
	padding: 0;
}
#empty{
	height: 60px;
}
</style>
