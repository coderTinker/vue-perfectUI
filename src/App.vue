<template>
  <div id="app">
    <keep-alive>
      <router-view :style="viewStyle"></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "APP",
  data() {
    return {};
  },
  methods: {
    //定时查询宽度变化
    checkWidth() {
      setInterval(() => {
        //跳转不支持页面
        if (window.innerWidth >= 768 && this.$route.path != "/noSupport") {
          this.$router.replace({
            path: "/noSupport"
          });
        }
        //跳转首页
        if (window.innerWidth < 768 && this.$route.path == "/noSupport") {
          this.$router.replace({
            path: "/home"
          });
        }
      }, 500);
    }
  },
  mounted() {
    //启动定时器
    this.checkWidth();
  },
  computed: {
    //路由页面样式
    viewStyle() {
      const style = {};
      style.width = "100vw";
      return style;
    }
  }
};
</script>

<style>
@import "assets/css/base.css";
</style>
