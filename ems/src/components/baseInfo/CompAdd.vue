<!-- html部分 -->
<template>
	<div>
		<h1>添加企业信息</h1>
		<template>
	<div>
		<el-row style="margin-bottom: 20px;">
		  <el-col :span="12"> <el-input style='width:45%' v-model='compname' placeholder='请输入日期'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:45%' v-model='contacts' placeholder='请输入姓名'></el-input> </el-col>
		</el-row>
		<el-row style="margin-bottom: 20px;">
		  <el-col :span="12"> <el-input style='width:45%' v-model='comptel' placeholder='请输入省份'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:45%' v-model='industry' placeholder='请输入市区'></el-input> </el-col>
		</el-row>
		<el-row style="margin-bottom: 20px;">
		  <el-col :span="12"> <el-input style='width:45%' v-model='address' placeholder='请输入地址'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:45%' v-model='zip' placeholder='请输入邮编'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="24"> <el-button @click='add()' type='primary'>添加</el-button> <el-button @click='cancel'>返回</el-button> </el-col>
		</el-row>
	</div>
</template>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		data() {
			return {
				compname:'',
				contacts:'',
				comptel:'',
				industry:'',
				address:'',
				zip:''
			};
		},
		methods:{
			add(){
				var url = this.baseUrl+"/baseCompany/insert"
				var data = {compname:this.compname,contacts:this.contacts,comptel:this.comptel,
				industry:this.industry,address:this.address};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.$message("添加成功");
					this.$router.push({path:'/CompList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
