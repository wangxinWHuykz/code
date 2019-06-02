<!-- html部分 -->
<template>
	<div>
		<h1>报岗修改页面</h1>
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
		  <el-col :span="24"> <el-button @click='update()' type='primary'>确定</el-button> <el-button @click='cancel()'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		data() {
			return {
				reportid:'',
				shipname:'',
				capacity:'',
				planjobtime:'',
				reportuser:'',
				compid:'',
				baseCompany:[]
			};
		},
		methods:{
					update(){
					var url = this.baseUrl+"/produceReport/updateSelective"
					var data = {reportid:this.reportid,shipname:this.shipname,capacity:this.capacity,planjobtime:this.planjobtime,reportuser:this.reportuser,compid:this.compid};
							this.$axios.post(url,this.$qs.stringify(data),{
								headers: {
									'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
								}
						}).then(res=>{
							this.$message("修改成功");
							this.$router.push({path:'/ReportList'});
							})
					},
				cancel(){
					this.$router.go(-1);
				}
			},
			mounted:function(){
				var url = this.baseUrl+"/baseCompany/list";
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.baseCompany = res.data;
				});
				var reportid=this.$route.params.row;
				var url = this.baseUrl+"/produceReport/load";
				var data = {reportid:reportid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					var obj=res.data;
					this.reportid = obj.reportid;
					this.shipname = obj.shipname;
					this.capacity = obj.capacity;
					this.planjobtime = obj.planjobtime;
					this.reportuser = obj.reportuser;
					this.compid = obj.compid;
				});
		}		
	}
</script>
<!-- css部分 -->
<style>

</style>
