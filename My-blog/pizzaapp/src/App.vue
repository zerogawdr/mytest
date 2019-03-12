<template>
  <div id="app">
    <div class="container">
      <vue-header></vue-header>
      
    </div>
    <div class="container">
        <router-view></router-view>
    </div>
    <br>
    <div class="container btn">
        <div class="row">
          <div class="col-sm-12 col-md-4">
               <router-view name='orderingGuide'></router-view>
          </div>
          <div class="col-sm-12 col-md-4">
               <router-view name='delivery'></router-view>
          </div>
          <div class="col-sm-12 col-md-4">
               <router-view name='history'></router-view>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import header from '@/components/header'

export default {
  name: 'App',
  components: {
    'vue-header':header
  }
}
</script>

<style>

</style>
