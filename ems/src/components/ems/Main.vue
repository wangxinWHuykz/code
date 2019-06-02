<!-- html部分 -->
<template>
	<div>
		<div style="text-align: left;height: 32px;line-height: 32px;">
			<el-tag
				  v-for="(tag,index) in $store.state.tags"
				  :key="tag.name"
				  closable
				  style='margin-right: 10px;'
				  :type="tag.type" @click="fn(tag,index)" @close="del(tag,index)">
				  {{tag.name}}
				</el-tag>
		</div>
		<router-view/>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		data() {
			return {
					
			};
		},
		methods:{
			fn(tag,index){
				this.$router.push({path:tag.url});
				this.$store.commit('updateTag',index);
				this.$store.commit('change',tag.index);
			},
			del(tag,index){
				if(this.$store.state.tags.length==1){
					this.$message("最后一个不能被删除");
				}else{
					// <!-- 删除 -->
					var flag = this.$store.state.tags[index].type=='warning';
					this.$store.commit('delTag',index);
					if(flag){  //判断type='warning'
						if(index==0){
							this.$store.commit('updateTag',0);
							this.$router.push({path:this.$store.state.tags[0].url});
						}else{
							this.$store.commit('updateTag',index-1);
							this.$router.push({path:this.$store.state.tags[index-1].url});
						}	
					}
				}
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
