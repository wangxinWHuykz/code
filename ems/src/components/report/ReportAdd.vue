<!-- html部分 -->
<template>
	<div>
		<h1>报岗添加页面</h1>
		<el-row style="margin-bottom: 20px;">
		  <el-col :span="12"><el-input style='width:45%' v-model='shipname' placeholder='请输入船队名称'></el-input> </el-col>
		  <el-col :span="12"><el-input style='width:45%' v-model='capacity' placeholder='请输入装载数量(吨)'></el-input> </el-col>
		</el-row>
		<el-row style="margin-bottom: 20px;">
		  <el-col :span="12"style="width: 50%;"> 				
				<el-date-picker v-model="planjobtime" type="datetime" placeholder="选择预计到港时间" value-format="yyyy-MM-dd HH:mm:ss"> </el-date-picker>
		  </el-col>
		  <el-col :span="12"><el-input style='width:45%' v-model='reportuser' placeholder='请输入报岗人'></el-input> </el-col>
		</el-row>
		<el-row style="margin-bottom: 20px;">
		  <el-col :span="12">
				<el-select v-model='compid' style='width:45%;' placeholder="请选择企业名称">
					<el-option v-for='obj in baseCompany' :key="obj.compid" :label='obj.baseCompany' :value='obj.compid'></el-option>
				</el-select>
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="24"> <el-button @click='add()' type='primary'>添加</el-button> <el-button @click='cancel()'>返回</el-button> </el-col>
		</el-row>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		data() {
			return {
				shipname:'',
				capacity:'',
				planjobtime:'',
				reportuser:'',
				compid:'',
				baseCompany:[]
			};
		},
		methods:{
			add(){
				var url = this.baseUrl+"/produceReport/insert"
				var data = {shipname:this.shipname,capacity:this.capacity,planjobtime:this.planjobtime,reportuser:this.reportuser,compid:this.compid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
			}).then(res=>{
				this.$message("添加成功");
				this.$router.push({path:'/ReportList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
			mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/baseCompany/list";
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.baseCompany = res.data;
			})
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
