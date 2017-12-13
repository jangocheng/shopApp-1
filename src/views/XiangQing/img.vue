<template>
  <div class="img">
  	<p id="back" @click="back()"> <&nbsp;返回 </p>
  	
  	<div class="banner" >
			<swiper :options="swiperOption" ref ='mySwiper'>
				<swiper-slide v-for="data in obj.monthRecommend" :key="data.id"><img :src="data.pic1"></swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
    </div>
    
  		<ul class="ul">
  			<li>
  				<div id="left">
  					<img src="../../assets/XiangQing/Xicon1.png" class="img1"/>
  				</div>
  				<div id="right">
  					<p>100%</p>
  					<p>正品保证</p>
  				</div>
  			</li>
  			<li>
  				<div id="left">
  					<img src="../../assets/XiangQing/Xicon2.png" class="img1"/>
  				</div>
  				<div id="right">
  					<p>100%</p>
  					<p>日本直供</p>
  				</div>
  			</li>
  			<li>
  				<div id="left">
  					<img src="../../assets/XiangQing/Xicon3.png" class="img1"/>
  				</div>
  				<div id="right">
  					<p>7天</p>
  					<p>无理由退货</p>
  				</div>
  			</li>
  		</ul>
  		<div id="describe">
  			<ul id="ul">
  				<li>
  					<p>Pill box KAORU香体丸 玫瑰+香草20粒</p>
  			    <p>
  			    	<img src="../../assets/XiangQing/listen.png"/>
  			    	<span style="display: block;margin-top: -6px;color: grey;">客服</span>
  			    </p>
  				</li>
  			</ul>
  			<p class="price">￥219.00</p>
  			<p style="color: gray;">市场价 <s>￥596.00</s></p>
  			<ul id="ul2">
  				<li>运费 ￥25</li>
  				<li>销量 2046</li>
  				<li><span class="border">保税区</span></li>
  			</ul>
  		</div>
  		<ul class="ul1" style="margin-top: 20px;">
					<li>
						<router-link to="/XiangQing/describe"><p>商品详情</p></router-link>
					</li>
					<li>
						<router-link to="/XiangQing/pingjia"><p>评价(156)</p></router-link>
					</li>
					<li>
						<router-link to="/XiangQing/params"><p>规格参数</p></router-link>
					</li>
			</ul>
  </div>
</template>

<script>
		import { selectData } from '../../api/shop'
export default {
  name: 'app',
  data () {
    return {
     	obj:{
     		monthRecommend:[]
     	},
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
  	selectData(this.listQuery).then(res=>{
  		console.log(res.data)
  		this.obj=res.data
  	})
  },
  methods:{
  	back(){
  		this.$router.push('/index/shop')
  	}
  }
}
</script>

<style scoped="scoped">
*{
	margin: 0;
	padding: 0;
}
.img{
	width: 100%;
	height: 560px;
}
.banner{
	height: 260px;
  position: relative;
  background: white;
}
.swiper-slide{
	width: 100%;
	height: 260px;
}
.banner img{
	width: 100%;
}
#back{
	 position: absolute;
	 top: 3%;
	 left: 5%;
	 color: red;
	 z-index: 100;
}
.ul{
	height: 50px;
	background: #F9F9F9;
	display: flex;
	width: 100%;
	border-top: 1px solid #DDDDDD;
	margin-top: 4px;
}
.ul li{
	padding-top: 4px;
	width: 33.3%;
	list-style: none;
}
#left{
	float: left;
	padding-left: 10px;
	padding-right: 6px;
}
.img1{
	width: 42px;
	height: 40px;
}
#right{
	color: #CE3232;
	font-size: 12px;
}
#right p:nth-child(1){
	margin-top: 4px;
}
#describe{
	width: 100%;
	height: 180px;
	padding: 0 12px;
	background: white;
}
#ul li{
	list-style: none;
	display: flex;
	width: 100%;
	height: 50px;
	margin-top: 6px;
}
#ul li p:nth-child(1){
	width: 80%;
	border-right: 1px solid #DDDDDD;
	font-size: 20px;
}
#ul li p:nth-child(2){
	width: 20%;
	text-align: center;
}
.price{
	font-size: 28px;
	color: #ff7200;
	margin-top: 10px;
}
#ul2{
	width: 100%;
	height: 40px;
	line-height: 40px;
	display: flex;
	border-top: 1px solid #DDDDDD;
	margin-top: 10px;
}
#ul2 li{
	color: #BBBBBB;
	list-style: none;
	width: 30%;
	text-align: center;
}
#ul2 li:nth-child(2){
	width: 40%;
}
.border{
	border: 1px solid #f38873;
	color: #F38873;
	padding: 2px 8px;
	border-radius: 4px 4px 4px 4px ;
}
.ul1{
	display: flex;
	width: 100%;
	height: 40px;
	line-height: 40px;
	background: white;
	border-bottom: 1px solid #DDDDDD;
}
.ul1 li{
	width: 33.3%;
	list-style: none;
	text-align: center;
}
.ul1 li p{
	color: #666666;
}
.ul1 li:hover{
	color: #CE3232;
	border-bottom: 2px solid #CA3232;
}
</style>
