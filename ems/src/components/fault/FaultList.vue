<!-- html部分 -->
<template>
	<div>
		<h1>故障信息❤</h1>
		<div style="text-align: left;margin-bottom: 20px;">
				<el-input placeholder="请输入故障原因" prefix-icon="el-icon-search" v-model="cause" style="width: 20%;">
				</el-input>
				<el-button @click="search()">查询</el-button>
				<el-button @click="add()">新增</el-button>
		</div>
		<el-table :data="list">
			<el-table-column prop="faultId" label="ID" width="130" align='center'></el-table-column>
			<el-table-column prop="devname" label="设备名称" width="130" align='center'></el-table-column>
			<el-table-column prop="cause" label="故障原因" width="130" align='center'></el-table-column>
			<el-table-column prop="faultuser" label="报告人" width="130" align='center'></el-table-column>
			<el-table-column prop="faulttime" label="故障时间" width="130" align='center'></el-table-column>
			<el-table-column label="操作" width="180">
				<template slot-scope="scope">
					<el-button @click="edit(scope.row)" size="small">编辑</el-button>
					<el-button @click="del(scope.row.faultId)" type="danger" size="small">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		data() {
			return {
				list:[],
				cause:''
			};
		},
		methods:{
			search(){
				var url = this.baseUrl+"/produceFault/search"
				var data = {cause:this.cause};
				// 传递给后端的数据
				this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
				}).then(res=>{
					this.list=res.data;
				})
			},
			add(){
				this.$router.push({path:'/FaultAdd'});
			},
			del(row){
				var url = this.baseUrl+"/produceFault/delete"
				var data = {faultId:row};
				// 传递给后端的数据
				this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
				}).then(res=>{
					this.$message("删除成功");
					this.search();
					})
					
			},
			edit(row){
				this.$router.push({name:"FaultEdit",params:{row:row}});
			}
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/produceFault/list"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.list=res.data;
			});
			this.search();
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
