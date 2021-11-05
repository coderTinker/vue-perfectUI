<template>
  <div id="demo" class="demo">
    <!-- toast组件展示代码 -->
    <k-toast
      @close="close"
      :text="text"
      :show="show"
      :position="position"
      :bgColor="bgColor"
      :showIcon="showIcon"
      :clickClose="clickClose"
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
      <div
        class="show-component"
        style="display:flex;justify-content:center;align-items: center;opacity:0.5;font-size:14px;"
      >见弹出toast</div>
    </div>
    <div id="head" class="params-head">参数配置</div>
    <div class="params-body" :style="{height:paramsHeight + 'px'}">
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">状态</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['关闭','开启']"
          @change="changeStatus"
          :index="params[0]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">主题</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['default','primary','error','warning','success']"
          @change="changeStyle"
          :index="params[1]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">位置</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['底部','中部','顶部']"
          @change="changePosition"
          :index="params[2]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">显示图标</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['是','否']"
          @change="changeIcon"
          :index="params[3]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">点击关闭</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['是','否']"
          @change="changeClose"
          :index="params[4]"
        ></k-subsection>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //提示背景色
      bgColor: "default",
      //提示状态
      show: false,
      //提示位置
      position: "bottom",
      //提示文本
      text: "桃花潭水深千尺",
      //是否显示图标
      showIcon: true,
      //是否点击关闭
      clickClose: true,

      //参数配置内容的自适应高度
      paramsHeight: 100,
      //默认参数配置
      params: [0, 0, 0, 0, 0]
    };
  },
  methods: {
    //返回按键
    clickBack() {
      this.$router.replace("/");
    },
    //背景样式改变
    changeStyle(index) {
      const style = ["default", "primary", "error", "warning", "success"];
      this.bgColor = style[index];
      this.show = !this.show;
      this.reShow();
    },
    //改变提示框提示位置
    changePosition(index) {
      const position = ["bottom", "center", "top"];
      this.position = position[index];
      this.show = !this.show;
      this.reShow();
    },
    //改变是否显示图标
    changeIcon(index) {
      const showIcon = [true, false];
      this.showIcon = showIcon[index];
      this.reShow();
    },
    //改变提示框是否点击关闭
    changeClose(index) {
      const clickClose = [true, false];
      this.clickClose = clickClose[index];
      this.reShow();
    },
    //改变显示toast状态
    changeStatus(index) {
      const status = [false, true];
      if (status[index]) {
        this.reShow();
      } else {
        this.show = false;
      }
    },
    //重新展示toast
    reShow() {
      if (this.show) return;
      this.show = true;
    },
    //toast关闭事件
    close() {
      this.show = false;
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
