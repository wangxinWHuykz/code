<!-- html部分 -->
<template>
	<div>
		<div style="display: inline-block;width: 250px;margin: 10px 0 0 20px;">
			<h1>船队信息</h1>
			<el-table :data="reportList" :row-class-name="rowColor" @row-click="rowClick">
				<el-table-column align='center' prop="reportid" label="报岗ID" width="70"></el-table-column>
				<el-table-column align='center' prop="shipname" label="船队名称" width="100"></el-table-column>
				<el-table-column align='center' prop="status" label="状态" width="80"></el-table-column>
			</el-table>
		</div>
		<div style="display: inline-block;width: 800px;margin: 10px 0 0 20px;vertical-align: top;">
			<h1>中控信息</h1>
			<div style="font-size: 14px;color: #606266;">
				<el-row>
					<el-col :span="6"><div class="grid-content bg-purple">船队名称: {{shipname}}</div></el-col>
					<el-col :span="6"><div class="grid-content bg-purple-light">装载量: {{capacity}}</div></el-col>
					<el-col :span="6"><div class="grid-content bg-purple"> 报岗人: {{reportuser}}</div></el-col>
					<el-col :span="6"><div class="grid-content bg-purple"> 预计到港时间:<br/>{{planjobtime}}</div></el-col>
				</el-row>
				<el-row style='margin-top: 20px;'>
					<el-col :span="6" >
						<el-select placeholder="请选择流程" v-model='flowid' style='width: 150px;' @change="fn">
							<el-option v-for="item in flows" :key="item.flowid" :label="item.flowname" :value="item.flowid"></el-option>
						</el-select>
					</el-col>
					<el-col :span="6"><div class="grid-content bg-purple-light">斗轮机{{': '+dljname}}</div></el-col>
					<el-col :span="6"><div class="grid-content bg-purple"> 装船机{{': '+zcjname}}</div></el-col>
					<el-col :span="6"><div class="grid-content bg-purple"> 皮带机{{': '+pdjname}}</div></el-col>
				</el-row>
				<el-row style='margin-top: 20px;'>
					<el-col :span="6"><el-date-picker  v-model="startjobtime" style='width:190px' type="datetime" placeholder="选择开始时间" value-format='yyyy-MM-dd HH:mm:ss'></el-date-picker></el-col>
					<el-col :span="6"><el-button type='primary' :disabled="status!='未完成'" @click='start'>开始作业</el-button></el-col>
					<el-col :span="6"><el-date-picker v-model="completetime" style='width:190px' type="datetime" placeholder="选择结束时间" value-format='yyyy-MM-dd HH:mm:ss'> </el-date-picker></el-col>
					<el-col :span="6"><el-button type='success' :disabled="status!='作业中'" @click="end">结束作业</el-button></el-col>
				</el-row>
				<div class="boat">
					<div class="wrap">
						<!-- 煤 -->
						<transition name="slide-fade"><div class="coal" v-if="show">&bull;</div></transition>
						<!-- 皮带 -->
						<div class="strap"></div>
						<!-- 船 -->
						<div class="main">
							<div class="boat-mid-layer">
								<div class="top" style='padding-left:40px;color:black'>已装船{{count}}吨</div>
								<div class="bottom"></div>
							</div>
							<div class="boat-bot-layer">
								<div class="top"></div>
								<div class="bottom"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		data() {
			return {
				startjobtime:'',
				completetime:'',
				flowid:'',
				reportid:'',
				capacity:'',
				shipname:'',
				reportuser:'',
				planjobtime:'',
				show:true,
				reportList:[],
				count:0,
				flows:[],
				timer:'',
				dljname:'',
				pdjname:'',
				zcjname:'',
				status:"",
			}
		},
		methods:{
			rowColor(row){
				if(row.row.status=='作业中'){
					return 'yellow';
				}else if(row.row.status=='已完成'){
					return 'green';
				}else{
					return '';
				}
			},
			rowClick(row){
				var reportid = row.reportid;
				for(var obj of this.reportList){
					if(obj.reportid==reportid){
						this.startjobtime = obj.startjobtime;
						this.completetime = obj.completetime;
						this.flowid = obj.flowid;
						this.reportid = obj.reportid;
						this.capacity = obj.capacity;
						this.shipname = obj.shipname;
						this.reportuser = obj.reportuser;
						this.planjobtime = obj.planjobtime;
						this.status=obj.status
					}
				}
			},
			fn(){
				var url = this.baseUrl+"/baseFlow/load"
				// 传递给后端的数据
				var data = {flowid:this.flowid};
				
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					var obj = res.data;
					this.dljname=obj.dljname;
					this.zcjname=obj.zcjname;
					this.pdjname=obj.pdjname;
				})
			},
			start(){
				var url = this.baseUrl+"/produceReport/updateSelective"
				// 传递给后端的数据
				var data = {reportid:this.reportid,startjobtime:this.startjobtime,flowid:this.flowid};
				
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// this.status = '作业中';
					this.reportList=res.data;
				});
				if(this.count<=this.capacity){
					this.timer=setInterval(()=>{
						this.show=!this.show;
						this.count++;
					},2000);
				}else{
					clearInterval(this.timer);
				}
				this.status='作业中';
			},
			end(){
				var url = this.baseUrl+"/produceReport/completeTask"
				// 传递给后端的数据
				var data = {reportid:this.reportid,startjobtime:this.startjobtime,
				flowid:this.flowid,completetime:this.completetime,capacity:this.capacity};
				
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.reportList=res.data;
				})
				
				this.status='已完成';
			
				clearInterval(this.timer);
			}
		},
		
		
		mounted(){
			// alert(this.status)
				var url = this.baseUrl+"/produceReport/list"
				// 传递给后端的数据
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.reportList=res.data;
				});
			
				var url2 = this.baseUrl+"/baseFlow/list"
				console.log(url2)
				// 传递给后端的数据
				this.$axios.post(url2,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					
					this.flows=res.data;
				});
				
		}
	}
