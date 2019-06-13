<template>
	<view class="content">
		<view class="beijing">
			<image src="../../static/img/bj1.png" mode=""></image>
		</view>
		<!-- 上部关注部分 -->
		<view class="header">
			<image src="../../static/img/21.png" mode="" class="chongwu"></image>
			<text class="chongwu2">关注门店，获取更多优惠信息~</text>
		</view>
		<!-- 热门动态 -->
		<view class="fujin">
			<text class="fujin2">附近热门动态</text>
		</view>
		<!-- 商店 -->
		<view class="shangdian">
			<view class="touxiang">
				<image src="../../static/img/6583E5AD5C52C8CC81A9B916007D2646.png" mode=""></image>
				<text class="touxiang2">❤欣芒一号店(火星店)</text>
				<text class="touxiang5">1小时前</text>
				<view class="touxiang3">
				<text class="touxiang4">关注</text>
				</view>
			</view>
			<view class="jieshao">
				<text class="jieshao2">
					 爱你所爱的人，温柔地对待一切，不要因不幸而怨恨和悲戚，无论前途怎样凶险，都要微笑着站定，一颗平常心，不恐惧，不逃避。
				</text>
				<image src="../../static/img/9FC7A75FA40D94109490C834AB1AB967.png" mode="" class="jieshao3"></image>
				<image src="../../static/img/1124FDE02D72749178AF4958C4186030.png" mode="" class="jieshao4"></image>
				<image src="../../static/img/8BC4D66202E2C210CB15A02F91E2A990.png" mode="" class="jieshao5"></image>
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

		}
	}
</script>

<style>
	
	.beijing image{
		margin-left: 0upx;
		margin-top: -90upx;
		z-index: -5;
		width: 100%;
		height:1070upx;
	}
	
	.header{
		width: 93%;
		height: 330upx;
		background-color: #B4EEB4;
		 position: absolute;
		/* float: left; */
		margin-left: 25upx;
		margin-top: -960upx;
		border-radius: 20upx;
	}
	.chongwu{
		position: absolute;
		width: 200upx;
		height: 200upx;
		margin-left: 245upx;
		margin-top: -5upx;
	}
	.chongwu2{
		position: absolute;
		font-size: 40upx;
		color: white;
		margin-left: 65upx;
		margin-top: 200upx;
	}
	.fujin2{
		position: absolute;
		font-size: 55upx;
		color: #B4EEB4;
		margin-left: 45upx;
		margin-top: -610upx;
		font-style: italic;
	}
	.shangdian{
		width: 93%;
		height: 500upx;
		background-color: #B4EEB4;
		border-radius: 20upx;
		position: absolute;
		margin-left: 25upx;
		margin-top: -510upx;
	}
	.touxiang image{
		width: 80upx;
		height: 80upx;
		position: absolute;
		margin-left: 45upx;
		margin-top: 30upx;
		border-radius: 50upx;
	}
	.touxiang2{
		font-size: 35upx;
		color: white;
		position: absolute;
		margin-left: 150upx;
		margin-top: 30upx;
	}
	.touxiang3{
		width: 120upx;
		height: 50upx;
		background-color: #32CD32;
		position: absolute;
		margin-left: 550upx;
		margin-top: 30upx;
		border-radius: 50upx;
		}
		.touxiang4{
			font-size: 30upx;
			color: white;
			position: absolute;
			margin-left: 30upx;
			margin-top: 5upx;
		}
		.touxiang5{
			font-size: 25upx;
			color: white;
			position: absolute;
			margin-left: 160upx;
			margin-top: 80upx;
		}
		.jieshao2{
			width: 88%;
			font-size: 30upx;
			color: white;
			position: absolute;
			margin-left: 50upx;
			margin-top: 140upx;
		}
		.jieshao5{
			width: 160upx;
			height: 160upx;
			position: absolute;
			margin-left: 490upx;
			margin-top: 300upx;
			border-radius: 20upx;
		}
		.jieshao4{
			width: 160upx;
			height: 160upx;
			position: absolute;
			margin-left: 270upx;
			margin-top: 300upx;
			border-radius: 20upx;
		}
		.jieshao3{
			width: 160upx;
			height: 160upx;
			position: absolute;
			margin-left: 50upx;
			margin-top: 300upx;
			border-radius: 20upx;
		}
</style>
