<template>
	<view class="content">
		<!-- 顶部背景图 -->
		<view class="beijing">
			<image src="../../static/img/bj4.png" mode=""></image>
		</view>
		<!-- 美食日记 -->
		<view class="riji">
			<text class="riji1">以自己喜欢的方式过一生</text>
			<text class="riji2">珊瑚长出海面伸向月亮背面，你我盘算来生不注意今天</text>
			<image src="../../static/img/1.png" mode="" class="riji3"></image>
			<image src="../../static/img/tx.JPG" mode="" class="riji4"></image>
			<text class="riji5">小明美食日记</text>
		</view>
		<view class="meishi">
			<text class="meishi1">永远期待着明亮的未来</text>
			<text class="meishi2">凡有所相，皆是虚妄。繁华世事，一生浮梦。</text>
			<image src="../../static/img/2.png" mode="" class="meishi3"></image>
			<image src="../../static/img/tx.JPG" mode="" class="meishi4"></image>
			<text class="meishi5">小明美食日记</text>
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
	
	.beijing image{
		width: 100%;
		height: 370upx;
		margin-left: 0upx;
		margin-top: -100upx;
	}
	.riji{
		background-color: #C1FFC1;
		width: 93%;
		height: 550upx;
		border-radius: 20upx;
		position: absolute;
		margin-left: 25upx;
		margin-top: -250upx;
		float: left;
	}
	.riji1{
		font-size: 35upx;
		font-weight: bold;
		position: absolute;
		margin-left: -320upx;
		margin-top: 20upx;
		float: left;
	}
	.riji2{
		font-size: 30upx;
		font-weight: bold;
		position: absolute;
		margin-left: -320upx;
		margin-top: 80upx;
		float: left;
		color: #9E9E9E;
	}
	.riji3{
		width: 90%;
		height: 280upx;
		position: absolute;
		margin-left: -310upx;
		margin-top: 160upx;
		border-radius: 20upx;
		float: left;
	}
	.riji4{
		width: 60upx;
		height: 60upx;
		position: absolute;
		margin-left: -310upx;
		margin-top: 460upx;
		float: left;
		border-radius: 50%;
	}
	.riji5{
		font-size: 30upx;
		font-weight: bold;
		position: absolute;
		margin-left: -230upx;
		margin-top: 470upx;
		float: left;
		color: #9E9E9E;
	}
	
	.meishi{
		background-color: #C1FFC1;
		width: 93%;
		height: 550upx;
		position: absolute;
		margin-left: 30upx;
		margin-top: 330upx;
		float: left;
		border-radius: 20upx;
	}
	.meishi1{
		font-size: 35upx;
		font-weight: bold;
		position: absolute;
		margin-left: -320upx;
		margin-top: 20upx;
		float: left;
	}
	.meishi2{
		font-size: 30upx;
		font-weight: bold;
		position: absolute;
		margin-left: -320upx;
		margin-top: 80upx;
		float: left;
		color: #9E9E9E;
	}
	.meishi3{
		width: 90%;
		height: 280upx;
		position: absolute;
		margin-left: -312upx;
		margin-top: 160upx;
		float: left;
		border-radius: 20upx;
	}
	.meishi4{
		width: 60upx;
		height: 60upx;
		position: absolute;
		margin-left: -320upx;
		margin-top: 460upx;
		float: left;
		border-radius: 50%;
	}
	.meishi5{
		font-size: 30upx;
		font-weight: bold;
		position: absolute;
		margin-left: -240upx;
		margin-top: 470upx;
		float: left;
		color: #9E9E9E;
	}
</style>
