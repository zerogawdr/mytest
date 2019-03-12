import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Admin from '@/views/Admin'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/admin',
      name:'Admin',
      component: Admin
    },
    {
      path:'/login',
      name:'Login',
      component: Login
    },
    {
      path:'/',
      name:'Home',
      component: Home
    },
  ],
  mode:"history"
})
