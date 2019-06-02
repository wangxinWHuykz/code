<!-- html部分 -->
<template>
	<div>
		<h1>作业信息❤</h1>
		<div style="text-align: left;margin-bottom: 20px;">
				<el-input placeholder="请输入流程名称" prefix-icon="el-icon-search" v-model="jobid" style="width: 20%;">
				</el-input>
				<el-button @click="search()">查询</el-button>
				<el-button @click="add()">新增</el-button>
		</div>
		<el-table :data="list">
			<el-table-column prop="jobid" label="作业主键" width="130" align='center'></el-table-column>
			<el-table-column prop="devid" label="设备名称" width="130" align='center'></el-table-column>
			<el-table-column prop="starttime" label="开始作业时间" width="180" align='center'></el-table-column>
			<el-table-column prop="completetime" label="结束作业时间" width="180" align='center'></el-table-column>
			<el-table-column prop="duration" label="运行时长" width="130" align='center'></el-table-column>
			<el-table-column prop="amount" label="作业量" width="130" align='center'></el-table-column>
			<el-table-column prop="reportid" label="报岗id" width="130" align='center'></el-table-column>
			<el-table-column label="操作" width="180">
				<template slot-scope="scope">
					<el-button @click="edit(scope.row)" size="small">修改</el-button>
					<el-button @click="del(scope.row.jobid)" type="danger" size="small">删除</el-button>
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
				jobid:'',
				list:[]
			};
		},
		methods:{
			search(){
				var url = this.baseUrl+"/produceJob/search"
				var data = {jobid:this.jobid};
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
				this.$router.push({path:'/JobAdd'});
			},
			del(row){
				var url = this.baseUrl+"/produceJob/delete"
				var data = {jobidjobid:row.jobidjobid};
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
			edit(jobid){
				this.$router.push({name:"JobEdit",params:{row:jobid}});
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
