<template>
  <header v-on:click="changeTitle">
    <h1>{{title1}}{{title}}</h1>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
        title1:"Vue.js Demo"
    }
  },
  props:{
      title:{
          type:String
      }
  },
  methods: {
      changeTitle:function(){
        //   this.title="changed"
        this.$emit("titleChanged","子向父组件传值")
      }
  },
//   beforeCreate() {
//         alert("组件实例化之前的函数")
//   },
//   created() {
//       alert("组件加载完毕页面还未显示")
//   },
//   beforeMount() {
//       alert("组件挂在前，页面仍未展示，但虚拟dom已经配置了")
//   },
//   mounted() {
//       alert("组件挂在后，此方法执行后，页面显示")
//   },
//   beforeUpdate() {
//       alert("组建更新前，页面仍未更新，但虚拟dom已经配置了")
//   },
//   updated() {
//        alert("此方法执行后，页面显示")
//   },
//   beforeDestroy() {
//       alert("组件销毁前")
//   },
//   destroyed() {
//       alert("组件已经销毁")
//   },
}
</script>


<style scoped>

    header{
        background:lightgreen;
        padding: 10px;
    }
    h1{
        color: #222;
        text-align: center;
    }
</style>
