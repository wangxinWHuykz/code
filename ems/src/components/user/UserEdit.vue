<!-- html部分 -->
<template>
	<div>
		<h1>人员信息编辑页面</h1>
		<el-row style="margin-bottom: 20px;">
		  <el-col :span="12"> <el-input style='width:45%' v-model='cname' placeholder='请输入姓名'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:45%' v-model='username' placeholder='请输入用户名'></el-input> </el-col>
		</el-row>
		<el-row style="margin-bottom: 20px;">
		  <el-col :span="12"> <el-input style='width:45%' v-model='password' placeholder='请输入密码'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:45%' v-model='telno' placeholder='请输入电话📞'></el-input> </el-col>
		</el-row>
		<el-row style="margin-bottom: 20px;">
		  <el-col :span="12"> <el-input style='width:45%' v-model='email' placeholder='请输入邮箱📫'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:45%' v-model='sex' placeholder='请输入性别'></el-input> </el-col>
		</el-row>
		<el-row style="margin-bottom: 20px;">
		  <el-col :span="12">
			  <el-select v-model='compid' style='width:45%;' placeholder="请选择">
			  	<el-option v-for='obj in userArr' :key="obj.compid" :label='obj.compname' :value='obj.compid'></el-option>
			  </el-select>
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="24"> <el-button @click='update()' type='primary'>确定</el-button> <el-button @click='del()'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		data() {
			return {
				cname:"",
				username:"",
				password:"",
				telno:"",
				email:"",
				sex:"",
				compid:"",
				userid:"",
				userArr:[]
			};
		},
		methods:{
			update(){
				var url = this.baseUrl+"/baseUser/update"
				var data = {cname:this.cname,username:this.username,password:this.password,
				telno:this.telno,email:this.email,sex:this.sex,compid:this.compid,userid:this.userid};
						this.$axios.post(url,this.$qs.stringify(data),{
							headers: {
								'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
							}
					}).then(res=>{
						this.$message("修改成功");
						this.$router.push({path:'/UserList'});
						})
				},
			del(){
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
				this.userArr = res.data;
			})
			var userid=this.$route.params.row;
			// 后端网址
			var url = this.baseUrl+"/baseUser/load";
			var data = {userid:userid};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				var obj = res.data;
				this.userid=obj.userid;
				this.cname=obj.cname;
				this.username=obj.username;
				this.password=obj.password;
				this.telno=obj.telno;
				this.email=obj.email;
				this.sex=obj.sex;
				this.compid=obj.compid;
			})
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
