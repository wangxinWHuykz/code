<!-- html部分 -->
<template>
	<div>
		<h1>折标煤修改页面</h1>
		<el-row style="margin-bottom: 20px;">
		  <el-col :span="12"><el-input style='width:45%' v-model='energetype' placeholder='请输入能源类别'></el-input> </el-col>
		  <el-col :span="12"><el-input style='width:45%' v-model='ratio' placeholder='请输入系数'></el-input> </el-col>
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
				sid:'',
				energetype:'',
				ratio:''
			};
		},
		methods:{
					update(){
					var url = this.baseUrl+"/energyStandradcoal/update"
					var data = {sid:this.sid,energetype:this.energetype,ratio:this.ratio};
							this.$axios.post(url,this.$qs.stringify(data),{
								headers: {
									'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
								}
						}).then(res=>{
							this.$message("修改成功");
							this.$router.push({path:'/StandradcoalList'});
							})
					},
				cancel(){
					this.$router.go(-1);
				}
			},
			mounted:function(){
				var url = this.baseUrl+"/energyStandradcoal/list";
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.energyStandradcoal = res.data;
				});
				var sid=this.$route.params.row;
				var url = this.baseUrl+"/energyStandradcoal/load";
				var data = {sid:sid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					var obj=res.data;
					this.sid = obj.sid;
					this.energetype = obj.energetype;
					this.ratio = obj.ratio;
				});
		}		
	}
</script>
<!-- css部分 -->
<style>

</style>
