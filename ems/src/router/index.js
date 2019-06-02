import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/ems/Index'
import CompList from '@/components/baseInfo/CompList'
import CompAdd from '@/components/baseInfo/CompAdd'
import CompEdit from '@/components/baseInfo/CompEdit'
import Login from '@/components/ems/Login'
import Welcome from '@/components/ems/Welcome'
import DevtypeList from '@/components/devtype/DevtypeList'
import DevtypeAdd from '@/components/devtype/DevtypeAdd'
import DevtypeEdit from '@/components/devtype/DevtypeEdit'
import UserAdd from '@/components/user/UserAdd'
import UserList from '@/components/user/UserList'
import UserEdit from '@/components/user/UserEdit'
import DeviceAdd from '@/components/device/DeviceAdd'
import DeviceList from '@/components/device/DeviceList'
import DeviceEdit from '@/components/device/DeviceEdit'
import FlowAdd from '@/components/flow/FlowAdd'
import FlowList from '@/components/flow/FlowList'
import FlowEdit from '@/components/flow/FlowEdit'
import FaultAdd from '@/components/fault/FaultAdd'
import FaultList from '@/components/fault/FaultList'
import FaultEdit from '@/components/fault/FaultEdit'
import RepairAdd from '@/components/repair/RepairAdd'
import RepairList from '@/components/repair/RepairList'
import RepairEdit from '@/components/repair/RepairEdit'
import ReportAdd from '@/components/report/ReportAdd'
import ReportList from '@/components/report/ReportList'
import ReportEdit from '@/components/report/ReportEdit'
import Control from '@/components/Control'
import JobAdd from '@/components/job/JobAdd'
import JobList from '@/components/job/JobList'
import JobEdit from '@/components/job/JobEdit'
import ConsumeAdd from '@/components/consume/ConsumeAdd'
import ConsumeList from '@/components/consume/ConsumeList'
import ConsumeEdit from '@/components/consume/ConsumeEdit'
import StandradcoalAdd from '@/components/standradcoal/StandradcoalAdd'
import StandradcoalList from '@/components/standradcoal/StandradcoalList'
import StandradcoalEdit from '@/components/standradcoal/StandradcoalEdit'
import JobAmount from '@/components/amount/JobAmount'
import EnergyConsume from '@/components/energy/EnergyConsume'
import EnergyModel from '@/components/energy/EnergyModel'
import DevInfoList from '@/components/devInfo/DevInfoList'
import DevInfoHelp from '@/components/devInfo/DevInfoHelp'
import DevInfoUse from '@/components/devInfo/DevInfoUse'

Vue.use(Router)

export default new Router({
  routes: [
	  { path:'/Login', name: 'Login',component: Login},
		 {path: '/',name: 'Index',component: Index,children:[
			 { path:'Welcome', name: 'Welcome',component: Welcome},
			 { path:'CompList', name: 'CompList',component: CompList},
			 { path:'CompAdd', name: 'CompAdd',component: CompAdd},
			 { path:'CompEdit', name: 'CompEdit',component: CompEdit},
			 { path: 'DevtypeList',name: 'DevtypeList',component: DevtypeList},
			 { path: 'DevtypeAdd',name: 'DevtypeAdd',component: DevtypeAdd},
			 { path: 'DevtypeEdit',name: 'DevtypeEdit',component: DevtypeEdit},
			 { path:'UserList', name: 'UserList',component: UserList},
			 { path:'UserAdd', name: 'UserAdd',component: UserAdd},
			 { path:'UserEdit', name: 'UserEdit',component: UserEdit},
			 { path:'DeviceAdd', name: 'DeviceAdd',component: DeviceAdd},
			 { path:'DeviceList', name: 'DeviceList',component: DeviceList},
			 { path:'DeviceEdit', name: 'DeviceEdit',component: DeviceEdit},
			 { path:'FlowAdd', name: 'FlowAdd',component: FlowAdd},
			 { path:'FlowList', name: 'FlowList',component: FlowList},
			 { path:'FlowEdit', name: 'FlowEdit',component: FlowEdit},
			 { path:'FaultAdd', name: 'FaultAdd',component: FaultAdd},
			 { path:'FaultList', name: 'FaultList',component: FaultList},
			 { path:'FaultEdit', name: 'FaultEdit',component: FaultEdit},
			 { path:'RepairAdd', name: 'RepairAdd',component: RepairAdd},
			 { path:'RepairList', name: 'RepairList',component: RepairList},
			 { path:'RepairEdit', name: 'RepairEdit',component: RepairEdit},
			 { path:'ReportAdd', name: 'ReportAdd',component: ReportAdd},
			 { path:'ReportList', name: 'ReportList',component: ReportList},
			 { path:'ReportEdit', name: 'ReportEdit',component: ReportEdit},
			 { path:'Control', name: 'Control',component: Control},
			 { path:'JobAdd', name: 'JobAdd',component: JobAdd},
			 { path:'JobList', name: 'JobList',component: JobList},
			 { path:'JobEdit', name: 'JobEdit',component: JobEdit},
			 { path:'ConsumeAdd', name: 'ConsumeAdd',component: ConsumeAdd},
			 { path:'ConsumeList', name: 'ConsumeList',component: ConsumeList},
			 { path:'ConsumeEdit', name: 'ConsumeEdit',component: ConsumeEdit},
			 { path:'StandradcoalAdd', name: 'StandradcoalAdd',component: StandradcoalAdd},
			 { path:'StandradcoalList', name: 'StandradcoalList',component: StandradcoalList},
			 { path:'StandradcoalEdit', name: 'StandradcoalEdit',component: StandradcoalEdit},
			 { path:'JobAmount', name: 'JobAmount',component: JobAmount},
			 { path:'EnergyConsume', name: 'EnergyConsume',component: EnergyConsume},
			 { path:'EnergyModel', name: 'EnergyModel',component: EnergyModel},
			 { path:'DevInfoList', name: 'DevInfoList',component: DevInfoList},
			 { path:'DevInfoHelp', name: 'DevInfoHelp',component: DevInfoHelp},
			 { path:'DevInfoUse', name: 'DevInfoUse',component: DevInfoUse}
		 ]}
  ]
})
