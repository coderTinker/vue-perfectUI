<template>
  <div id="demo" class="demo">
    <k-toast @close='toastClose' :text="toastText" :show="toastShow" position="center"></k-toast>
    <div id="top" class="top">
      <div class="top-left">
        <img @click="clickBack" class="top-back" src="http://81.68.243.94/image/back.svg" />
      </div>
      <div class="top-title">{{$route.meta.title}}</div>
      <div class="top-right"></div>
    </div>
    <div id="showBox" class="show-box">
      <div class="show-title">演示效果</div>
      <k-button
        @click="btnClick"
        class="show-button"
        :style="{width:btnWidth+'%',height:btnHeight+'px'}"
        :fontSize="fontSize"
        :radius="radius"
        :bgColor="bgColor"
        :fontColor="fontColor"
        :disable="disable"
        :loading="loading"
      >{{btnText}}</k-button>
      <!-- button组件展示代码 -->
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
          <span class="tag-text">尺寸大小</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['默认','中等','迷你']"
          @change="changeSize"
          :index="params[1]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">形状</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['直角','圆角']"
          @change="changeShape"
          :index="params[2]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">是否禁用</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['是','否']"
          @change="changeDisable"
          :index="params[3]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">是否加载中</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['是','否']"
          @change="changeLoading"
          :index="params[4]"
        ></k-subsection>
      </div>
    </div>
  </div>
</template>

<script>
//局部引入组件
import Kbutton from "components/common/baseUI/k-button/button.vue";
export default {
  components: {
    "k-button": Kbutton
  },
  data() {
    return {
      //按钮圆角值
      radius: 5,
      //按钮文字大小
      fontSize: 14,
      //按钮背景色
      bgColor: "default",
      //按钮文字颜色
      fontColor: "white",
      //是否禁用按钮
      disable: false,
      //是否显示加载中
      loading: false,
      //按钮宽度
      btnWidth: 90,
      //按钮高度
      btnHeight: 35,
      //按钮文本
      btnText: "千山鸟飞绝，万径人踪灭",

      //参数配置内容的自适应高度
      paramsHeight: 100,
      //控制显示提示内容
      toastShow: false,
      //显示的提示内容
      toastText: "按钮被点击",
      //默认参数配置
      params: [0, 0, 0, 1, 1],
      //定时器ID
      ID: 0
    };
  },
  methods: {
    //返回按键
    clickBack() {
      this.$router.replace("/");
    },
    //按钮被点击事件
    btnClick() {
      if (this.toastShow) return;
      this.toastShow = true;
      this.ID = setTimeout(() => {
        this.toastShow = false;
      }, 3000);
    },
    //弹出提示关闭事件
    toastClose() {
      this.toastShow = false
      clearTimeout(this.ID)
    },
    //背景样式改变
    changeStyle(index) {
      const style = ["default", "primary", "error", "warning", "success"];
      this.bgColor = style[index];
    },
    //改变按钮大小
    changeSize(index) {
      const size = [
        {
          width: 90,
          height: 35,
          fontSize: 14,
          text: "千山鸟飞绝，万径人踪灭"
        },
        {
          width: 50,
          height: 28,
          fontSize: 13,
          text: "大江东去"
        },
        {
          width: 30,
          height: 20,
          fontSize: 12,
          text: "浪淘尽"
        }
      ];
      this.btnWidth = size[index].width;
      this.btnHeight = size[index].height;
      this.fontSize = size[index].fontSize;
      this.btnText = size[index].text;
    },
    //改变形状
    changeShape(index) {
      const shape = [5, 50];
      this.radius = shape[index];
    },
    //改变禁用状态
    changeDisable(index) {
      const disable = [true, false];
      this.disable = disable[index];
    },
    //改变加载状态
    changeLoading(index) {
      const loading = [true, false];
      this.loading = loading[index];
    }
  },
  mounted() {
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
