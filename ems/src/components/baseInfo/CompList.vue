<!-- html部分 -->
<template>
	<div>
		<h1>企业信息❤</h1>
		<div style="text-align: left;margin-bottom: 20px;">
			<el-input placeholder="公司名称" v-model="search_compname" style="width: 260px;">
			</el-input>
			<el-input placeholder="行业" v-model="search_industry" style="width: 260px;">
			</el-input>
				<el-button @click="search" icon="el-icon-search">查询</el-button>
				<el-button @click="add">添加</el-button>
				</div>
				<div>		
				<el-table :data="list" border>
						<el-table-column prop="compid" label="ID" width="130" align='center'></el-table-column>
						<el-table-column prop="compname" label="公司名称" width="130" align='center'></el-table-column>
						<el-table-column prop="contacts" label="联系人" width="130" align='center'></el-table-column>
						<el-table-column prop="comptel" label="联系电话" width="130" align='center'></el-table-column>
						<el-table-column prop="industry" label="行业" width="130" align='center'></el-table-column>
						<el-table-column prop="address" label="地址" width="130" align='center'></el-table-column>
						<el-table-column label="操作" width="230">
						<template slot-scope = "scope">	
						<el-button @click="edit(scope.row)" size="small">编辑</el-button>
						<el-button type="danger" size="small" @click="del(scope.row)"><i class="el-icon-delete"></i></el-button>
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
				value1:'',
				search_compname:"",
				search_industry:"",
				list:[]
			};
		},
		methods:{
			add(){
				this.$router.push({path:'/CompAdd'});
			},
			del(row){
				var url = this.baseUrl+"/baseCompany/delete"
				var data = {compid:row.compid};
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
				this.$router.push({name:'CompEdit',params:{row:row}})
			},
			search(){
							var url = this.baseUrl+"/baseCompany/search"
							var data = {compname:this.search_compname,industry:this.search_industry};
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
			var url = this.baseUrl+"/baseCompany/list"
			this.$axios.post(url,{
				headers:{
					'Content-Type':'application/x-www-from-urlencoded;charset=UTF-8'
				}
			}).then(res=>{
				this.list = res.data;
			});
			this.search();
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
