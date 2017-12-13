<template>
  <div id="week">
  	<div id="header">
  		<ul>
  			<li>
  				<p class="week1">本周主打</p>
  			</li>
  			<li>
  				<p class="more">更多主打 ></p>
  			</li>
  		</ul>
  	</div>
  	
  	<div id="footer">
  		<ul class="ul">
  			<li v-for="data in arr" @click="XiangQing()">
  				<div id="left" style="float: left; width: 60%;;">
  					<p>{{data.goodsname}}</p>
  				  <p class="description">{{data.description}}</p>
  				</div>
  				<div id="right" style="width: 40%;float: right;">
  					<img :src="data.pic0" class="img1"/>
  				</div>
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
  		console.log(res.data)
  		this.arr=res.data.weekRecommend
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
#week{
	margin-top: 12px;
	width: 100%;
	height: 17.5rem;
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
.week1{
	width: 100px;
	border-bottom: 1px solid #CE3232;
	height: 40px;
	padding-left: 8px;
	line-height: 40px;
	font-size: 16px;
	color: #CA3232;
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
	height: 250px;
}
.img1{
	width: 80px;
	height: 60px;
}
.ul{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
}
.ul li{
	padding: 16px;
	list-style: none;
	width: 50%;
	height: 125px;
	border-bottom: 1px solid #DDDDDD;
	border-right:1px solid #DDDDDD ;
}
.description{
	color: darkorange;
}
</style>
