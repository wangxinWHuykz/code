<!-- html部分 -->
<template>
	<view class="content">
		<view>
			<input type="text" placeholder="请输入用户名" v-model="username" />
			<view>
				<input type="password" placeholder="请输入密码" v-model="password" />
				<uni-icon type="eye" size="20" @click="fn"></uni-icon>
			</view>
			<button @click="login">登录</button>
		</view>
	</view>
</template>
<!-- js部分 -->
<script>
	import uniIcon from '@dcloudio/uni-ui/lib/uni-icon/uni-icon.vue'
	export default {
		components: {uniIcon},
		data() {
			return {
				username: 'gfc',
				password: '123456',
				flag: 'password'
			};
		},
		methods: {
			fn() {
				if(this.flag=='password'){
					this.flag = 'text'
				}else{
					this.flag = 'password'
				}
			},
			login() {
				if(this.username.length <=0){
					uni.showToast({
						icon:'none',
						title:'请输入用户名'
					});
					return;
				}
				if(this.password.length <=0){
					uni.showToast({
						icon:'none',
						title:'请输入密码'
					});
					return;
				}
				uni.request({
					url: this.url+'baseUser/login', //仅为示例，并非真实接口地址。
					data: {
						username:this.username,
						password:this.password
					},
					header: {
						'custom-header': 'hello' //自定义请求头信息
					},
					success: (res) => {
						if((this.username != res.data.username)&&(this.password != res.data.password)){
							uni.showToast({
								icon:'none',
								title:'用户名或密码不正确'
							});
							
						}else{
							uni.switchTab({
								url:'index'
							});
							uni.showToast({
								icon:'none',
								title:'登录成功'
							});
							uni.setStorage({
								key:'baseUser',
								data:res.data
							})
						}
					},
					fail: () =>{
						uni.showToast({
							icon:'none',
							title:'网络异常 请稍后重试'
						});
					}
				});
			},
			onNavigationBarButtonTap(){  
				uni.navigateTo({
					url: 'register'
				});		  
			}
		},
	}
</script>
<!-- css部分 -->
<style>
	@import url("../../static/css/login.css");
</style>
