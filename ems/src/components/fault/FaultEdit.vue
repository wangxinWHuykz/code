<!-- html部分 -->
<template>
	<div>
		<h1>故障信息修改页面</h1>
		<el-row>
		   <el-col :span="12">
		  		<el-select v-model='devid' style='width:45%;' placeholder="请选择设备">
		  			<el-option v-for='(obj,index) in baseDevice' :key="obj.devid"  :value='obj.devid'>{{obj.devname}}</el-option>
		  	    </el-select>
		   </el-col>
		  <el-col :span="12"> <el-input style='width:45%' v-model='cause' placeholder='请输入故障原因'></el-input> </el-col>
		</el-row>
		<el-row style="margin-bottom: 20px;">
		  <el-col :span="12"> <el-input style='width:45%' v-model='faultuser' placeholder='请输入报告人'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:45%' v-model='faulttime' placeholder='请输入维修时间'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="24"> <el-button @click='update()' type='primary'>确定</el-button><el-button @click='cancel()'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		data() {
			return {
				faultId:'',
				devid:'',
				cause:'',
				faultuser:'',
				faulttime:'',
				baseDevice:[]
			};
		},
		methods:{
					update(){
					var url = this.baseUrl+"/produceFault/update"
					var data = {faultId:this.faultId,devid:this.devid,cause:this.cause,
					faultuser:this.faultuser,faulttime:this.faulttime};
							this.$axios.post(url,this.$qs.stringify(data),{
								headers: {
									'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
								}
						}).then(res=>{
							this.$message("修改成功");
							this.$router.push({path:'/FaultList'});
							})
					},
				cancel(){
					this.$router.go(-1);
				}
			},
			mounted:function(){
				var url = this.baseUrl+"/produceFault/list";
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.userArr = res.data;
				});
				var obj=this.$route.params.row;
				this.faultId = obj.faultId;
				this.devid = obj.devid;
				this.cause = obj.cause;
				this.faultuser = obj.faultuser;
				this.faulttime = obj.faulttime;
				
				var url = this.baseUrl+"/baseDevice/list";
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.baseDevice = res.data;
				})
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
