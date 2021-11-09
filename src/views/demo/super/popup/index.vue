<template>
  <div id="demo" class="demo">
    <!-- popup组件展示代码 -->
    <k-popup
      @close="close"
      :popWidth="popWidth"
      :popHeight="popHeight"
      :popHiddenX="popHiddenX"
      :popHiddenY="popHiddenY"
      :popShowX="popShowX"
      :popShowY="popShowY"
      :popShow="popShow"
      :rotate="rotate"
      :useScale="useScale"
      :useOpacity="useOpacity"
      :outside="outside"
    >
      <div
        style="width:100%;height:100%;border-radius:10px;backgroundColor:white;display:flex;justify-content: center;align-items: center;"
      >
        <button @click="popShow=false">关闭</button>
      </div>
    </k-popup>
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
      >见弹出popup</div>
    </div>
    <div id="head" class="params-head">参数配置</div>
    <div class="params-body" :style="{height:paramsHeight + 'px'}">
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">显示</span>
        </div>
        <k-subsection class="demo-subsection" :list="['显示','关闭']" @change="changeStatus" :index="1"></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">平移效果</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['上-下','下-上','左-右','右-左','不使用']"
          @change="changeTranslate"
          :index="1"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">旋转效果</span>
        </div>
        <k-subsection class="demo-subsection" :list="['开启','关闭']" @change="changeRotate" :index="1"></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">缩放效果</span>
        </div>
        <k-subsection class="demo-subsection" :list="['开启','关闭']" @change="changeScale" :index="0"></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">透明度过渡效果</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['开启','关闭']"
          @change="changeOpacity"
          :index="0"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">开启阴影部分点击关闭Popup</span>
        </div>
        <k-subsection class="demo-subsection" :list="['是','否']" @change="changeEvent" :index="0"></k-subsection>
      </div>
    </div>
  </div>
</template>

<script>
//局部引入组件
import Kpopup from "components/common/superUI/k-popup/popup.vue";
export default {
  components: {
    "k-popup": Kpopup
  },
  data() {
    return {
      //对话框的宽度，单位相对于浏览器的百分比
      popWidth: 60,
      //对话框的高度，单位相对于浏览器的百分比
      popHeight: 60,
      //对话框隐藏时的X位置，单位相对于浏览器的百分比
      popHiddenX: 20,
      //对话框隐藏时的Y位置，单位相对于浏览器的百分比
      popHiddenY: 100,
      //对话框出现时的X位置，单位相对于浏览器的百分比
      popShowX: 20,
      //对话框出现时的Y位置，单位相对于浏览器的百分比
      popShowY: 20,
      //是否显示对话框
      popShow: false,
      //过渡旋转角度
      rotate: 0,
      //使用缩放过渡
      useScale: true,
      //使用透明度变化
      useOpacity: true,
      //开启外部点击关闭弹窗
      outside: true,

      //参数配置内容的自适应高度
      paramsHeight: 100
    };
  },
  methods: {
    //返回按键
    clickBack() {
      this.$router.replace("/");
    },
    //弹窗关闭事件
    close() {
      this.popShow = false;
    },
    //改变弹窗是否显示
    changeStatus(index) {
      const status = [true, false];
      this.popShow = status[index];
    },
    //改变平移效果
    changeTranslate(index) {
      const translate = [
        {
          hiddenX: 20,
          hiddenY: -60,
          showX: 20,
          showY: 20
        },
        {
          hiddenX: 20,
          hiddenY: 100,
          showX: 20,
          showY: 20
        },
        {
          hiddenX: -60,
          hiddenY: 20,
          showX: 20,
          showY: 20
        },
        {
          hiddenX: 100,
          hiddenY: 20,
          showX: 20,
          showY: 20
        },
        {
          hiddenX: 20,
          hiddenY: 20,
          showX: 20,
          showY: 20
        }
      ];
      this.popHiddenX = translate[index].hiddenX;
      this.popHiddenY = translate[index].hiddenY;
      this.popShowX = translate[index].showX;
      this.popShowY = translate[index].showY;
    },
    //改变旋转效果
    changeRotate(index) {
      const Rotate = [360, 0];
      this.rotate = Rotate[index];
    },
    //改变缩放效果
    changeScale(index) {
      const scale = [true, false];
      this.useScale = scale[index];
    },
    //改变透明度效果
    changeOpacity(index) {
      const opacity = [true, false];
      this.useOpacity = opacity[index];
    },
    //改变外部点击事件
    changeEvent(index) {
      const Event = [true, false];
      this.outside = Event[index];
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
