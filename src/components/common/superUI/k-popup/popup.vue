<template>
  <div @touchmove.prevent v-if="show" @click.stop="popupClick" class="k-popup" :style="popupStyle">
    <div @click.stop class="k-content" :style="contentStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script>
/**
 * k-popup
 * @desc 弹窗
 * @param {number} [popWidth]
 *
 */
export default {
  name: "k-popup",
  data() {
    return {
      opacity: 0,
      nowX: this.popHiddenX,
      nowY: this.popHiddenY,
      nowRotate: 0,
      show: false,
      scale: 0
    };
  },
  methods: {
    //阴影处被点击事件
    popupClick() {
      this.$emit("shadowClick");
    },
    //销毁对话框
    close() {
      this.show = false;
    },
    //缓一下
    wait() {
      this.opacity = this.shadowOpacity;
      this.nowRotate = this.rotate;
      this.nowX = this.popShowX;
      this.nowY = this.popShowY;
      if (this.useScale) {
        this.scale = 1;
      }
    }
  },
  computed: {
    //阴影样式
    popupStyle() {
      const style = {};
      style.width = window.innerWidth + "px";
      // style.height = window.innerHeight + "px";
      style.height = "100vh";
      style.transitionDuration = this.transitionTime + "ms";
      style.backgroundColor = "rgba(0,0,0," + this.opacity + ")";
      return style;
    },
    //对话框内容的样式
    contentStyle() {
      const style = {};
      style.width = this.popWidth + "%";
      style.height = this.popHeight + "%";
      style.left = this.nowX + "%";
      style.top = this.nowY + "%";
      if (this.useScale) {
        style.transform =
          "rotate(" + this.nowRotate + "deg)  scale(" + this.scale + ")";
      } else {
        style.transform = "rotate(" + this.nowRotate + "deg)";
      }
      style.transitionDuration = this.transitionTime + "ms";
      return style;
    }
  },
  watch: {
    //观察是否显示对话框
    popShow(value) {
      if (value) {
        this.show = true;
        setTimeout(this.wait, 10);
      } else {
        this.opacity = 0;
        this.nowRotate = 0;
        this.nowX = this.popHiddenX;
        this.nowY = this.popHiddenY;
        if (this.useScale) {
          this.scale = 0;
        }
        setTimeout(this.close, this.transitionTime);
      }
    }
  },
  props: {
    //对话框的宽度，单位相对于浏览器的百分比
    popWidth: {
      type: Number,
      default: 60
    },
    //对话框的高度，单位相对于浏览器的百分比
    popHeight: {
      type: Number,
      default: 60
    },
    //对话框隐藏时的X位置，单位相对于浏览器的百分比
    popHiddenX: {
      type: Number,
      default: 20
    },
    //对话框隐藏时的Y位置，单位相对于浏览器的百分比
    popHiddenY: {
      type: Number,
      default: 100
    },
    //对话框出现时的X位置，单位相对于浏览器的百分比
    popShowX: {
      type: Number,
      default: 20
    },
    //对话框出现时的Y位置，单位相对于浏览器的百分比
    popShowY: {
      type: Number,
      default: 20
    },
    //过渡时间，单位ms
    transitionTime: {
      type: Number,
      default: 500
    },
    //是否显示对话框
    popShow: {
      type: Boolean,
      default: false
    },
    //阴影的透明度
    shadowOpacity: {
      type: Number,
      default: 0.7
    },
    //过渡旋转角度
    rotate: {
      type: Number,
      default: 360
    },
    //使用缩放过渡
    useScale: {
      type: Boolean,
      default: true
    }
  }
};
</script>
<style scoped>
@import "./popup.css";
</style>
