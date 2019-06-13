<template>
	<view class="content">
		<!-- 背景图 -->
		<view class="beijing">
			<image src="../../static/img/bj3.png" mode=""></image>
		</view>
		<!-- 搜索框 -->
		<view class="search">
			<image src="../../static/img/ss.png" mode=""></image>
			<text>搜菜名 食材</text>
		</view> 
		<!-- 食谱列表 -->
		<view class="all">
			
		</view>
			<view class="yuan">
				<view class="yuan1">
					<image src="../../static/img/sw10.png" mode=""></image>
				</view>
				<view class="yuan2">
					<image src="../../static/img/sw13.png" mode=""></image>
				</view>
				<view class="yuan3">
					<image src="../../static/img/sw12.png" mode=""></image>
				</view>
				<view class="yuan4">
					<image src="../../static/img/sw11.png" mode=""></image>
				</view>
				<view class="yuan5">
					<image src="../../static/img/sw9.png" mode=""></image>
				</view>
				 <view class="yuan7">
				 	<image src="../../static/img/sw8.png" mode=""></image>
				 </view>
				 <view class="yuan8">
				 	<image src="../../static/img/sw7.png" mode=""></image>
				 </view>
				 <view class="yuan9">
				 	<image src="../../static/img/sw6.png" mode=""></image>
				 </view>
				 <view class="yuan10">
				 	<image src="../../static/img/sw14.png" mode=""></image>
				 </view>
				 <view class="yuan11">
				 	<image src="../../static/img/sw5.png" mode=""></image>
				 </view> 
			</view>
			<!-- <view class="yuan6">
				
			</view> -->
			<view class="zhi">
				<text class="t1">家常菜</text>
				<text class="t2">肉类食谱</text>
				<text class="t3">水产海鲜</text>
				<text class="t4">蔬菜食谱</text>
				<text class="t5">母婴食谱</text>
			</view>
			<view class="zhi2">
				<text class="t6">蛋奶制品</text>
				<text class="t7">烘焙</text>
				<text class="t8">食疗养生</text>
				<text class="t9">减肥餐</text>
				<text class="t10">米面杂粮</text>
			</view>
		<!-- 热门食谱 -->
		<view class="shipu2">
			<text>热门食谱</text>
		</view>
		<!-- 具体食谱 -->
		<view class="shipu3">
			<image src="../../static/img/sw2.png" mode="" class="shipu4"></image>
			<image src="../../static/img/dwqm2.jpeg" mode=""  class="touxiang"></image>
			<text class="shipu5">肋眼牛排</text>
			<text class="mingzi">小明美食日记</text>
			<image src="../../static/img/eye.png" mode="" class="eye"></image>
			<text class="shipu6">1314w</text>
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
	.content {
		text-align: center;
		height: 400upx;
	}

	.search{
		width: 90%;
		height: 60upx;
		background-color: white;
		border-radius: 50upx;
		position: absolute;
		margin-left: 40upx;
		margin-top: -260upx;
	}
	.beijing image{
		width: 100%;
		height: 370upx;
	}
	.search image{
		width: 40upx;
		height: 40upx;
		position: absolute;
		margin-left: -50upx;
		margin-top: 8upx;
	}
	.search text{
		font-size: 30upx;
		color: gainsboro;
		/* position: absolute;
		left: 125px;
		top: 3px; */
	}
	.shipu{
		width: 93%;
		height: 340upx;
		background-color: #C1FFC1;
		position: absolute;
		margin-left: 30upx;
		margin-top: -150upx;
		border-radius: 20upx;
	}
	.shipu2{
		font-size: 40upx;
		font-weight: bold;
		font-style: oblique;
		position: absolute;
		margin-left: 35upx;
		margin-top: -110upx;
	}
	.shipu3{
		width: 93%;
		height: 480upx;
		position: absolute;
		margin-left: 30upx;
		margin-top: -30upx;
		background-color: #C1FFC1;
		border-radius: 20upx;
	}
	.shipu4{
		width: 100%;
		height: 310upx;
		position: absolute;
		/* float: left; */
		margin-left: -348upx;
		margin-top: 0upx;
		background-color: #C1FFC1;
		border-radius: 20upx 20upx 0 0;
	}
	.touxiang{
		width: 60upx;
		height: 60upx;
		border-radius: 50upx;
		position: absolute;
		margin-left: -320upx;
		margin-top: 400upx;
	}
	.shipu5{
		font-size: 35upx;
		font-weight: bold;
		position: absolute;
		margin-left: -320upx;
		margin-top: 330upx;
	}
	.mingzi{
		font-size: 30upx;
		color: green;
		position: absolute;
		margin-left: -220upx;
		margin-top: 410upx;
	}
	.eye{
		width: 40upx;
		height: 40upx;
		position: absolute;
		margin-left: 200upx;
		margin-top: 430upx;
	}
	.shipu6{
		font-size: 26upx;
		position: absolute;
		margin-left: 247upx;
		margin-top: 430upx;
		color: #DCDCDC;
	}
	.yuan{
		width: 93%;
		height: 330upx;
		margin-top: -465upx;
		border-radius: 20upx;
		margin-left: 25upx;
		background-color: #B4EEB4;
		position: absolute;
	}
	.yuan1 image{
		position: absolute;
		float: left;
		margin-left: -320upx;
		margin-top: 30upx;
		border-radius: 50%;
		width: 100upx;
		height: 100upx;
	}
	.yuan2 image{
		border-radius: 50%;
		width: 100upx;
		height: 100upx;
		float: left;
		margin-left: 170upx;
		margin-top: 30upx;
	}
	.yuan3 image{
		border-radius: 50%;
		width: 100upx;
		height: 100upx;
		float: left;
		margin-left: 40upx;
		margin-top: 30upx;
	}
	.yuan4 image{
		border-radius: 50%;
		width: 100upx;
		height: 100upx;
		float: left;
		margin-left: 40upx;
		margin-top: 30upx;
	}
	.yuan5 image{
		border-radius: 50%;
		width: 100upx;
		height: 100upx;
		float: left;
		margin-left: 30upx;
		margin-top: 30upx;
	}
	.zhi .t1{
		font-size: 28upx;
		float: right;
		color: black;
		position: absolute;
		float: left;
		margin-top: -330upx;
		margin-left: -315upx;
	}
	.zhi .t2{
		font-size: 28upx;
		float: right;
		color: black;
		position: absolute;
		float: left;
		margin-top: -330upx;
		margin-left: -185upx;
	}
	.zhi .t3{
		font-size: 28upx;
		float: right;
		color: black;
		position: absolute;
		float: left;
		margin-top: -330upx;
		margin-left: -45upx;
	}
	.zhi .t4{
		font-size: 28upx;
		float: right;
		color: black;
		position: absolute;
		float: left;
		margin-top: -330upx;
		margin-left: 95upx;
	}
	.zhi .t5{
		font-size: 28upx;
		float: right;
		color: black;
		position: absolute;
		float: left;
		margin-top: -330upx;
		margin-left: 220upx;
	}
	.yuan7 image{
		float: right;
		margin-right: 20upx;
		margin-top: 50upx;
		border-radius: 50%;
		width: 100upx;
		height: 100upx;
	}
	.yuan8 image{
		border-radius: 50%;
		width: 100upx;
		height: 100upx;
		float: right;
		margin-right: 40upx;
		margin-top: 50upx;
	}
	.yuan9 image{
		border-radius: 50%;
		width: 100upx;
		height: 100upx;
		float: right;
		margin-right: 40upx;
		margin-top: 50upx;
	}
	.yuan10 image{
		border-radius: 50%;
		width: 100upx;
		height: 100upx;
		float: right;
		margin-right: 40upx;
		margin-top: 50upx;
	}
	.yuan11 image{
		border-radius: 50%;
		width: 100upx;
		height: 100upx;
		float: right;
		margin-right: 40upx;
		margin-top: 50upx;
	}
	.zhi2 .t6{
		font-size: 28upx;
		float: right;
		color: black;
		position: absolute;
		float: left;
		margin-top: -185upx;
		margin-left: -320upx;
	}
	.zhi2 .t7{
		font-size: 28upx;
		float: right;
		color: black;
		position: absolute;
		float: left;
		margin-top: -185upx;
		margin-left: -160upx;
	}
	.zhi2 .t8{
		font-size: 28upx;
		float: right;
		color: black;
		position: absolute;
		float: left;
		margin-top: -185upx;
		margin-left: -40upx;
	}
	.t9{
		font-size: 28upx;
		float: right;
		color: black;
		position: absolute;
		float: left;
		margin-top: -185upx;
		margin-left: 100upx;
	}
	.zhi2 .t10{
		font-size: 28upx;
		float: right;
		color: black;
		position: absolute;
		float: left;
		margin-top: -185upx;
		margin-left: 220upx;
	}
</style>
