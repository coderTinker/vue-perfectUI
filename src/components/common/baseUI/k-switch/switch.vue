<template>
  <div ref="switch" @touchstart.stop @click.stop="active = disable?active:!active" class="k-switch" :style="switchStyle">
    <div
      ref="circle"
      class="k-switch-circle"
      :style="[circleStyle,{width:(height-0.8)+'px',height:(height-0.8)+'px'}]"
    ></div>
  </div>
</template>
<script>
export default {
  name: "k-switch",
  data() {
    return {
      //开关状态
      active: false,
      //圆球的left
      left: 0
    };
  },
  updated() {
    //更新样式
    this.adjustStyle();
  },
  methods: {
    //调整样式
    adjustStyle() {
      //设置圆球的marginleft位置
      if (this.active) {
        this.left = this.width - this.height;
      } else {
        this.left = 0;
      }
    }
  },
  watch: {
    //观察开关的状态变化
    active(value) {
      this.$emit("change", value);
      this.adjustStyle();
    },
    //观察传入开关状态的变化
    status(value) {
      this.active = value
    }
  },
  computed: {
    //圆球样式
    circleStyle() {
      const style = {};
      style.marginLeft = this.left + "px";
      return style;
    },
    //开关样式
    switchStyle() {
      const style = {};
      style.width = this.width + "px";
      style.height = this.height + "px";
      style.opacity = this.disable ? 0.5 : 1;
      const color = {
        primary: "#007aff",
        success: "#4cd964",
        warning: "#f0ad4e",
        error: "#dd524d"
      };
      style.backgroundColor = this.active ? color[this.bgColor] : "white";
      //使用自定义颜色
      if (!color[this.bgColor]) {
        style.backgroundColor = this.active ? this.bgColor : "white";
      }
      return style;
    }
  },
  mounted() {
    //继承父组件的开关状态
    this.active = this.status;
    this.adjustStyle();
  },
  props: {
    //开关颜色
    bgColor: {
      type: String,
      default: "primary"
    },
    //是否禁用
    disable: {
      type: Boolean,
      default: false
    },
    //开关状态,true为开,false为关
    status: {
      type: Boolean,
      default: false
    },
    //开关的宽度
    width: {
      type: Number,
      default: 40
    },
    //开关的高度
    height: {
      type: Number,
      default: 20
    }
  }
};
</script>
<style scoped>
@import "./switch.css";
</style>
