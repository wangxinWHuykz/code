<template>
	<view class="content">
		<!-- 头部 -->
		<view class="header">
			<image src="../../static/img/47.png" mode="" class="shezhi"></image>
			<image src="../../static/img/55.png" mode="" class="xinxi"></image>
			<view class="touxiang">
				<image src="../../static/img/dwqm2.jpeg" class="touxiang2"></image>
				<image src="../../static/img/61.png" mode="" class="zuanshi"></image>
			</view>
			<view class="nicheng">
				<text>用户名</text>
			</view>
			<view class="tel">
				<text>183xxxxxxxx</text>
				<image src="../../static/img/28.png" class="gaixie"></image>
			</view>
		</view>
		<!-- 中间部分 -->
		<view class="zhongjian">
			<view class="qianbao1">
				<image src="../../static/img/46.png" mode="" class="qianbao"></image>
				<text class="myqinabo">我的钱包</text>
			</view>
			<view class="hongbao">
				<text class="ling">0</text>
				<text class="hongbao2">红包</text>
			</view>
			<view class="youhuijuan">
				<text class="yi">1</text>
				<text class="youhuijuan2">优惠卷</text>
			</view>
			<view class="xiandou">
				<text class="shiliu">16</text>
				<text class="xiandou2">仙豆</text>
			</view>
			<view class="baitiao">
				<text class="wulingwu">0</text>
				<text class="baitiao2">白条</text>
			</view>
		</view>
		<!-- lunbotu -->
	       
        
                <view class="page-section-spacing">
                    <swiper class="swiper" :autoplay="true" :interval="1000" :duration="500" :circular="true">
                        <swiper-item>
                            <view class="uni-bg-red">
								<image src="../../static/img/IMG_5557.JPG" mode=""></image>
							</view>
                        </swiper-item>
                        <swiper-item>
                            <view class="uni-bg-green">
								<image src="../../static/img/IMG_5558.JPG" mode=""></image>
							</view>
                        </swiper-item>
                    </swiper>
                </view>
      
       
		
		
		<view class="liebiao">
			<view class="status" v-for="(item,index) in status" :key="item.index" @click="fn1(index)">
				<image class="icon" :src="item.url" mode="aspectFill"></image>
				<text>{{item.name}}</text>
			</view>
		</view>
		<view class="liebiao2">
			<view class="status2" v-for="(item,index) in status2" :key="item.index" @click="fn(index)">
				<image class="icon2" :src="item.url" mode="aspectFill"></image>
				<text>{{item.name}}</text>
			</view>
		</view>
		<view class="liebiao3">
			<view class="status3" v-for="item in status3" :key="item.index">
				<image class="icon3" :src="item.url" mode="aspectFill" ></image>
				<text>{{item.name}}</text>
			</view>
		</view>
		<view class="liebiao4">
			<view class="liebiao5">
				<image src="../../static/img/60.png" mode="" class="tu1"></image>
				<text class="tu4">金融权益</text>
			</view>
			<view class="liebiao6">
				<image src="../../static/img/35.png" mode="" class="tu2"></image>
				<text class="tu5">掌生有礼</text>
			</view>
			<view class="liebiao7">
				<image src="../../static/img/59.png" mode="" class="tu3"></image>
				<text class="tu6">浦发有礼</text>
			</view>
		</view>
	</view>
</template>

