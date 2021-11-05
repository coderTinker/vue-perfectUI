<template>
  <div ref="progress" class="k-progress" :style="progressStyle">
    <div class="k-progress-percent" :style="[percentStyle,{height:percentHeight+'px'}]">
      <div v-if="fontMode == 'with'" :style="{ color: fontColor, fontSize: fontSize + 'px' }">
        {{
        decimal
        ? percent > 100
        ? "100.00"
        : percent.toFixed(2)
        : percent > 100
        ? "100"
        : percent.toFixed(0)
        }}%
      </div>
    </div>
    <div
      v-if="fontMode == 'center'"
      class="k-progress-text"
      :style="{ color: fontColor, fontSize: fontSize + 'px' }"
    >
      {{
      decimal
      ? percent > 100
      ? "100.00"
      : percent.toFixed(2)
      : percent > 100
      ? "100"
      : percent.toFixed(0)
      }}%
    </div>
  </div>
</template>
<script>
//在苹果的浏览器里进度内容的高度有问题....
export default {
  name: "k-progress",
  data() {
    return {
      //过渡时间
      time: 0,
      //进度内容高度
      percentHeight: 0
    };
  },
  mounted() {
    //初始化进度条内容高度
    this.percentHeight = this.$refs.progress.clientHeight;
  },
  watch: {
    //观察进度变化
    percent(value, oldVaule) {
      this.time =
        (this.$refs.progress.clientWidth * (value - oldVaule) * 10) / 100;
    }
  },
  computed: {
    //最外层的样式
    progressStyle() {
      const style = {};
      style.backgroundColor = this.bgColor;
      style.borderRadius = this.radius + "px";
      return style;
    },
    //进度内容的样式
    percentStyle() {
      const style = {};
      const color = {
        primary: "#007aff",
        success: "#4cd964",
        warning: "#f0ad4e",
        error: "#dd524d"
      };
      style.backgroundColor = color[this.progressColor];
      //自定义颜色
      if (!color[this.progressColor])
        style.backgroundColor = this.progressColor;
      if (this.percent > 95) {
        style.borderRadius = this.radius + "px";
      }
      if (this.percent < 95) {
        style.borderRadius = "0px";
        style.borderTopLeftRadius = this.radius + "px";
        style.borderBottomLeftRadius = this.radius + "px";
      }
      style.transitionDuration = this.time + "ms";
      if (this.percent <= 100) style.width = this.percent + "%";
      else style.width = "100%";
      return style;
    }
  },
  props: {
    //背景色
    bgColor: {
      type: String,
      default: "rgb(210,210,210)"
    },
    //进度条颜色
    progressColor: {
      type: String,
      default: "primary"
    },
    //进度条圆角值
    radius: {
      type: Number,
      default: 100
    },
    //文字显示样式,有三种模式,with跟随,center居中,none不显示
    fontMode: {
      type: String,
      default: "center"
    },
    //文字颜色
    fontColor: {
      type: String,
      default: "white"
    },
    //文字尺寸大小,单位px
    fontSize: {
      type: Number,
      default: 13
    },
    //进度条当前进度
    percent: {
      type: Number,
      default: 50
    },
    //是否显示小数
    decimal: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style scoped>
@import "./progress.css";
</style>
