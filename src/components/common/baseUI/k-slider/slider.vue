<template>
  <div ref="slider" class="k-slider" :style="{opacity:disable?0.5:1}">
    <div @click="lineClick" ref="light" class="k-slider-lightArea" :style="lightAreaStyle"></div>
    <div @click="lineClick" class="k-slider-darkArea" :style="darkAreaStyle"></div>
    <div
      class="k-slider-circle"
      :style="[circleStyle]"
      @touchstart="touchStart"
      @touchmove.prevent="touchMove"
      @touchend="touchEnd"
    ></div>
  </div>
</template>
<script>
export default {
  name: "k-slider",
  data() {
    return {
      //当前的值
      percent: 0,
      //开始按下的x坐标
      startX: -1,
      lastWidth1: 0,
      left: 0,
      width: 0,
      width1: 0,
      width2: 0,
      //动画时间
      time:300
    };
  },
  watch: {
    //观察父组件传来的值
    value(value) {
      this.setPosition();
    }
  },
  computed: {
    //选中区域样式
    lightAreaStyle() {
      const style = {};
      style.transitionDuration = this.time + 'ms'
      const color = {
        primary: "#007aff",
        success: "#4cd964",
        warning: "#f0ad4e",
        error: "#dd524d"
      };
      style.backgroundColor = color[this.selectColor];
      if (!color[this.selectColor]) style.backgroundColor = this.selectColor;
      style.height = this.lienHeight + "px";
      style.width = this.width1 + "px";
      return style;
    },
    //未选中区域样式
    darkAreaStyle() {
      const style = {};
      style.transitionDuration = this.time + 'ms'
      style.height = this.lienHeight + "px";
      style.width = this.width2 + "px";
      return style;
    },
    //滑块样式
    circleStyle() {
      const style = {};
      style.transitionDuration = this.time + 'ms'
      style.width = this.circleR + "px";
      style.height = this.circleR + "px";
      style.backgroundColor = this.circleColor;
      style.left = this.left + "px";
      style.top = 25 - this.circleR / 2 + "px";
      return style;
    }
  },
  methods: {
    //点击线条移动
    lineClick(e) {
      this.width1 = e.clientX - e.target.parentElement.offsetLeft;
      this.width2 = this.width - this.width1;
      this.left = this.width1 - this.circleR / 2;
      if (
        this.percent !=
        Math.round(
          (this.width1 / this.width) * (this.region[1] - this.region[0])
        )
      ) {
        this.percent = Math.round(
          (this.width1 / this.width) * (this.region[1] - this.region[0])
        );
        this.$emit("change", this.percent + this.region[0]);
      }
      this.lastWidth1 = this.width1;
    },
    //手指按下事件
    touchStart(e) {
      this.time = 0
      if (this.startX == -1) this.startX = e.touches[0].clientX;
    },
    //手指按下移动事件
    touchMove(e) {
      if (this.disable) return;

      this.left =
        this.lastWidth1 + e.touches[0].clientX - this.startX - this.circleR / 2;
      this.width1 = this.lastWidth1 + e.touches[0].clientX - this.startX;
      this.width2 = this.width - this.width1;
      if (this.width1 <= 0) {
        this.width1 = 0;
        this.width2 = this.width;
        this.left = 0 - this.circleR / 2;
      }
      if (this.width2 <= 0) {
        this.width1 = this.width;
        this.width2 = 0;
        this.left = this.width - this.circleR / 2;
      }
      if (
        this.percent !=
        Math.round(
          (this.width1 / this.width) * (this.region[1] - this.region[0])
        )
      ) {
        this.percent = Math.round(
          (this.width1 / this.width) * (this.region[1] - this.region[0])
        );
        this.$emit("change", this.percent + this.region[0]);
      }
    },
    //手指抬起事件
    touchEnd() {
      this.time = 300
      this.startX = -1;
      this.lastWidth1 = this.width1;
    },
    //调整位置
    setPosition() {
      this.percent = this.value;
      this.width = this.$refs.slider.clientWidth;
      this.left =
        (this.percent / (this.region[1] - this.region[0])) * this.width -
        this.circleR / 2;

      this.width1 = this.left + this.circleR / 2;
      this.lastWidth1 = this.width1;
      this.width2 = this.width - this.width1;
    }
  },
  mounted() {
    //初始化数据
    this.setPosition();
  },
  props: {
    //选择部分颜色
    selectColor: {
      type: String,
      default: "primary"
    },
    //线条高度,单位px
    lienHeight: {
      type: Number,
      default: 3
    },
    //圆的直径,单位px
    circleR: {
      type: Number,
      default: 25
    },
    //圆的背景颜色
    circleColor: {
      type: String,
      default: "white"
    },
    //最小值和最大值
    region: {
      type: Array,
      default() {
        return [0, 100];
      }
    },
    //初始值
    value: {
      type: Number,
      default: 30
    },
    //是否禁用
    disable: {
      type: Boolean,
      default: false
    },
    //是否使用悬浮提示进度值
    showValue: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style scoped>
@import "./slider.css";
</style>
