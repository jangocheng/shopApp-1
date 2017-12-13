<template>
  <div id="family">
  	<div id="header">
  		<ul>
  			<li>
  				<p class="family1">家庭套装</p>
  			</li>
  			<li>
  				<p class="more">更多实惠 ></p>
  			</li>
  		</ul>
  	</div>
  	<div id="footer">
  		<ul class="ul">
  			<li v-for="data in arr" @click="XiangQing()">
  				<p>{{data.goodsname}}</p>
  				<p><span style="color: #009cff;">￥{{data.parameter}}</span> <s>￥{{data.price}}</s></p>
  				<img :src="data.pic0" class="img"/>
  			</li>
  		</ul>
  	</div>
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
  		this.arr=res.data.homeRecommend
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
#family{
	margin-top: 12px;
	width: 100%;
	height: 210px;
	border-bottom: 1px solid #DDDDDD;
	background: white;
}
#header{
	border-top: 1px solid #DDDDDD;
	width: 100%;
	height: 40px;
	background: white;
}
#header ul{
	display: flex;
	width: 100%;
	height: 40px;
	border-bottom: 1px solid #DDDDDD;
}
#header ul li{
	list-style: none;
	width: 50%;
}
.family1{
	width: 100px;
	border-bottom: 1px solid #009cff;
	height: 40px;
	padding-left: 8px;
	line-height: 40px;
	font-size: 16px;
	color: #009cff;
}
.more{
	height: 40px;
	padding: 0 16px;
	line-height: 40px;
	text-align: right;
	color: #999999;
}
#footer{
	width: 100%;
	height: 210px;
}
.ul{
	display: flex;
	width: 100%;
}
.ul li{
	width: 33.3%;
	padding: 10px;
	border-right:1px solid #DDDDDD ;
	list-style: none;
}
.img{
	width: 75px;
	height: 75px;
	padding: 6px;
}
</style>
