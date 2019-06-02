<!-- html部分 -->
<template>
	<div>
		<h1>设备信息编辑页面</h1>
		<el-row style="margin-bottom: 20px;">
		  <el-col :span="12">
				<el-select v-model='devname' style='width:45%;' placeholder="请选择设备名称">
					<el-option v-for='(obj,index) in baseDevice' :key="obj.devname" :label='obj.devname' :value='obj.devname'></el-option>
				</el-select>
		  </el-col>
		  <el-col :span="12">
				<el-select v-model='typeid' style='width:45%;' placeholder="请选择设备类别">
					<el-option v-for='(obj,index) in baseDevtype' :key="obj.typeid" :label='obj.typename' :value='obj.typeid'></el-option>
				</el-select>
		  </el-col>
		</el-row>
		<el-row style="margin-bottom: 20px;">
			<el-col :span="12"style="width: 50%;"> 				
				<el-date-picker v-model="devdate" type="datetime" placeholder="选择预计到港时间" value-format="yyyy-MM-dd HH:mm:ss"> </el-date-picker>
			</el-col>
			<el-col :span="12"><el-input style='width:45%' v-model='devuser' placeholder='请输入责任人'></el-input> </el-col>
		</el-row>
		<el-row style="margin-bottom: 40px;">
		  <el-col :span="12">
			<el-select v-model='compid' style='width:45%;' placeholder="请选择企业名称">
				<el-option v-for='(obj,index) in baseCompany' :key="obj.compid" :label='obj.compname' :value='obj.compid'></el-option>
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
				devid:"",
				devname:"",
				typeid:"",
				devdate:"",
				devuser:"",
				compid:"",
				baseDevice:[],
				baseCompany:[],
				baseDevtype:[]
			};
		},
		methods:{
				update(){
				var url = this.baseUrl+"/baseDevice/update"
				var data = {devid:this.devid,devname:this.devname,typeid:this.typeid,
				devdate:this.devdate,devuser:this.devuser,compid:this.compid};
						this.$axios.post(url,this.$qs.stringify(data),{
							headers: {
								'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
							}
					}).then(res=>{
						this.$message("修改成功");
						this.$router.push({path:'/DeviceList'});
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
				this.baseDevice = res.data;
			});
			
			var url = this.baseUrl+"/baseCompany/list";
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.baseCompany = res.data;
			});
			
			var url = this.baseUrl+"/baseDevtype/list";
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.baseDevtype = res.data;
			});
			var obj=this.$route.params.row;
			this.devid = obj.devid;
			this.devname = obj.devname;
			this.typeid = obj.typeid;
			this.devdate = obj.devdate;
			this.devuser = obj.devuser;
			this.compid = obj.compid;
	}
	}
</script>
<!-- css部分 -->
<style>

</style>
