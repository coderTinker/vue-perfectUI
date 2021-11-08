<template>
  <div id="demo" class="demo">
    <div id="top" class="top">
      <div class="top-left">
        <img @click="clickBack" class="top-back" src="/img/back.svg" />
      </div>
      <div class="top-title">{{$route.meta.title}}</div>
      <div class="top-right"></div>
    </div>
    <div id="showBox" class="show-box">
      <div class="show-title">演示效果</div>
      <!-- subsection组件展示代码 -->
      <k-subsection
        class="show-component"
        style="height:40px;flex:auto 0 0;"
        :list="['待付款','待收货','待评价']"
        :index="index"
        :mainStyle="mainStyle"
        :bold="bold"
        :type="type"
      ></k-subsection>
    </div>
    <div id="head" class="params-head">参数配置</div>
    <div class="params-body" :style="{height:paramsHeight + 'px'}">
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">主题样式</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['default','primary','error','warning','success']"
          @change="changeStyle"
          :index="params[0]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">类型选择</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['常规','精致']"
          @change="changeType"
          :index="params[1]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">Current值</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['0','1','2']"
          @change="changeCurrent"
          :index="params[2]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">字体加粗</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['是','否']"
          @change="changeBold"
          :index="params[3]"
        ></k-subsection>
      </div>
    </div>
  </div>
</template>

<script>
//已在全局注册此组件
export default {
  data() {
    return {
      //默认选中的current
      index: 0,
      //主题样式
      mainStyle: "default",
      //类型选择
      type: "normal",
      //选中字体是否加粗
      bold: true,

      //参数配置内容的自适应高度
      paramsHeight: 100,
      //默认参数配置
      params: [0, 0, 0, 0]
    };
  },
  methods: {
    //返回按键
    clickBack() {
      this.$router.replace("/");
    },
    //改变主题样式
    changeStyle(index) {
      const style = ["default", "primary", "error", "warning", "success"];
      this.mainStyle = style[index];
    },
    //改变类型
    changeType(index) {
      const Type = ["normal", "fine"];
      this.type = Type[index];
    },
    //改变Current值
    changeCurrent(index) {
      const current = [0, 1, 2];
      this.index = current[index];
    },
    //改变选中字体是否加粗
    changeBold(index) {
      const fontBlod = [true, false];
      this.bold = fontBlod[index];
    }
  },
  mounted() {
    //计算参数配置盒子的自适应高度
    this.paramsHeight =
      document.getElementById("demo").clientHeight -
      document.getElementById("top").clientHeight -
      document.getElementById("showBox").clientHeight -
      document.getElementById("head").clientHeight -
      20 -
      12;
  }
};
</script>

<style scoped>
</style>
