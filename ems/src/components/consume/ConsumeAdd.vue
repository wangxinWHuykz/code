<!-- html部分 -->
<template>
	<div>
		<h1>能耗信息添加页面💗</h1>
		<el-row style="margin-bottom: 20px;">
		  <el-col :span="12">
				<el-select v-model='devid' style='width:45%;' placeholder="请选择设备名称">
					<el-option v-for='(obj,index) in baseDevice' :key="obj.devid" :label='obj.devname' :value='obj.devid'></el-option>
				</el-select>
		  </el-col>
		  <el-col :span="12"><el-input style='width:45%' v-model='electric' placeholder='请输入电耗(kw.h)'></el-input> </el-col>
		</el-row>
		<el-row style="margin-bottom: 20px;">
		  <el-col :span="12"><el-input style='width:45%' v-model='water' placeholder='请输入水耗(吨)'></el-input> </el-col>
		  <el-col :span="12"><el-input style='width:45%' v-model='oil' placeholder='请输入油耗(L)'></el-input> </el-col>
		</el-row>
		<el-row style="margin-bottom: 20px;">
		  <el-col :span="12">
				<el-select v-model='reportid' style='width:45%;' placeholder="请选择报岗id">
					<el-option v-for='(obj,index) in produceReport' :key="obj.reportid" :label='obj.shipname' :value='obj.reportid'></el-option>
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
				devid:'',
				devname:'',
				electric:'',
				water:'',
				oil:'',
				reportid:'',
				shipname:'',
				baseDevice:[],
				produceReport:[]
			};
		},
		methods:{
			add(){
				var url = this.baseUrl+"/energyConsume/insert"
				var data = {devid:this.devid,electric:this.electric,
				water:this.water,oil:this.oil,reportid:this.reportid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
			}).then(res=>{
				this.$message("添加成功");
				this.$router.push({path:'/ConsumeList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
			mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/energyConsume/list";
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.energyConsume = res.data;
			});
			
			var url = this.baseUrl+"/produceReport/list";
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.produceReport = res.data;
			});
			
			var url = this.baseUrl+"/baseDevice/list";
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.baseDevice = res.data;
			});
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
