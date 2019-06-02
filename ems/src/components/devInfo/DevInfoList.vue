<!-- html部分 -->
<template>
	<div>
		<h1>成本核算信息💗</h1>
		<div style="text-align: left;margin-bottom: 20px;">
				年份：<el-date-picker v-model="year" type="year" placeholder="请选择年份" value-format="yyyy" style='width: 200px;'> </el-date-picker>
		        <el-button @click="search">查询</el-button>
		</div>
		<h1>全年的数据💗</h1>
		<div>
			 <el-table :data="list">
				  <el-table-column prop="devname" label="设备名称"	width="180"  align='center'></el-table-column>
				  <el-table-column prop="amount"	label="作业量" width="180" align='center'> </el-table-column>
				  <el-table-column prop="consume" label="能耗(折标煤)"	width="180"  align='center'></el-table-column>
				  <el-table-column prop="cost"	label="维修成本" width="180" align='center'> </el-table-column>
			</el-table>
		</div>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		data() {
			return {
				year:'2018',
				list:[]
			};
		},
		methods:{
			search(){
				var url = this.baseUrl+"/devInfo/cost"
				var data = {year:this.year};
				// 传递给后端的数据
				this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
				}).then(res=>{
					this.list=res.data;
				})
			}
		},
		mounted:function(){
			// 后端网址
			
			this.search();
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
