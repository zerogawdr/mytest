<template>
  <div id="app">
    <!-- <el-button size="mini">确定</el-button> -->
    <!-- <i-button>你好</i-button> -->
    <Button type="error" size="large">你好</Button>
    <Button >nihao </Button>
    <iSwitch></iSwitch>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style >
#app{
  margin: 20px auto;
}
</style>
