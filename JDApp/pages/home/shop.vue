<template>
	<view class="content">
		<view class="dingwei">
			<view class="dingwei2">
				<image src="../../static/img/23.png" mode=""></image>
				<text @click="fn">赛博坦星球(当前位置)</text>
			</view>
		</view>
		<view class="gouwuche">
			<view class="gouwuche1">
				<text>口红一号铺</text>
			</view>
			<view class="tupian">
				<image src="../../static/img/5.png" mode=""></image>
			</view>
		</view>
		<view class="gouwuche2">
			<view class="gouwuche3">
				<text>口红一号铺</text>
			</view>
			<view class="tupian2">
				<image src="../../static/img/6.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
				fn(){
				uni.navigateTo({
					url:'../uni-index-list/uni-index-list'
				})
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 1200upx;
		background-color: #F5F5F5;
	}

	.dingwei{
		width: 400upx;
		height: 50upx;
		border: 10upx solid #B4EEB4;
		border-radius: 50upx;
		position: absolute;
		margin-left: 170upx;
		margin-top: 70upx;
	}
	.dingwei2{
		width: 100%;
		height: 100%;
		background-color: #71C671;
		border-radius: 50upx;
	}
	.dingwei2 image{
		width: 35upx;
		height: 35upx;
		position: absolute;
		margin-left: -150upx;
		margin-top: 8upx;
	}
	.dingwei2 text{
		font-size: 30upx;
		color: white;
		position: absolute;
		margin-left: -100upx;
		margin-top: 5upx;
	}
	.gouwuche{
		width: 93%;
		height: 300upx;
		position: absolute;
		margin-left: 30upx;
		margin-top: 170upx;
		background-color: white;
		border-radius: 20upx;
	}
	.gouwuche1{
		width: 100%;
		height: 85upx;
		position: absolute;
		margin-left: 0upx;
		margin-top: 0upx;
		background-color: #9BCD9B;
		border-radius: 20upx 20upx 0 0;
	}
	.gouwuche1 text{
		font-size: 40upx;
		color: white;
		position: absolute;
		margin-left: -330upx;
		margin-top: 15upx;
	}
	.tupian image{
		width: 150upx;
		height: 150upx;
		border-radius: 20upx;
		position: absolute;
		margin-left: -330upx;
		margin-top: 115upx;
	}
	.gouwuche2{
		width: 93%;
		height: 300upx;
		position: absolute;
		margin-left: 30upx;
		margin-top: 520upx;
		background-color: white;
		border-radius: 20upx;
	}
	.gouwuche3{
		width: 100%;
		height: 85upx;
		position: absolute;
		margin-left: 0upx;
		margin-top: 0upx;
		background-color: #9BCD9B;
		border-radius: 20upx 20upx 0 0;
	}
	.gouwuche3 text{
		font-size: 40upx;
		color: white;
		position: absolute;
		margin-left: -330upx;
		margin-top: 15upx;
	}
	.tupian2 image{
		width: 150upx;
		height: 150upx;
		border-radius: 20upx;
		position: absolute;
		margin-left: -330upx;
		margin-top: 110upx;
	}
</style>
