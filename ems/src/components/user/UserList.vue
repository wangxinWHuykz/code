<!-- html部分 -->
<template>
	<div>
		<h1>人员信息❤</h1>
		<div style="text-align: left;margin-bottom: 20px;">
			<el-input placeholder="请输入用户名" v-model="username" style="width: 200px;"></el-input>
			<el-input placeholder="请输入密码" v-model="password" style="width: 200px;"></el-input>
			<el-button @click="search()">查询</el-button>
			<el-button @click="add()">新增</el-button>
		</div>
		<el-table :data="list">
			<el-table-column prop="userid" label="ID" width="130" align='center'></el-table-column>
			<el-table-column prop="cname" label="姓名" width="130" align='center'></el-table-column>
			<el-table-column prop="username" label="用户名" width="130" align='center'></el-table-column>
			<el-table-column prop="password" label="密码" width="130" align='center'></el-table-column>
			<el-table-column prop="telno" label="电话" width="130" align='center'></el-table-column>
			<el-table-column prop="email" label="邮箱" width="130" align='center'></el-table-column>
			<el-table-column prop="sex" label="性别" width="130" align='center'></el-table-column>
			<el-table-column prop="baseCompany.compname" label="所属企业" width="130"></el-table-column>
			<el-table-column label="操作" width="180">
				<template slot-scope="scope">
					<el-button @click="edit(scope.row)" size="small">编辑</el-button>
					<el-button @click="del(scope.row.userid)" type="danger" size="small">删除</el-button>
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
				username:'',
				password:''
			};
		},
		methods:{
			search(){
				var url = this.baseUrl+"/baseUser/search"
				var data = {username:this.username,password:this.password};
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
				this.$router.push({path:'/UserAdd'});
			},
			del(userid){
				var url = this.baseUrl+"/baseUser/delete"
				var data = {userid:userid};
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
				this.$router.push({name:"UserEdit",params:{row:row.userid}});
			}
		},
		mounted:function(){
			var url = this.baseUrl+"/baseUser/list"
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
