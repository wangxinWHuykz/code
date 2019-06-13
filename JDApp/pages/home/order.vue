<template>
	<view class="content">
		
		<view class="title1">
			<text class="title">{{title}}</text>
			<image src="../../static/img/gg.png" mode="" class="dog"></image>
			<button type="primary" class="anniu" @click="fn">去逛逛</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '您还没有订单记录哦，赶紧去逛逛吧'
			}
		},
		onLoad() {

		},
		methods: {
			fn(){
				uni.reLaunch({
					url:'first'
				})
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}
	.title{
		font-size: 35upx;
		color: #8E8E8E;
		position: absolute;
		margin-left: -260upx;
		margin-top: 700upx;
	}
	.dog{
		width: 250upx;
		height: 250upx;
		position: absolute;
		margin-left: -120upx;
		margin-top: 300upx;
	}
	.anniu{
		width: 160upx;
		height: 70upx;
		position: absolute;
		margin-left: 280upx;
		margin-top: 600upx;
		font-size: 32upx;
		line-height: 70upx;
	}
</style>
