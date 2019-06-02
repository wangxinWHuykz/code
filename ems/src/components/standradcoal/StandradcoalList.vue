<!-- html部分 -->
<template>
	<div>
		<h1>折标煤系数💗</h1>
		<div style="text-align: left;margin-bottom: 20px;">
				<el-input placeholder="请输入能源类别" prefix-icon="el-icon-search" v-model="energetype" style="width: 40%;">
				</el-input>
				<el-button @click="search()">查询</el-button>
				<el-button @click="add()">添加</el-button>
		</div>
		<div>
			<el-table :data="list">
				  <el-table-column prop="sid" label="折标煤主键" width="160"  align='center'></el-table-column>
				  <el-table-column prop="energetype" label="能源类别" width="160"  align='center'></el-table-column>
				  <el-table-column prop="ratio" label="系数"	width="160"  align='center'></el-table-column>
				  <el-table-column label="操作" width="220">
					  <template slot-scope = "scope">
						<el-button size="small"  @click="edit(scope.row.sid)">修改</el-button>
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
				energetype:'',
				list:[]
			};
		},
		methods:{
			search(){
				var url = this.baseUrl+"/energyStandradcoal/search"
				var data = {energetype:this.energetype};
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
				this.$router.push({path:'/StandradcoalAdd'});
			},
			del(row){
				var url = this.baseUrl+"/energyStandradcoal/delete"
				var data = {sid:row.sid};
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
			edit(sid){
				this.$router.push({name:"StandradcoalEdit",params:{row:sid}});
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
