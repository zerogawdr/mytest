
<template>
  <div id="home">
    
    <app-header v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-header>
    <users :users="users=users"></users>
    <users :users="users=users"></users>
    <app-footer v-bind:title="title"></app-footer>
  </div>
  
</template>

<script>
//局部注册组件
import Users from './Users'
import Header from './header'
import Footer from './footer'


export default {
  name: 'home',
  data(){
    return {
      // title:"这是我的第一个Vue脚手架项目"
       users:[
        //   {name:'chenxu',position:'web前端工程师',show:false},
        //   {name:'彭47',position:'家里蹲大师',show:false},
        //   {name:'张瑞',position:'究极死宅',show:false},
        //   {name:'刘宁',position:'奋斗小青年',show:false},
        //   {name:'张志强',position:'钓鱼达人',show:false},
        //   {name:'岳伟',position:'欠钱大师',show:false},
        //   {name:'袁世军',position:'咸鱼',show:false},      
      ],
      title:"传递的是一个值,(numberr string boolean)"
    }
  },
  methods: {
    updateTitle(title){
      this.title=title
    }
  },
  components:{
    "users":Users,
    "app-header":Header,
    "app-footer":Footer
  },
  created() {
      this.$http.get("http://jsonplaceholder.typicode.com/users")
      .then((data) =>{
        //   console.log(data)
        this.users=data.body;
      })
      
  }
  
}




</script >

<style>

</style>
