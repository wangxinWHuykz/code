<template>
	<view class="page">
		<scroll-view class="scrollList" scroll-y :scroll-into-view="scrollViewId" :style="{height:winHeight + 'px'}">
			<view class="uni-list">
				<block v-for="(list, key) in lists" :key="key">
					<block v-if="list.data.length">
						<view class="uni-list-cell-divider" :id="list.letter">
							{{list.letter}}
						</view>
						<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in list.data" :key="index"
						 :class="list.data.length -1 == index ? 'uni-list-cell-last' : ''">
							<view class="uni-list-cell-navigate">
								{{item}}
							</view>
						</view>
					</block>
				</block>
			</view>
		</scroll-view>
		<view class="uni-indexed-list-bar" :class="touchmove ? 'active' : ''" @touchstart="touchStart" @touchmove="touchMove"
		 @touchend="touchEnd" @touchcancel="touchCancel" :style="{height:winHeight + 'px'}">
			<text v-for="(list,key) in lists" :key="key" class="uni-indexed-list-text" :class="touchmoveIndex == key ? 'active' : ''"
			 :style="{height:itemHeight + 'px',lineHeight:itemHeight + 'px'}">{{list.letter}}</text>
		</view>
		<view class="uni-indexed-list-alert" v-if="touchmove">
			{{lists[touchmoveIndex].letter}}
		</view>
	</view>
</template>

<script>
	var airportDate = require("@/common/airport.js");

	export default {
		data() {
			return {
				title: 'grid',
				lists: airportDate.list,
				touchmove: false,
				touchmoveIndex: -1,
				itemHeight: 0,
				winHeight: 0,
				scrollViewId: "A",
				titleHeight: 0
			}
		},
		onLoad() {
			let winHeight = uni.getSystemInfoSync().windowHeight;
			this.itemHeight = winHeight / 26;
			this.winHeight = winHeight;
		},
		methods: {
			touchStart(e) {
				this.touchmove = true;
				let pageY = e.touches[0].pageY;
				let index = Math.floor((pageY - this.titleHeight) / this.itemHeight);
				let item = this.lists[index];
				if (item) {
					this.scrollViewId = item.letter;
					this.touchmoveIndex = index;
				}
			},
			touchMove(e) {
				let pageY = e.touches[0].pageY;
				let index = Math.floor((pageY - this.titleHeight) / this.itemHeight);
				let item = this.lists[index];
				if (item) {
					this.scrollViewId = item.letter;
					this.touchmoveIndex = index;
				}
			},
			touchEnd() {
				this.touchmove = false;
				this.touchmoveIndex = -1;
			},
			touchCancel() {
				this.touchmove = false;
				this.touchmoveIndex = -1;
			}
		}
	}
</script>