<script>
	// import lunbotu from '../../components/jing-swiper/lunbotu.vue'
	export default {
		// components:{lunbotu},
		data() {
			return {
				status: [{
						key: 1,
						name: '我的关注',
						url: '../../static/img/54.png'
					},
					{
						key: 2,
						name: '我的评价',
						url: '../../static/img/43.png'
					},
					{
						key: 3,
						name: '我的地址',
						url: '../../static/img/24.png'
					},
					{
						key: 4,
						name: '我的卡包',
						url: '../../static/img/38.png'
					}
				],
				status2: [{
						key: 1,
						name: '红包套餐',
						url: '../../static/img/33.png'
					},
					{
						key: 2,
						name: '我的奖励金',
						url: '../../static/img/17.png'
					},
					{
						key: 3,
						name: '签到有惊喜',
						url: '../../static/img/44.png'
					},
					{
						key: 4,
						name: '退款/售后',
						url: '../../static/img/19.png'
					}
				],
				status3: [{
						key: 1,
						name: '客服反馈',
						url: '../../static/img/39.png'
					},
					{
						key: 2,
						name: '帮助中心',
						url: '../../static/img/18.png'
					},
					{
						key: 3,
						name: '配送员注册',
						url: '../../static/img/58.png'
					},
					{
						key: 4,
						name: '达达同城送',
						url: '../../static/img/42.png'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			fn(index){
			if(index==2){
				uni.showToast({
					title:'签到成功'
				});
				uni.navigateTo({
					url:'../demo/index'
				});
			}	
			},
			fn1(index){
				if(index==2){
					uni.navigateTo({
						url:'../uni-index-list/uni-index-list'
					});
				}
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;

	}

	.header {
		background-color: limegreen;
		width: 100%;
		height: 280upx;
		margin: 0px;
		padding: 0px;
		justify-content: center;
	}

	.shezhi {
		position: absolute;
		height: 40upx;
		width: 40upx;
		margin-left: -350upx;
		margin-top: 50upx;
	}

	.touxiang {
		display: flex;
		align-items: center;
		position: absolute;
		margin-left: 20upx;
		margin-top: 130upx;
	}

	.touxiang2 {
		height: 100upx;
		width: 100upx;
		border-radius: 50%;
		border: 2px solid #FFFFFF;
	}

	.zuanshi {
		position: absolute;
		margin-left: 230upx;
		margin-top: -20upx;
		height: 35upx;
		width: 35upx;
	}

	.nicheng {
		font-size: 28upx;
		color: #FFFFFF;
		position: absolute;
		margin-left: 150upx;
		margin-top: 140upx;
	}

	.tel {
		color: #FFFFFF;
		font-size: 32upx;
		position: absolute;
		margin-left: 150upx;
		margin-top: 185upx;
	}

	.gaixie {
		height: 40upx;
		width: 40upx;
		position: absolute;
		margin-left: 20upx;
		margin-top: 5upx;
	}

	.xinxi {
		height: 40upx;
		width: 40upx;
		position: absolute;
		margin-left: 300upx;
		margin-top: 50upx;
	}

	.zhongjian {
		width: 100%;
		height: 100upx;
		background-color: #FFFFFF;
		position: absolute;
		margin-left: 0upx;
		margin-top: 10upx;
		border-bottom: 20upx solid #EAEAEA;
	}

	.qianbao {
		width: 60upx;
		height: 60upx;
		position: absolute;
		margin-left:-330upx;
		margin-top: 0upx;
	}

	.myqinabo {
		font-size: 25upx;
		position: absolute;
		margin-left:-345upx;
		margin-top: 65upx;
		color: grey;
	}

	.ling {
		font-size: 33upx;
		position: absolute;
		margin-left:-170upx;
		margin-top: 5upx;
		color: black;
		font-weight: bold;
	}

	.hongbao2 {
		font-size: 25upx;
		position: absolute;
		margin-left:-185upx;
		margin-top: 65upx;
		color: grey;
	}

	.yi {
		font-size: 33upx;
		position: absolute;
		margin-left:-35upx;
		margin-top: 5upx;
		color: black;
		font-weight: bold;
	}

	.youhuijuan2 {
		font-size: 25upx;
		position: absolute;
		margin-left:-60upx;
		margin-top: 65upx;
		color: grey;
	}

	.shiliu {
		font-size: 33upx;
		position: absolute;
		margin-left: 100upx;
		margin-top: 5upx;
		color: black;
		font-weight: bold;
	}

	.xiandou2 {
		font-size: 25upx;
		position: absolute;
		margin-left: 100upx;
		margin-top: 65upx;
		color: grey;
	}

	.wulingwu {
		font-size: 33upx;
		position: absolute;
		margin-left: 260upx;
		margin-top: 5upx;
		color: black;
		font-weight: bold;
	}

	.baitiao2 {
		font-size: 25upx;
		position: absolute;
		margin-left: 250upx;
		margin-top: 65upx;
		color: grey;
	}

	.liebiao {
		display: flex;
		justify-content: space-between;
		margin-top: 25upx;
		border-bottom: 3upx solid #EAEAEA;
		height: 120upx;
	}

	.status {
		width: 180upx;
		font-size: 24upx;
		text-align: center;
		letter-spacing: .5px;
		display: flex;
		flex-direction: column;

	}

	.icon {
		width: 50upx;
		height: 50upx;
		margin: 0 auto;
		margin-bottom: 5px;
	}

	.liebiao2 {
		display: flex;
		justify-content: space-between;
		margin-top: 30upx;
		border-bottom: 3upx solid #EAEAEA;
		height: 120upx;
	}

	.status2 {
		width: 180upx;
		font-size: 24upx;
		text-align: center;
		letter-spacing: .5px;
		display: flex;
		flex-direction: column;

	}

	.icon2 {
		width: 50upx;
		height: 50upx;
		margin: 0 auto;
		margin-bottom: 5px;
	}

	.liebiao3 {
		display: flex;
		justify-content: space-between;
		margin-top: 30upx;
		border-bottom: 3upx solid #EAEAEA;
		height: 120upx;
	}

	.status3 {
		width: 180upx;
		font-size: 24upx;
		text-align: center;
		letter-spacing: .5px;
		display: flex;
		flex-direction: column;

	}

	.icon3 {
		width: 50upx;
		height: 50upx;
		margin: 0 auto;
		margin-bottom: 5px;
	}

	


	.tu1 {
		width: 50upx;
		height: 50upx;
		position: absolute;
		margin-left: 70upx;
		margin-top: 40upx;
	}
	.tu2 {
		width: 50upx;
		height: 50upx;
		position: absolute;
		margin-left: 252upx;
		margin-top: 40upx;
	}
	.tu3 {
		width: 50upx;
		height: 50upx;
		position: absolute;
		margin-left: 440upx;
		margin-top: 30upx;
	}
	.tu4 {
		width: 100upx;
		position: absolute;
		margin-left: 40upx;
		margin-top: 100upx;
	}

	.tu5 {
		width: 100upx;
		position: absolute;
		margin-left: 230upx;
		margin-top: 100upx;
	}

	.tu6 {
		width: 100upx;
		position: absolute;
		margin-left: 420upx;
		margin-top: 90upx;
	}

	.liebiao5 {
		width: 140upx;
		font-size: 24upx;
		text-align: center;
		letter-spacing: .5px;
		display: flex;
		flex-direction: column;
		position: absolute;
		
	}

	.liebiao6 {
		width: 140upx;
		font-size: 24upx;
		text-align: center;
		letter-spacing: .5px;
		display: flex;
		flex-direction: column;
		position: absolute;
		
	}

	.liebiao7 {
		width: 140upx;
		font-size: 24upx;
		text-align: center;
		letter-spacing: .5px;
		display: flex;
		flex-direction: column;
		position: absolute;
		margin-left: 0upx;
		margin-top: 10upx;
	}
	.page-section-spacing{
		height: 170upx;
		width: 100%;
		margin-left: 0upx;
		margin-top: 120upx;
	}
	.uni-bg-red image{
		height: 140upx;
		width: 100%;
		margin-top: 10upx;
	}
	.uni-bg-green image{
		height: 140upx;
		width: 100%;
		margin-top: 10upx;
	}
	.swiper{
		height: 170upx;
		width: 100%;
	}
</style>
