import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// state对象用来存储数据
var state={
	tags: [
          {name:'首页', type:'info',url:'/Welcome',index:'101'}
    ],
	defaultActive:"101",
	loginFlag:false
}
// mutations对象用来存储方法
var mutations = {
	addTag(state,obj){
		//先清除被选中的样式warning
		for(var item of state.tags){
			item.type='info';
		}
		//重复的不再添加
		for(var item of state.tags){
			if(item.name==obj.name){
				item.type='warning';
				return;
			}
		}
		state.tags.push(obj);
	},
	updateTag(state,index){
		//将所有type设置为空
		for(var item of state.tags){
			item.type='info';
		}
		//选中时改变样式为warning
		state.tags[index].type='warning';
	},
	delTag(state,index){
		state.tags.splice(index,1);
	},
	change(state,index){
		state.defaultActive=index;
	},
	delComp(state,date){
		for (var i = 0; i <state.compArr.length; i++) {
			if(state.compArr[i].date==date){
				state.compArr.splice(i,1);
			}
		}
	},
	addComp(state,comp){
		state,compArr.push(comp);
	}
}
// 创建一个store对象,并暴露出去 store对象有两个属性,state和mutations
export default new Vuex.Store({
	state,
	mutations
})