<!-- html部分 -->
<template>
	<div>
		<h1>报岗❤</h1>
		<div style="text-align: left;margin-bottom: 20px;">
				<el-input placeholder="请输入船队名称" prefix-icon="el-icon-search" v-model="shipname" style="width: 40%;">
				</el-input>
				<el-button @click="search()">查询</el-button>
				<el-button @click="add()">添加</el-button>
		</div>
		<div>
			<el-table :data="list">
				  <el-table-column prop="reportid" label="主键报岗id" width="140"  align='center'></el-table-column>
				  <el-table-column prop="shipname" label="船队名称" width="150"  align='center'></el-table-column>
				  <el-table-column prop="capacity" label="装载数量(吨)"	width="160"  align='center'></el-table-column>
				  <el-table-column prop="planjobtime" label="预计到港时间"	width="180"  align='center'></el-table-column>
				  <el-table-column prop="startjobtime" label="实际到港时间"	width="180"  align='center'></el-table-column>
				  <el-table-column prop="completetime" label="完成时间" width="180" align='center'></el-table-column>
				  <el-table-column prop="flowid" label="流程"	width="140"  align='center'></el-table-column>
				  <el-table-column prop="reportuser" label="报岗人"	width="140"  align='center'></el-table-column>
				  <el-table-column prop="compid" label="所属企业"	width="140"  align='center'></el-table-column>
				  <el-table-column label="操作" width="220">
					  <template slot-scope = "scope">
						<el-button size="small"  @click="edit(scope.row.reportid)">修改</el-button>
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
				shipname:'',
				list:[]
			};
		},
		methods:{
			search(){
				var url = this.baseUrl+"/produceReport/search"
				var data = {shipname:this.shipname};
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
				this.$router.push({path:'/ReportAdd'});
			},
			del(row){
				var url = this.baseUrl+"/produceReport/delete"
				var data = {reportid:row.reportid};
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
			edit(reportid){
				this.$router.push({name:"ReportEdit",params:{row:reportid}});
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
