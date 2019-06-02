<!-- html部分 -->
<template>
	<div>
		<h1>作业信息添加页面</h1>
		<el-row style="margin-bottom: 20px;">
		  <el-col :span="12"><el-input style='width:45%' v-model='devid' placeholder='请输入设备名称'></el-input> </el-col>
		  <el-col :span="12"style="width: 50%;"> 				
		  				<el-date-picker v-model="starttime" type="datetime" placeholder="选择开始作业时间" value-format="yyyy-MM-dd HH:mm:ss"> </el-date-picker>
		  </el-col>
		</el-row>
		<el-row style="margin-bottom: 20px;">
		  <el-col :span="12"style="width: 50%;"> 				
				<el-date-picker v-model="completetime" type="datetime" placeholder="选择结束作业时间" value-format="yyyy-MM-dd HH:mm:ss"> </el-date-picker>
		  </el-col>
		  <el-col :span="12"><el-input style='width:45%' v-model='duration' placeholder='请输入运行时长'></el-input> </el-col>
		</el-row>
		<el-row style="margin-bottom: 20px;">
		  <el-col :span="12"><el-input style='width:45%' v-model='amount' placeholder='请输入作业量'></el-input> </el-col>
		  <el-col :span="12"><el-input style='width:45%' v-model='reportid' placeholder='请输入报岗id'></el-input> </el-col>
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
				devid:'',
				starttime:'',
				completetime:'',
				duration:'',
				amount:'',
				reportid:''
			};
		},
		methods:{
			add(){
				var url = this.baseUrl+"/produceJob/insert"
				var data = {devid:this.devid,starttime:this.starttime,completetime:this.completetime,duration:this.duration,amount:this.amount,reportid:this.reportid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
			}).then(res=>{
				this.$message("添加成功");
				this.$router.push({path:'/JobList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
			mounted:function(){
			// 后端网址
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
