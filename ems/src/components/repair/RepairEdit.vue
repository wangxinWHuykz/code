<!-- html部分 -->
<template>
	<div>
		<h1>维修记录修改页面</h1>
		<el-row style="margin-bottom: 20px;">
		  <el-col :span="12">
				<el-select v-model='devid' style='width:45%;' placeholder="请选择设备名称">
					<el-option v-for='obj in userArr' :key="obj.devid" :label='obj.devname' :value='obj.devid'></el-option>
				</el-select>
		  </el-col>
		  <el-col :span="12"><el-input style='width:45%' v-model='cause' placeholder='请输入维修原因'></el-input> </el-col>
		</el-row>
		<el-row style="margin-bottom: 20px;">
		  <el-col :span="12"><el-input style='width:45%' v-model='cost' placeholder='请输入维修费用'></el-input> </el-col>
		  <el-col :span="12"style="width: 50%;"> 				
				<el-date-picker v-model="repairdate" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"> </el-date-picker>
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
				repairid:'',
				devid:'',
				cause:'',
				cost:'',
				repairdate:'',
				userArr:[]
			};
		},
		methods:{
					update(){
					var url = this.baseUrl+"/produceRepair/update"
					var data = {repairid:this.repairid,devid:this.devid,cause:this.cause,cost:this.cost,repairdate:this.repairdate};
							this.$axios.post(url,this.$qs.stringify(data),{
								headers: {
									'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
								}
						}).then(res=>{
							this.$message("修改成功");
							this.$router.push({path:'/RepairList'});
							})
					},
				cancel(){
					this.$router.go(-1);
				}
			},
			mounted:function(){
				var url = this.baseUrl+"/baseDevice/list";
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.userArr = res.data;
				});
				var repairid=this.$route.params.row;
				var url = this.baseUrl+"/produceRepair/load";
				var data = {repairid:repairid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					var obj=res.data;
					this.repairid = obj.repairid;
					this.devid = obj.devid;
					this.cause = obj.cause;
					this.cost = obj.cost;
					this.repairdate = obj.repairdate;
				});
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
