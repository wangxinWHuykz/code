			<template>
				<view class="content">
					<!-- 头部 -->
					<view class="header">
						<image src="../../static/img/23.png" mode="" class="dizhi"></image>
						<text class="dizhi2">赛博坦星球</text>
						<image src="../../static/img/53.png" mode="" class="jiantou" @click="fn"></image>
						<image src="../../static/img/55.png" mode="" class="xinxi"></image>
					</view>
					<!-- 搜索框 -->
					<view class="soushuo" @click="fn1">
						<text>巧克力</text>
					</view>
					<!-- 顶部文字 -->
					<view class="wenzhi">
						<text>酸奶常温</text>
						<text>百合11</text>
						<text>酸奶</text>
						<text>玫瑰</text>
						<text>奇趣饼干</text>
						<text>牛奶</text>
						<text>家居鲜花</text>
					</view>
					<!-- 圆形图标 -->
					<view class="yuan">
						<view class="yuan1">
							<image src="../../static/img/20.png" mode=""></image>
							<text>超市</text>
						</view>
						<view class="yuan2">
							<image src="../../static/img/14.png" mode=""></image>
							<text>菜场</text>
						</view>
						<view class="yuan3">
							<image src="../../static/img/34.png" mode=""></image>
							<text>鲜花</text>
						</view>
						<view class="yuan4">
							<image src="../../static/img/57.png" mode=""></image>
							<text>医药</text>
						</view>
						<view class="yuan5">
							<image src="../../static/img/22.png" mode=""></image>
							<text>蛋糕</text>
						</view> 
					</view>
						<!-- 圆形图标底部文字 -->
						<view class="wenzhi2">
							<text></text>
							<text></text>
							<text></text>
							<text></text>
							<text></text>
						</view>
						<!-- 第二行圆形图标 -->
						<view class="yuan11">
							<view class="yuan6">
								<image src="../../static/img/56.png"></image>
							</view>
							<view class="yuan7">
								<image src="../../static/img/15.png"></image>
							</view>
							<view class="yuan8">
								<image src="../../static/img/32.png"></image>
							</view>
							<view class="yuan9">
								<image src="../../static/img/45.png"></image>
							</view>
							<view class="yuan10">
								<image src="../../static/img/41.png"></image>
							</view>
						</view>
						<!-- 中间商品展示区 -->
						<view class="zhongjian">
							<view class="zhongjian2">
								<image src="../../static/img/88.png" mode="" class="tupian" style="width: 90%;height: 60%;"></image>
							</view>
							<view class="zhongjian3"></view>
							<view class="zhongjian4">
								<text class="shiwu">￥15</text>
								<text class="xinren">新人专享卷</text>
								<view class="shiyong">
									<text>立即使用</text>
								</view>
							</view>
						
						</view>
						<!-- 轮播图 -->
						<view class="lunbotu">
							<image src="../../static/img/92F00355E59A81D9096ED1C18173093F.png" mode="" class="lunbotu2"></image>
						</view>
						
						
				</view>
			</template>

			<script>
				export default {
					data() {
						return {
							
						}
					},
					onLoad() {

					},
					methods: {
						fn(){
							uni.navigateTo({
								url:'../uni-index-list/uni-index-list'
							})
						},
						fn1(){
							uni.navigateTo({
								url:'../HM-search/HM-search'
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

				.header {
					background-color: #66CD00;
					width: 100%;
					height: 270upx;
				}

				.dizhi {
					height: 40upx;
					width: 40upx;
					float: left;
					margin-left: 20upx;
					margin-top: 60upx;
				}

				.dizhi2 {
					font-size: 35upx;
					float: left;
					margin-left: 20upx;
					margin-top: 55upx;
					color: white;
				}

				.jiantou {
					height: 35upx;
					width: 35upx;
					float: left;
					margin-left: 20upx;
					margin-top: 60upx;
				}

				.xinxi {
					height: 40upx;
					width: 40upx;
					float: left;
					margin-left: 390upx;
					margin-top: 60upx;
				}

				.soushuo {
					width: 90%;
					height: 70upx;
					border-radius: 20px;
					float: left;
					margin-left: 33upx;
					margin-top: -150upx;
					background-color: #FFFFFF;
				}
				.soushuo text{
					font-size: 35upx;
					color: #8E8E8E;
					line-height: 50upx;
				}

				.wenzhi text {
					font-size: 28upx;
					padding: 12upx;
					color: white;
				}

				.wenzhi {
					margin-top: -60upx;
				}
				.yuan{
					width: 100%;
					height: 130upx;
				}
				.yuan1{
					border-radius: 50%;
					width: 100upx;
					height: 100upx;
					background-color: cornflowerblue;
					float: left;
					margin-left: 43upx;
					margin-top: 40upx;
				}
				.yuan1 image{
					width: 45upx;
					height: 45upx;
					float: right;
					margin-right: 28upx;
					margin-top: 12upx;
				}
				.yuan1 text{
					font-size: 28upx;
					float: right;
					margin-right: 28upx;
					margin-top: 2upx;
					color: white;
				}
				.yuan2{
					border-radius: 50%;
					width: 100upx;
					height: 100upx;
					background-color: limegreen;
					float: left;
					margin-left: 43upx;
					margin-top: 40upx;
				}
				.yuan2 image{
					width: 45upx;
					height: 45upx;
					float: right;
					margin-right: 28upx;
					margin-top: 12upx;
				}
				.yuan2 text{
					font-size: 28upx;
					float: right;
					margin-right: 28upx;
					margin-top: 2upx;
					color: white;
				}
				.yuan3{
					border-radius: 50%;
					width: 100upx;
					height: 100upx;
					background-color: hotpink;
					float: left;
					margin-left: 43upx;
					margin-top: 40upx;
				}
				.yuan3 image{
					width: 45upx;
					height: 45upx;
					float: right;
					margin-right: 28upx;
					margin-top: 12upx;
				}
				.yuan3 text{
					font-size: 28upx;
					float: right;
					margin-right: 28upx;
					margin-top: 2upx;
					color: white;
				}
				.yuan4{
					border-radius: 50%;
					width: 100upx;
					height: 100upx;
					background-color: lightskyblue;
					float: left;
					margin-left: 43upx;
					margin-top: 40upx;
				}
				.yuan4 image{
					width: 45upx;
					height: 45upx;
					float: right;
					margin-right: 28upx;
					margin-top: 12upx;
				}
				.yuan4 text{
					font-size: 28upx;
					float: right;
					margin-right: 28upx;
					margin-top: 2upx;
					color: white;
				}
				.yuan5{
					border-radius: 50%;
					width: 100upx;
					height: 100upx;
					background-color: orange;
					float: left;
					margin-left: 43upx;
					margin-top: 40upx;
				}
				.yuan5 image{
					width: 45upx;
					height: 45upx;
					float: right;
					margin-right: 28upx;
					margin-top: 12upx;
				}
				.yuan5 text{
					font-size: 28upx;
					float: right;
					margin-right: 28upx;
					margin-top: 2upx;
					color: white;
				}
				.yuan6{
					border-radius: 50%;
					width: 100upx;
					height: 100upx;
					background-color: mediumpurple;
					float: left;
					margin-left: 43upx;
					margin-top: 40upx;
				}
				.yuan6 image{
					width: 75upx;
					height: 75upx;
					float: right;
					margin-right: 12upx;
					margin-top: 7upx;
				}
				.yuan7{
					border-radius: 50%;
					width: 100upx;
					height: 100upx;
					background-color: #EE4000;
					float: left;
					margin-left: 43upx;
					margin-top: 40upx;
				}
				.yuan7 image{
					width: 75upx;
					height: 75upx;
					float: right;
					margin-right: 12upx;
					margin-top: 12upx;
				}
				.yuan8{
					border-radius: 50%;
					width: 100upx;
					height: 100upx;
					background-color: hotpink;
					float: left;
					margin-left: 43upx;
					margin-top: 40upx;
				}
				.yuan8 image{
					width: 60upx;
					height: 60upx;
					float: right;
					margin-right: 18upx;
					margin-top: 15upx;
				}
				.yuan9{
					border-radius: 50%;
					width: 100upx;
					height: 100upx;
					background-color: orange;
					float: left;
					margin-left: 43upx;
					margin-top: 40upx;
				}
				.yuan9 image{
					width: 65upx;
					height: 65upx;
					float: right;
					margin-right: 17upx;
					margin-top: 10upx;
				}
				.yuan10{
					border-radius: 50%;
					width: 100upx;
					height: 100upx;
					background-color: 	#FF3E96;
					float: left;
					margin-left: 43upx;
					margin-top: 40upx;
				}
				.yuan10 image{
					width: 75upx;
					height: 75upx;
					float: right;
					margin-right: 12upx;
					margin-top: 7upx;
				}
				.zhongjian{
					width: 85%;
					height: 280upx;
					border: 28upx solid #EE6A50;
					margin-left: 32upx;
					margin-top: 180upx;
					border-radius: 20upx;
				}
				.zhongjian2{
					width: 103%;
					height: 105%;
					border-radius: 20upx;
					background-color: white;
					margin-left: -8upx;
					margin-top: -5upx;
				}
/* 				.tupian{
					width: 100%;
					height: 360px;
					margin-top: 5upx;
					border-bottom: 1px solid #000000;
				} */
				.zhongjian3{
					width: 108.5%;
					height: 120upx;
					margin-left: -25upx;
					margin-top: -50upx;
					border-radius: 20upx;
					background-color: #EE5C42;
					box-shadow: 10px 10px 5px #D3D3D3;
				}
				.zhongjian4{
					width: 98%;
					height: 120upx;
					margin-left: 5upx;
					margin-top: -150upx;
					border-radius: 20upx;
					background-color: #F5DEB3;
					box-shadow: 10px 10px 5px inset #888888;
				}
				.shiwu{
					font-size: 60upx;
					color: #EE6A50;
					float: left;
					margin-left: 40upx;
					margin-top: 20upx;
				}
				.xinren{
					font-size: 40upx;
					color: #EE6A50;
					font-weight: bold;
					float: left;
					margin-left: 40upx;
					margin-top: 32upx;
				}
				.shiyong{
					border-radius: 50upx;
					background-color: crimson;
					width: 130upx;
					height: 50upx;
					color: white;
					font-size: 26upx;
					line-height: 50upx;
					float: left;
					margin-left: 40upx;
					margin-top: 35upx;
					}
					.lunbotu2{
						height: 180upx;
						width: 100%;
						margin-top: 80upx;
					}
					.zhongjian2 image{
						width: 70px;
						height: 75px;
						padding: 20upx;
					}
			</style>
