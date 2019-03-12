

import Home from '@/components/home'
import Meun from '@/components/meun'
import Admin from '@/components/admin'
import Login from '@/components/login'
import Register from '@/components/register'
import About from '@/components/about/about'
//二级路由
import Contact from '@/components/about/Contact'
import Delivery from '@/components/about/Delivery'
import History from '@/components/about/History'
import OrderingGuide from '@/components/about/OrderingGuide'
//三级路由
import Phone from '@/components/about/contact/Phone'
import personName from '@/components/about/contact/personName'

//配置路由
export const routes=[
    {path:'/',name:'homeLink',components:{
        default:Home,
        'orderingGuide':OrderingGuide,
        'delivery':Delivery,
        'history':History
    }},
    {path:'/meun',name:'meunLink',component:Meun},
    {path:'/admin',name:'adminLink',component:Admin},
    {path:'/login',name:'loginLink',component:Login},
    {path:'/register',name:'registerLink',component:Register},
    {path:'/about',name:'aboutLink',redirect:'/about/Contact',component:About,children:[
      {path:'/about/Contact',name:'contactLink',component:Contact,children:[
        {path:"/Phone",name:'phoneNumber',component:Phone},
        {path:"/personName",name:'personName',component:personName},
      ]},
      {path:'/about/Delivery',name:'deliveryLink',component:Delivery},
      {path:'/about/OrderingGuide',name:'orderingGuideLink',component:OrderingGuide},
      {path:'/about/History',name:'historyLink',component:History},
    ]},
    {path:'*',redirect:'/'}
  ]

  