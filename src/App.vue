<template>
  <div id="app">
    <keep-alive>
    <router-view :style="viewStyle"></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name:'APP',
  data() {
    return {
    }
  },
  methods: {
  },
  computed:{
    //路由页面样式
    viewStyle() {
      const style = {}
      style.width = '100vw'
      // style.height = '100vh'
      return style
    }
  }


}
</script>

<style>
@import 'assets/css/base.css';
</style>
