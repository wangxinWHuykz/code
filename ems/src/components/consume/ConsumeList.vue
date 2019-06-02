<!-- html部分 -->
<template>
	<div>
		<h1>能耗信息💗</h1>
		<div style="text-align: left;margin-bottom: 20px;">
				<el-input placeholder="请输入电耗" v-model="electric" style="width: 20%;"></el-input>
				<el-button @click="search()">查询</el-button>
				<el-button @click="add()">新增</el-button>
		</div>
		<div>
			 <el-table :data="list" border>
				 <el-table-column prop="consumeid" label="主键能耗Id" width="130" align='center'></el-table-column>
				 <el-table-column prop="devid" label="设备名称" width="130" align='center'></el-table-column>
				 <el-table-column prop="electric" label="电耗(kw.h)" width="130" align='center'></el-table-column>
				 <el-table-column prop="water" label="水耗(吨)" width="130" align='center'></el-table-column>
				 <el-table-column prop="oil" label="油耗(L)" width="130" align='center'></el-table-column>
				 <el-table-column prop="reportid" label="报岗id" width="130" align='center'></el-table-column>
				  <el-table-column label="操作" width="220">
					  <template slot-scope = "scope">
						<el-button size="small"  @click="edit(scope.row)">编辑</el-button>
						<el-button type="danger" size="small"  @click="del(scope.row)">移除</el-button>
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
				list:[],
				electric:''
			};
		},
		methods:{
			search(){
				var url = this.baseUrl+"/energyConsume/search"
				var data = {electric:this.electric};
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
				this.$router.push({path:'/ConsumeAdd'});
			},
			del(row){
				var url = this.baseUrl+"/energyConsume/delete"
				var data = {consumeid:row.consumeid};
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
				this.$router.push({name:"ConsumeEdit",params:{row:row}});
			}
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/energyConsume/list"
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
