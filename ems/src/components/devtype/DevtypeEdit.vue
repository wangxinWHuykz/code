<!-- html部分 -->
<template>
	<div>
		<h1>设备类别编辑页面</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:45%' v-model='typename'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="24"> <el-button @click='save()' type='primary'>确定</el-button> <el-button @click='cancel()'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				typeid:'',
				typename:"",
			};
		},
		methods:{
			save(){
				var url = this.baseUrl+"/baseDevtype/update"
					var data = {typeid:this.typeid,typename:this.typename};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
				}).then(res=>{
					this.$message("修改成功");
					this.$router.push({path:'/DevtypeList'});
					})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			var obj=this.$route.params.row;
			this.typename=obj.typename;
			this.typeid=obj.typeid;
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
