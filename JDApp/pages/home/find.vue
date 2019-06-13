<template>
	<view class="content">
		<view class="all">
			<!-- 横向选卡 -->
			<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange" textFlex='true' tabStyle='color:white;border-bottom:2upx solid white'></wuc-tab>
			<view v-if="TabCur==0">
				<findFlow></findFlow>
			</view>
			<view v-else-if="TabCur==1">
				<findCookbook></findCookbook>
			</view>
			<view v-else-if="TabCur==2">
				<findCommend></findCommend>
			</view>
			<view v-else-if="TabCur==3">
				<findBeauty></findBeauty>
			</view>
			<view v-else="TabCur==4">
				<findLife></findLife>
			</view>
		</view>
	</view>
</template>

<script>
	import WucTab from '../../components/wuc-tab/wuc-tab.vue';
	import findFlow from '../find/findFlow.vue'
	import findCookbook from '../find/findCookbook.vue'
	import findCommend from '../find/findCommend.vue'
	import findBeauty from '../find/findBeauty.vue'
	import findLife from '../find/findLife.vue'
	export default {
		components: { WucTab,findFlow,findCookbook,findCommend,findBeauty,findLife},
		data() {
			return {
				TabCur:0,
				tabList:[{name:'关注'},{name:'食谱'},{name:'推荐'},{name:'时尚美妆'},{name:'生活'}],
			}
		},
		onLoad() {

		},
		methods: {
			tabChange(index) {
				this.TabCur=index;
			}
		}
	}
</script>

<style>
	.all {
		width: 100%;
		height: 300upx;
		z-index: 5;
	}
</style>
