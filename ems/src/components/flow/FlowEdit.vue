<!-- html部分 -->
<template>
	<div>
		<h1>流程信息编辑页面</h1>
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
		  <el-col :span="24"> <el-button @click='update()' type='primary'>确定</el-button> <el-button @click='cancel()'>返回</el-button> </el-col>
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
				update(){
				var url = this.baseUrl+"/baseFlow/update"
				var data = {flowid:this.flowid,flowname:this.flowname,
				dljid:this.dljid,zcjid:this.zcjid,pdjid:this.pdjid,compid:this.compid};
						this.$axios.post(url,this.$qs.stringify(data),{
							headers: {
								'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
							}
					}).then(res=>{
						this.$message("修改成功");
						this.$router.push({path:'/FlowList'});
						})
				},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
				var obj=this.$route.params.row;
				this.flowid = obj.flowid;
				this.flowname = obj.flowname;
				this.dljid = obj.dljid;
				this.zcjid = obj.zcjid;
				this.pdjid = obj.pdjid;
				this.compid = obj.compid;
				 var a = this.baseUrl+"/baseDevice/findDljByCompid"
			 // 传递给后端的数据
			 this.$axios.post(a,{
			 	headers: {
			 		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
			 	}
			 }).then(res=>{
			 	this.userArr1=res.data;
			 	
			 });
			 
			 var b = this.baseUrl+"/baseDevice/findCzjByCompid"
			 // 传递给后端的数据
			 this.$axios.post(b,{
			 	headers: {
			 		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
			 	}
			 }).then(res=>{
			 	this.userArr2=res.data;
			 });
			 var c = this.baseUrl+"/baseDevice/findPdjByCompid"
			 // 传递给后端的数据
			 this.$axios.post(c,{
			 	headers: {
			 		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
			 	}
			 }).then(res=>{
			 	this.userArr3=res.data;
			 });
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