<style>
	.page {
		display: flex;
		flex-direction: row;
	}

	.scrollList {
		flex: 1;
		height: 100vh;
	}

	.uni-indexed-list-bar {
		width: 46upx;
		height: 100vh;
		background-color: lightgrey;
		display: flex;
		flex-direction: column;
	}

	.uni-indexed-list-bar.active {
		background-color: rgb(200, 200, 200);
	}

	.uni-indexed-list-text {
		color: #aaa;
		font-size: 22upx;
		text-align: center;
	}

	.uni-indexed-list-bar.active .uni-indexed-list-text {
		color: #333;
	}

	.uni-indexed-list-text.active,
	.uni-indexed-list-bar.active .uni-indexed-list-text.active {
		color: #007AFF;
	}

	.uni-indexed-list-alert {
		position: absolute;
		z-index: 20;
		width: 160upx;
		height: 160upx;
		left: 50%;
		top: 50%;
		margin-left: -80upx;
		margin-top: -80upx;
		border-radius: 80upx;
		text-align: center;
		line-height: 160upx;
		font-size: 70upx;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.5);
	}
    /* 列表 */
    .uni-list {
    	background-color: #FFFFFF;
    	position: relative;
    	width: 100%;
    	display: flex;
    	flex-direction: column;
    }
    .uni-list:after {
    	position: absolute;
    	z-index: 10;
    	right: 0;
    	bottom: 0;
    	left: 0;
    	height: 1px;
    	content: '';
    	-webkit-transform: scaleY(.5);
    	transform: scaleY(.5);
    	background-color: #c8c7cc;
    }
    .uni-list::before {
    	position: absolute;
    	z-index: 10;
    	right: 0;
    	top: 0;
    	left: 0;
    	height: 1px;
    	content: '';
    	-webkit-transform: scaleY(.5);
    	transform: scaleY(.5);
    	background-color: #c8c7cc;
    }
    .uni-list-cell {
    	position: relative;
    	display: flex;
    	flex-direction: row;
    	justify-content: space-between;
    	align-items: center;
    }
    .uni-list-cell-hover {
    	background-color: #eee;
    }
    .uni-list-cell-pd {
    	padding: 22upx 30upx;
    }
    .uni-list-cell-left {
    	font-size:28upx;
    	padding: 0 30upx;
    }
    .uni-list-cell-db,
    .uni-list-cell-right {
    	flex: 1;
    }
    .uni-list-cell::after {
    	position: absolute;
      z-index: 3;
    	right: 0;
    	bottom: 0;
    	left: 30upx;
    	height: 1px;
    	content: '';
    	-webkit-transform: scaleY(.5);
    	transform: scaleY(.5);
    	background-color: #c8c7cc;
    }
    .uni-list .uni-list-cell:last-child::after {
    	height: 0upx;
    }
    .uni-list-cell-last.uni-list-cell::after {
    	height: 0upx;
    }
    .uni-list-cell-divider {
    	position: relative;
    	display: flex;
    	color: #999;
    	background-color: #f7f7f7;
    	padding:15upx 20upx;
    }
    .uni-list-cell-divider::before {
    	position: absolute;
    	right: 0;
    	top: 0;
    	left: 0;
    	height: 1px;
    	content: '';
    	-webkit-transform: scaleY(.5);
    	transform: scaleY(.5);
    	background-color: #c8c7cc;
    }
    .uni-list-cell-divider::after {
    	position: absolute;
    	right: 0;
    	bottom: 0;
    	left: 0upx;
    	height: 1px;
    	content: '';
    	-webkit-transform: scaleY(.5);
    	transform: scaleY(.5);
    	background-color: #c8c7cc;
    }
    .uni-list-cell-navigate {
    	font-size:30upx;
    	padding: 22upx 30upx;
    	line-height: 48upx;
    	position: relative;
    	display: flex;
    	box-sizing: border-box;
    	width: 100%;
    	flex: 1;
    	justify-content: space-between;
    	align-items: center;
    }
    .uni-list-cell-navigate {
    	padding-right: 36upx;
    }
    .uni-navigate-badge {
    	padding-right: 50upx;
    }
    .uni-list-cell-navigate.uni-navigate-right:after {
    	font-family: uniicons;
    	content: '\e583';
    	position: absolute;
    	right: 24upx;
    	top: 50%;
    	color: #bbb;
    	-webkit-transform: translateY(-50%);
    	transform: translateY(-50%);
    }
    .uni-list-cell-navigate.uni-navigate-bottom:after {
    	font-family: uniicons;
    	content: '\e581';
    	position: absolute;
    	right: 24upx;
    	top: 50%;
    	color: #bbb;
    	-webkit-transform: translateY(-50%);
    	transform: translateY(-50%);
    }
    .uni-list-cell-navigate.uni-navigate-bottom.uni-active::after {
    	font-family: uniicons;
    	content: '\e580';
    	position: absolute;
    	right: 24upx;
    	top: 50%;
    	color: #bbb;
    	-webkit-transform: translateY(-50%);
    	transform: translateY(-50%);
    }
    .uni-collapse.uni-list-cell {
    	flex-direction: column;
    }
    .uni-list-cell-navigate.uni-active {
    	background: #eee;
    }
    .uni-list.uni-collapse {
    	box-sizing: border-box;
    	height: 0;
    	overflow: hidden;
    }
    .uni-collapse .uni-list-cell {
    	padding-left: 20upx;
    }
    .uni-collapse .uni-list-cell::after {
    	left: 52upx;
    }
    .uni-list.uni-active {
    	height: auto;
    }
</style>
