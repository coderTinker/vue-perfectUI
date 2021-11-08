<template>
  <div id="demo" class="demo">
    <k-toast
      @close="toastClose"
      :text="toastText"
      :show="toastShow"
      position="top"
      bgColor="success"
    ></k-toast>
    <div id="top" class="top">
      <div class="top-left">
        <img @click="clickBack" class="top-back" src="/img/back.svg" />
      </div>
      <div class="top-title">{{$route.meta.title}}</div>
      <div class="top-right"></div>
    </div>
    <div id="showBox" class="show-box">
      <div class="show-title">演示效果</div>
      <!-- noticebar组件展示代码 -->
      <k-noticebar
        class="show-component"
        style="flex:auto 0 0;"
        @moreClick="moreClick"
        :list="list"
        :mode="mode"
        :mainStyle="mainStyle"
        :status="status"
        :speed="speed"
        :showIcon="showIcon"
        :useConnect="useConnect"
      ></k-noticebar>
    </div>
    <div id="head" class="params-head">参数配置</div>
    <div class="params-body" :style="{height:paramsHeight + 'px'}">
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">主题</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['primary','error','warning','success','none']"
          @change="changeStyle"
          :index="params[0]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">状态</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['播放','暂停']"
          @change="changeStatus"
          :index="params[1]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">速度</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['慢','正常','快']"
          @change="changeSpeed"
          :index="params[2]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">图标</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['显示','隐藏']"
          @change="changeIcon"
          :index="params[3]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">是否衔接</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['是','否']"
          @change="changeConnect"
          :index="params[4]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">滚动模式</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['水平','垂直']"
          @change="changeMode"
          :index="params[5]"
        ></k-subsection>
      </div>
    </div>
  </div>
</template>

<script>
//局部引入组件
import Knoticebar from "components/common/highUI/k-noticebar/noticebar.vue";
export default {
  components: {
    "k-noticebar": Knoticebar
  },
  data() {
    return {
      //主题样式,分为primary,success,warning,error,none
      mainStyle: "primary",
      //播放状态
      status: "running",
      //播放内容
      list: [
        "锦瑟无端五十弦，一弦一柱思华年",
        "沧海月明珠有泪，蓝田日暖玉生烟"
      ],
      //展示的模式，默认为horizontal，horizontal表示从右到左，vertical表示从下到上
      mode: "horizontal",
      //播放速度,单位px/s
      speed: 40,
      //是否显示图标
      showIcon: true,
      //水平情况下是否衔接播放
      useConnect: true,
      //提示框显示文字
      toastText: "点击更多",
      //控制提示框是否显示
      toastShow: false,

      //参数配置内容的自适应高度
      paramsHeight: 100,
      //默认参数配置
      params: [0, 0, 1, 0, 0, 0]
    };
  },
  methods: {
    //返回按键
    clickBack() {
      this.$router.replace("/");
    },
    //点击更多事件
    moreClick() {
      this.toastShow = true;
    },
    //提示框关闭事件
    toastClose() {
      this.toastShow = false;
    },
    //背景样式改变
    changeStyle(index) {
      const style = ["primary", "error", "warning", "success", "none"];
      this.mainStyle = style[index];
    },
    //改变播放状态
    changeStatus(index) {
      const playStatus = ["running", "paused"];
      this.status = playStatus[index];
    },
    //改变播放速度,单位px/s
    changeSpeed(index) {
      const playSpeed = [20, 40, 60];
      this.speed = playSpeed[index];
    },
    //改变是否显示图标
    changeIcon(index) {
      const ShowIcon = [true, false];
      this.showIcon = ShowIcon[index];
    },
    //改变水平情况下是否衔接播放
    changeConnect(index) {
      const UseConnect = [true, false];
      this.useConnect = UseConnect[index];
    },
    //改变展示的模式，默认为horizontal，horizontal表示从右到左，vertical表示从下到上
    changeMode(index) {
      const useMode = ["horizontal", "vertical"];
      this.mode = useMode[index];
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
