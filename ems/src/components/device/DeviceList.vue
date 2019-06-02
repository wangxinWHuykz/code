<!-- html部分 -->
<template>
	<div>
		<h1>设备信息❤</h1>
		<div style="text-align: left;margin-bottom: 20px;">
				<el-input placeholder="请输入机器名称" v-model="devname" style="width: 20%;"></el-input>
				<el-button @click="search()">查询</el-button>
				<el-button @click="add()">新增</el-button>
		</div>
		<div>
			 <el-table :data="list" border>
				 <el-table-column prop="devid" label="设备Id" width="130" align='center'></el-table-column>
				 <el-table-column prop="devname" label="设备名称" width="130" align='center'></el-table-column>
				 <el-table-column prop="baseDevtype.typename" label="设备类别" width="130" align='center'></el-table-column>
				 <el-table-column prop="devdate" label="投入时间" width="130" align='center'></el-table-column>
				 <el-table-column prop="devuser" label="责任人" width="130" align='center'></el-table-column>
				  <el-table-column prop="baseCompany.compname" label="所属企业" width="130" align='center'></el-table-column>
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
		name:'',
		data() {
			return {
				devname:"",
				list:[],
			};
		},
		methods:{
			search(){
				var url = this.baseUrl+"/baseDevice/search"
				var data = {devname:this.devname};
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
				this.$router.push({path:'/DeviceAdd'});
			},
			del(row){
				var url = this.baseUrl+"/baseDevice/delete"
				var data = {devid:row.devid};
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
				this.$router.push({name:"DeviceEdit",params:{row:row}});
			}
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/baseDevice/list"
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
