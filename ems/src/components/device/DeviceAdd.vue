<!-- html部分 -->
<template>
	<div>
		<h1>添加设备信息</h1>
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
		  <el-col :span="24"> <el-button @click='add()' type='primary'>添加</el-button> <el-button @click='cancel()'>返回</el-button> </el-col>
		</el-row>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				devid:"",
				devname:"",
				typeid:"",
				devdate:"",
				devuser:"",
				compid:"",
				baseDevice:[],
				baseDevtype:[],
				baseCompany:[]
			};
		},
		methods:{
			add(){
				var url = this.baseUrl+"/baseDevice/insert"
				var data = {devname:this.devname,typeid:this.typeid,
				devdate:this.devdate,devuser:this.devuser,compid:this.compid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
			}).then(res=>{
				this.$message("添加成功");
				this.$router.push({path:'/DeviceList'});
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
			});
			
			var url = this.baseUrl+"/baseDevtype/list";
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.baseDevtype = res.data;
			});
			
			var url = this.baseUrl+"/baseCompany/list";
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.baseCompany = res.data;
			});
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
