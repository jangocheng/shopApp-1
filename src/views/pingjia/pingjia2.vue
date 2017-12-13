<template>
  <div id="pingjia" style="margin-top: 20px">
  	<ul class="ul1">
			<li @click="xiangqing()">商品详情</li>
			<li style="border-bottom: 2px solid #CA3232;color: #CA3232;">评价(156)</li>
			<li>规格参数</li>
		</ul>
		<ul class="ul2">
			<li>
				<p>
					<img src="../../assets/XiangQing/icon10.png"/>
					<span>小嘿嘿</span>
				</p>
				<p>款式很好看，版型好，料子还可以，这个价位来说确实听听好的</p>
				<p class="gray">2015-12-15</p>
				<img src="../../assets/XiangQing/icon11.png"/>
			</li>
			<li>
				<p>
					<img src="../../assets/XiangQing/icon10.png"/>
					<span>小嘿嘿</span>
				</p>
				<p>款式很好看，版型好，料子还可以，这个价位来说确实听听好的</p>
				<p class="gray">2015-12-15</p>
				<img src="../../assets/XiangQing/icon11.png"/>
			</li>
		</ul>
  </div>
</template>

<script>


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
  methods:{
  	xiangqing(){
  		this.$router.push('/XiangQing')
  	}
  },
  created(){
  	var url="http://114.55.249.153:8028/goods/list"
  	this.$http.get(url).then((res)=>{
  		this.arr=res.data.homeRecommend
  	})
  }
}
</script>

<style scoped="scoped">
*{
	margin: 0;
	padding: 0;
}
#pingjia{
	background: white;
}
.ul1{
	display: flex;
	width: 100%;
	height: 40px;
	line-height: 40px;
	border-bottom: 1px solid #DDDDDD;
}
.ul1 li{
	width: 33.3%;
	list-style: none;
	text-align: center;
	color: #666666;
}
.ul2 li{
	width: 100%;
	height: 230px;
	padding: 12px;
	border-bottom: 1px solid #DDDDDD;
}
.gray{
	color: #B1B1B1;
}
</style>
