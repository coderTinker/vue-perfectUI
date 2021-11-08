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
      <!-- progress组件展示代码 -->
      <k-progress
        style="height:30px;flex:auto 0 0;"
        class="show-component"
        :progressColor="progressColor"
        :fontMode="fontMode"
        :percent="percent"
        :decimal="decimal"
      ></k-progress>
    </div>
    <div id="head" class="params-head">参数配置</div>
    <div class="params-body" :style="{height:paramsHeight + 'px'}">
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">进度条样式</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['primary','error','warning','success']"
          @change="changeStyle"
          :index="params[0]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">增减</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['减少30%','增加30%']"
          @change="changePercent"
          :index="params[1]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">文字显示</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['居中','跟随','隐藏']"
          @change="changeMode"
          :index="params[2]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">百分比显示小数</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['是','否']"
          @change="changeDecimal"
          :index="params[3]"
        ></k-subsection>
      </div>
    </div>
  </div>
</template>

<script>
//局部引入组件
import Kprogress from "components/common/baseUI/k-progress/progress.vue";
export default {
  components: {
    "k-progress": Kprogress
  },
  data() {
    return {
      //进度条背景色
      progressColor: "primary",
      //进度条文字显示
      fontMode: "center",
      //进度条进度
      percent: 50,
      //是否显示小数
      decimal: false,

      //参数配置内容的自适应高度
      paramsHeight: 100,
      //默认参数配置
      params: [0, 0, 0, 1]
    };
  },
  methods: {
    //返回按键
    clickBack() {
      this.$router.replace("/");
    },
    //背景样式改变
    changeStyle(index) {
      const style = ["primary", "error", "warning", "success"];
      this.progressColor = style[index];
    },
    //进度条进度百分比改变
    changePercent(index) {
      const changePer = [-30, 30];
      this.percent = this.percent + changePer[index];
    },
    //进度条文字显示改变
    changeMode(index) {
      const mode = ["center", "with", "none"];
      this.fontMode = mode[index];
    },
    //进度条显示小数改变
    changeDecimal(index) {
      const showDecimal = [true, false];
      this.decimal = showDecimal[index];
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
