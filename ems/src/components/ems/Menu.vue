<!-- html部分 -->
<template>
	<div style="height: 100%;">
		<!-- 菜单 -->
		<el-menu :default-active="$store.state.defaultActive">
			<span v-for="obj in arr">
				<el-menu-item v-show="!obj.children" :index='obj.index' @click='fn(obj)'>
					<span slot="title">{{obj.text}}</span>
				</el-menu-item>
				<el-submenu v-show="obj.children" :index='obj.index'>
					<template slot="title">
					  <span>{{obj.text}}</span>
					</template>
					<el-menu-item-group>
					  <el-menu-item v-for="item in obj.children" :index='item.index' :key='item.text' @click='fn(item)'>
						{{item.text}}</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
			</span>
		</el-menu>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				arr:[
					{text:'首页',index:'101',url:'/Welcome'},
					{text:'基本信息',index:'102',children:[
						{text:'企业信息',index:'1021',url:'/CompList'},
						{text:'人员信息',index:'1022',url:'/UserList'},
						{text:'设备类别',index:'1023',url:'/DevtypeList'},
						{text:'设备信息',index:'1024',url:'/DeviceList'},
						{text:'流程信息',index:'1025',url:'/FlowList'}
					]},
					{text:'生产作业',index:'103',children:[
						{text:'报岗',index:'1031',url:'/ReportList'},
						{text:'中控',index:'1032',url:'/Control'},
						{text:'作业信息',index:'1033',url:'/JobList'},
						{text:'故障信息',index:'1034',url:'/FaultList'},
						{text:'维修记录',index:'1035',url:'/RepairList'}
					]},
					{text:'能耗信息',index:'104',children:[
						{text:'能耗信息',index:'1041',url:'/ConsumeList'},
						{text:'折标煤系数',index:'1042',url:'/StandradcoalList'},
					]},
					{text:'作业信息',index:'105',children:[
						{text:'作业量统计',index:'1051',url:'/JobAmount'}
					]},
					{text:'模型建立与展示',index:'106',children:[
						{text:'企业用能模型',index:'1061',url:'/EnergyConsume'},
						{text:'企业产销模型',index:'1062',url:'/EnergyModel'}
					]},
					{text:'统计信息',index:'107',children:[
						{text:'港口能耗对比',index:'1071',url:'/DevInfoHelp'},
						{text:'设备利用率',index:'1082',url:'/DevInfoUse'},
						{text:'成本核算信息',index:'1083',url:'/DevInfoList'}
					]}
				]
			};
		},
		methods:{
			fn(obj){
				this.$router.push({path:obj.url});
				this.$store.commit('addTag',{name:obj.text,type:'warning',url:obj.url,index:obj.index});
				
			}
		}
	}
</script>
<!-- css部分 -->
<style>
.el-menu{
	background: #f4f4f4;
}
</style>
