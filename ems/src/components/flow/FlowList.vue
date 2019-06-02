<!-- html部分 -->
<template>
	<div>
		<h1>流程信息❤</h1>
		<div style="text-align: left;margin-bottom: 20px;">
				<el-input placeholder="请输入流程名称" prefix-icon="el-icon-search" v-model="search_flowname" style="width: 20%;">
				</el-input>
				<el-button @click="search()">查询</el-button>
				<el-button @click="add()">新增</el-button>
		</div>
		<el-table :data="list">
			<el-table-column prop="flowid" label="ID" width="130" align='center'></el-table-column>
			<el-table-column prop="flowname" label="流程信息" width="130" align='center'></el-table-column>
			<el-table-column prop="dljname" label="斗轮机" width="130" align='center'></el-table-column>
			<el-table-column prop="zcjname" label="装船机" width="130" align='center'></el-table-column>
			<el-table-column prop="pdjname" label="皮带机" width="130" align='center'></el-table-column>
			<el-table-column prop="compname" label="所属企业" width="130" align='center'></el-table-column>
			<el-table-column label="操作" width="180">
				<template slot-scope="scope">
					<el-button @click="edit(scope.row)" size="small">编辑</el-button>
					<el-button @click="del(scope.row.flowid)" type="danger" size="small">删除</el-button>
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
				search_flowname:'',
				list:[],
			
			};
		},
		methods:{
			search(){
				var url = this.baseUrl+"/baseFlow/search"
				var data = {flowname:this.search_flowname};
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
				this.$router.push({path:'/FlowAdd'});
			},
			del(row){
				var url = this.baseUrl+"/baseFlow/delete"
				var data = {flowid:row};
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
				this.$router.push({name:"FlowEdit",params:{row:row}});
			}
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/baseFlow/list"
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
