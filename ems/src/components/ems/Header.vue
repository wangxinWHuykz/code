<!-- html部分 -->
<template>
	<div style="height: 100%;">
		<el-header>
			<span>能耗综合分析平台</span>
			<div style="margin-right: 40px;display: inline-block;float: right;">
				<el-dropdown>
					  <span class="el-dropdown-link" style="font-weight: bold;color: white;font-size: 20px;">
						{{cname}}<i class="el-icon-arrow-down el-icon--right"></i>
					  </span>
					  <el-dropdown-menu slot="dropdown">
						<el-dropdown-item command="a">修改密码</el-dropdown-item>
						<el-dropdown-item command="b" @click.native='fn'>退出登录</el-dropdown-item>
					  </el-dropdown-menu>
					</el-dropdown>
			</div>
			<div style="margin-right: 60px;display: inline-block;float: right;">
				{{compname}}
			</div>
		</el-header>
	</div>
</template>
<!-- js部分 --> 
<script>
	export default {
		data() {
			return {
				cname:'',
				compname:''
			};
		},
		methods:{
			fn(){
				this.$router.push({path:'/Login'});
			}
		},
		mounted:function(){
			var obj = this.$route.params.obj;
			this.cname = obj.cname;
			this.compname = obj.baseCompany.compname;
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
