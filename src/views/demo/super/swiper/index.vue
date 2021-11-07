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
      <!-- swiper组件展示代码 -->
      <k-swiper
        class="show-component"
        style="height:150px;"
        @imageClick="imageClick"
        :images="images"
        :indicator="indicator"
        :play="play"
        :duration="duration"
        :switchDicator="switchDicator"
        :touch="touch"
        :showTitle="showTitle"
        :use3D="use3D"
      ></k-swiper>
    </div>
    <div id="head" class="params-head">参数配置</div>
    <div class="params-body" :style="{height:paramsHeight + 'px'}">
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">指示器类型</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['圆点','条形','数字','不显示']"
          @change="changeIndicator"
          :index="params[0]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">播放时间间隔</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['2000ms','3000ms','4000ms']"
          @change="changeTime"
          :index="params[1]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">自动播放</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['是','否']"
          @change="changePlay"
          :index="params[2]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">手指滑动</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['允许','禁止']"
          @change="changeTouch"
          :index="params[3]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">显示标题</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['显示','隐藏']"
          @change="changeTitle"
          :index="params[4]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">指示器点击切换图片</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['允许','禁止']"
          @change="changeSwitch"
          :index="params[5]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">开启3D模式</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['开启','关闭']"
          @change="change3D"
          :index="params[6]"
        ></k-subsection>
      </div>
    </div>
  </div>
</template>

<script>
//局部引入组件
import Kswiper from "components/common/superUI/k-swiper/swiper.vue";
//引入图片数据
import image from "./const";
export default {
  components: {
    "k-swiper": Kswiper
  },
  data() {
    return {
      //轮播图片
      images: image,
      //指示器类型,circle原点，bar条形，num数字，none不显示
      indicator: "circle",
      //是否自动播放
      play: true,
      //播放时间间隔，单位ms
      duration: 3000,
      //是否开启指示器点击切换图片
      switchDicator: false,
      //是否允许滑动
      touch: true,
      //是否显示标题
      showTitle: true,
      //是否开启3D模式
      use3D: false,
      //提示框显示文字
      toastText: "",
      //控制提示框是否显示
      toastShow: false,

      //参数配置内容的自适应高度
      paramsHeight: 100,
      //默认参数配置
      params: [0, 1, 0, 0, 0, 1, 1]
    };
  },
  methods: {
    //返回按键
    clickBack() {
      this.$router.replace("/");
    },
    //轮播图片被点击事件
    imageClick(index) {
      this.toastText = "第" + index + "个图片被点击";
      this.toastShow = true;
    },
    //提示框关闭事件
    toastClose() {
      this.toastShow = false;
    },
    //改变指示器类型,circle原点，bar条形，num数字，none不显示
    changeIndicator(index) {
      const type = ["circle", "bar", "num", "none"];
      this.indicator = type[index];
    },
    //改变播放时间间隔，单位ms
    changeTime(index) {
      const time = [2000, 3000, 4000];
      this.duration = time[index];
    },
    //改变是否自动播放
    changePlay(index) {
      const status = [true, false];
      this.play = status[index];
    },
    //改变是否允许滑动
    changeTouch(index) {
      const allowTouch = [true, false];
      this.touch = allowTouch[index];
    },
    //改变是否显示标题
    changeTitle(index) {
      const title = [true, false];
      this.showTitle = title[index];
    },
    //改变是否开启指示器点击切换图片
    changeSwitch(index) {
      const Switch = [true, false];
      this.switchDicator = Switch[index];
    },
    //改变是否开启3D模式
    change3D(index) {
      const allow3D = [true, false];
      this.use3D = allow3D[index];
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
