<!-- html部分 -->
<template>
	<div>
		<h1>维修记录❤</h1>
		<div style="text-align: left;margin-bottom: 20px;">
				<el-input placeholder="请输入维修费用" prefix-icon="el-icon-search" v-model="cost" style="width: 40%;">
				</el-input>
				<el-button @click="search()">查询</el-button>
				<el-button @click="add()">新增</el-button>
		</div>
		<div>
			<el-table :data="list">
				  <el-table-column prop="repairid" label="主键维修id" width="180"  align='center'></el-table-column>
				  <el-table-column prop="devname" label="设备名称" width="180"  align='center'></el-table-column>
				  <el-table-column prop="cause" label="维修原因"	width="180"  align='center'></el-table-column>
				  <el-table-column prop="cost" label="维修费用"	width="180"  align='center'></el-table-column>
				  <el-table-column prop="repairdate" label="维修日期"	width="180" ></el-table-column>
				  <el-table-column label="操作" width="220">
					  <template slot-scope = "scope">
						<el-button size="small"  @click="edit(scope.row.repairid)">修改</el-button>
						<el-button type="danger" size="small"  @click="del(scope.row)">删除</el-button>
					  </template>
				  </el-table-column>
			</el-table>
		</div>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		data() {
			return {
				cost:'',
				list:[]
			};
		},
		methods:{
			search(){
				var url = this.baseUrl+"/produceRepair/search"
				var data = {cost:this.cost};
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
				this.$router.push({path:'/RepairAdd'});
			},
			del(row){
				var url = this.baseUrl+"/produceRepair/delete"
				var data = {repairid:row.repairid};
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
			edit(repairid){
				this.$router.push({name:"RepairEdit",params:{row:repairid}});
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
