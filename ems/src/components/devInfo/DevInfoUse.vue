<!-- html部分 -->
<template>
	<div>
		<h1>港口能耗对比</h1>
		<div style="text-align: left;margin-bottom: 20px;">
				年份：<el-date-picker v-model="year" type="year" placeholder="请选择年份" value-format="yyyy" style='width: 200px;'> </el-date-picker>
		        <el-button @click="search">查询</el-button>
		</div>
		<h1>港口间设备完好率对比</h1>
		<ve-line :data="chartData"></ve-line>
		<h1>港口间设备利用率对比</h1>
		<ve-line :data="chartData1"></ve-line>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		data() {
			return {
				year: '2018',
				chartData: {},
				chartData1: {}
			};
		},
		methods:{
			search(){
				var url = this.baseUrl+"/devInfo/intactRatio"
				var data = {year:this.year};
				// 传递给后端的数据
				this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
				}).then(res=>{
					this.chartData=res.data;
				})
				
				
				var url = this.baseUrl+"/devInfo/usage"
				var data = {year:this.year};
				// 传递给后端的数据
				this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
				}).then(res=>{
					this.chartData1=res.data;
				})
			}
		},
		mounted:function(){
			this.search();
		}
		
	}
</script>
<!-- css部分 -->
<style>

</style>
