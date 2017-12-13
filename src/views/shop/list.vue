<template>
  <div class="list">
  	<ul id="ul5">
  		<li v-for="data in arr" @click="XiangQing()">
  			<img :src="data.pic0" class="img"/>
  			<p>{{data.goodsname}} <span>￥{{data.price}}.00</span></p>
  			<p>保税区 <s>{{data.parameter}}</s></p>
  		</li>
  	</ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    	arr:[]
    }
  },
  created(){
  	var url="http://114.55.249.153:8028/goods/list"
  	this.$http.get(url).then((res)=>{
  		this.arr=res.data.recommendList
  	})
  },
  methods:{
  	XiangQing(){
  		this.$router.push('/XiangQing')
  	}
  }
}
</script>

<style scoped="scoped">
*{
	margin: 0;
	padding: 0;
}
.list{
	width: 100%;
	padding: 6px;
	background: white;
}
#ul5 li{
	height: 210px;
	width: 100%;
	background: white;
}
.img{
	width: 100%;
	height: 160px;
}
</style>
