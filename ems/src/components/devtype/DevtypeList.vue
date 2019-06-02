<!-- html部分 -->
<template>
	<div style="width: 580px;">
		<h1>设备类别❤</h1>
		<div style="text-align: left;margin-bottom: 20px;">
				<el-input placeholder="请输入机器名称" prefix-icon="el-icon-search" v-model="typename" style="width: 40%;">
				</el-input>
				<el-button @click="search()">查询</el-button>
				<el-button @click="add()">新增</el-button>
		</div>
		<div>
			 <el-table :data="list">
				  <el-table-column prop="typeid" label="公司id"	width="180"  align='center'></el-table-column>
				  <el-table-column prop="typename"	label="机器名称" width="180" align='center'> </el-table-column>
				  <el-table-column label="操作" width="220" align='center'>
					  <template slot-scope = "scope">
						<el-button size="small"  @click="edit(scope.row)">编辑</el-button>
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
		name:'',
		data() {
			return {
				typename:"",
				list:[],
			};
		},
		methods:{
			search(){
				var url = this.baseUrl+"/baseDevtype/search"
				var data = {typename:this.typename};
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
				this.$router.push({path:'/DevtypeAdd'});
			},
			del(row){
				var url = this.baseUrl+"/baseDevtype/delete"
				var data = {typeid:row.typeid};
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
				this.$router.push({name:"DevtypeEdit",params:{row:row}});
			}
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/baseDevtype/list"
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
