<!-- html部分 -->
<template>
	<div>
		<h1>作业量统计</h1>
		<div style="text-align: left;margin-bottom: 20px;">
				年份：<el-date-picker v-model="year" type="year" placeholder="请选择年份" value-format="yyyy" style='width: 200px;'> </el-date-picker>
		        <el-button @click="search">查询</el-button>
		</div>
		<h1>流程作业量对比图</h1>
		<ve-line :data="chartData1"></ve-line>
		<h1>设备类别作业量统计图</h1>
		 <ve-histogram :data="chartData2"></ve-histogram>
		<h1>设备作业量对比图</h1>
		<ve-line :data="chartData3"></ve-line>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
    data () {
      return {
		 
        chartData1: {
			columns:[],
			rows:[],
		},
		chartData2:{
			columns:[],
			rows:[],
		},
		chartData3:{
			columns:[],
			rows:[],
		},
		year:'2018'
      }
    },
	methods:{
		search(){
			
		var url = this.baseUrl+"/jobAmount/flowAmount"
			var data = {year:this.year};
			// 传递给后端的数据
			this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
			}).then(res=>{
				this.chartData1=res.data;
			});
			//设备类别作业量统计图
			var url1 = this.baseUrl+"/jobAmount/devTypeAmount"
			// 传递给后端的数据
			this.$axios.post(url1,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
			}).then(res=>{
				debugger
				this.chartData2=res.data;
			});
			//设备作业量对比图
			var url2 = this.baseUrl+"/jobAmount/devAmount"
							
			// 传递给后端的数据
			this.$axios.post(url2,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
			}).then(res=>{
				this.chartData3=res.data;
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
