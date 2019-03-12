<template>
  <div id="app">
    <input  v-sync.number='ivalue'   type="text">
     <input  v-model.number="ivalue"   type="text">
     <div v-listener:mouseover.stop="handler">as</div>
  </div>
</template>

<script>



export default {
  name: 'App',
  data() {
    return {
      ivalue:'100'
    }
  },
  methods: {
    handler(){
      // alert('1')
    }
  },
 
}
</script>

<style lang='less'>
  
  
</style>