</script>
<!-- css部分 -->
<style>
.el-table .yellow{
	background: lightyellow;
}
.el-table .green{
	background: lightgreen;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all 2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translate(600px,84px);
  opacity: 1;
}
.boat{
}
.boat .wrap{
	margin:auto;width:100%;height:200px;overflow:hidden;margin-top: 30px;
	position:relative;background: darkgrey;border-radius: 10px;
}
.boat .wrap .strap{
	float: left;display: inline-block;background: lightblue;width: 600px;height: 20px;
	margin: 100px 0 0 -25px;transform:skew(20deg,8deg);/*设置倾斜度为-30*/z-index: 2;
}
.boat .wrap .main{
	margin: 100px 0 0 75%;
}
.boat .wrap  .coal{
	float: left;display: inline-block;font-size: 100px;
	margin: -30px 0 0 5px;z-index: 5;
}
.boat .boat-bot-layer .bottom:before,
.boat .boat-bot-layer .bottom:after,
.boat .water .drop:before,
.boat .water .drop:after{
	content:'';position:absolute;
}
/* middle - bottom */
.boat .boat-mid-layer .bottom{
	left:25px;width:150px;height:18px;
	background:#fff;position:relative;
}
/* bottom - bottom */
.boat .boat-bot-layer .bottom{
	width:180px;
	height:25px;
	position:relative;
	border-radius:2px;
	background:#222e28;
}
.boat .boat-bot-layer .bottom:before{
	left:-15px;
	width:25px;
	height:25px;
	background:inherit;
	border-radius:inherit;
	-webkit-transform:skewX(25deg);
	-ms-transform:skewX(25deg);
	    transform:skewX(25deg);
}
.boat .boat-bot-layer .bottom:after{
	right:-15px;
	width:25px;
	height:25px;
	background:inherit;
	border-radius:inherit;
	-webkit-transform:skewX(-25deg);
	-ms-transform:skewX(-25deg);
	    transform:skewX(-25deg);
}
</style>
