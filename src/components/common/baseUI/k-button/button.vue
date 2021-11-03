<template>
  <div
    @click="btnClick"
    @touchstart="touchStart"
    @touchmove.prevent
    @touchend="touchEnd"
    :style="[btnStyle, { opacity: disable ? 0.5 : loading?0.5:opacity }]"
    class="k-button"
  >
    <img class="k-button-loading" v-if="loading" src="./img/loading.svg" />
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "k-button",
  data() {
    return {
      //按钮透明度
      opacity: 1,
      transitionTime: 300
    };
  },
  methods: {
    //监听手指按下事件
    touchStart() {
      if (this.disable) return;
      // this.transitionTime = 0;
      this.opacity = 0.5;
    },
    //监听手指抬起事件
    touchEnd() {
      if (this.disable) return;
      // this.transitionTime = 300;
      this.opacity = 1;
    },
    //按钮被点击事件
    btnClick() {
      this.$emit("click");
    }
  },
  props: {
    //按钮圆角值，单位px
    radius: {
      type: Number,
      default: 50
    },
    //按钮背景颜色,默认值default,还可选primary,success,warning,error,或自定义颜色
    bgColor: {
      type: String,
      default: "default"
    },
    //按钮字体颜色
    fontColor: {
      type: String,
      default: "white"
    },
    //按钮字体尺寸
    fontSize: {
      type: Number,
      default: 14
    },
    //是否禁用
    disable: {
      type: Boolean,
      default: false
    },
    //是否显示加载
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    //按钮样式
    btnStyle() {
      const style = {};
      style.borderRadius = this.radius + "px";
      style.color = this.fontColor;
      style.transitionDuration = this.transitionTime + "ms";
      style.fontSize = this.fontSize + "px";
      const color = {
        primary: "#007aff",
        success: "#4cd964",
        warning: "#f0ad4e",
        error: "#dd524d"
      };
      style.backgroundColor = color[this.bgColor];

      if (this.bgColor == "default") {
        style.backgroundColor = "white";
        style.borderStyle = "solid";
        style.borderColor = "rgb(160,160,160)";
        style.borderWidth = "0.4px";
        style.color = "rgb(80,80,80)";
      }
      return style;
    }
  }
};
</script>
<style scoped>
@import "./button.css";
</style>
