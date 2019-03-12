// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import elementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
//vue的一个插件



import Iview from 'iview'
import 'iview/dist/styles/iview.css'
Vue.config.productionTip = false
//use方法用来注册插件
// Vue.use(elementUI)
Vue.use(Iview)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
