<!-- html部分 -->
<template>
	<div>
		<h1>添加流程信息</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:45%' v-model='flowname' placeholder='请输入流程信息'></el-input> </el-col>		  
		  <el-col :span="12">
			<el-select v-model='dljid' style='width:45%;' placeholder="请选择斗轮机">
			<el-option v-for='(obj,index) in userArr1' :key="obj.devname" :value='obj.devid'>{{obj.devname}}</el-option>
			</el-select>
		  </el-col>
		</el-row>
		<el-row style="margin-bottom: 20px;">
		  <el-col :span="12">
			  <el-select v-model='zcjid' style='width:45%;' placeholder="请选择装船机">
			  	<el-option v-for='(obj,index) in userArr2' :key="obj.devname" :value='obj.devid'>{{obj.devname}}</el-option>
			  </el-select>
		  </el-col>
		  <el-col :span="12">
		  	<el-select v-model='pdjid' style='width:45%;' placeholder="请选择皮带机">
		  		<el-option v-for='(obj,index) in userArr3' :key="obj.devname" :value='obj.devid'>{{obj.devname}}</el-option>
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
				flowid:'',
				flowname:'',
				dljid:'',
				zcjid:'',
				pdjid:'',
				compid:'',
				userArr1:[],
				userArr2:[],
				userArr3:[]
			};
		},
		methods:{
			add(){
				var url = this.baseUrl+"/baseFlow/insert"
				var data = {flowname:this.flowname,
				dljid:this.dljid,zcjid:this.zcjid,pdjid:this.pdjid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
			}).then(res=>{
				this.$message("添加成功");
				this.$router.push({path:'/FlowList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/baseDevice/findDljByCompid";
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.userArr1 = res.data;
			});
			var url = this.baseUrl+"/baseDevice/findCzjByCompid";
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.userArr2 = res.data;
			});
			var url = this.baseUrl+"/baseDevice/findPdjByCompid";
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.userArr3 = res.data;
			});
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
