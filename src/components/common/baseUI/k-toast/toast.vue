<template>
  <div @click="close" v-if="selfCtrl" ref="toast" class="k-toast" :style="toastStyle">
    <span class="k-toast-text">{{ text }}</span>
  </div>
</template>
<script>
export default {
  name: "k-toast",
  data() {
    return {
      left: 0,
      top: null,
      bottom: null,
      width: "auto",
      height: "auto",
      selfCtrl: true,
      id: 0
    };
  },
  watch: {
    show(value) {
      this.selfCtrl = value;
      if (value) {
        if (this.time != 0) {
          this.id = setTimeout(this.close2, this.time);
        }
      } else {
        clearInterval(this.id);
      }
    }
  },
  methods: {
    //被点击后关闭
    close() {
      if (this.clickClose) {
        clearInterval(this.id);
        this.selfCtrl = false;
        this.$emit("close");
      }
    },
    //固定时间关闭
    close2() {
      this.selfCtrl = false;
      this.$emit("close");
    }
  },
  props: {
    //提示内容
    text: {
      type: String,
      required: true
    },
    //控制展示和隐藏，true显示，false销毁
    show: {
      type: Boolean,
      default: false
    },
    //显示的位置,bottom底部,center中间,top顶部
    position: {
      type: String,
      default: "bottom"
    },
    //文字颜色
    fontColor: {
      type: String,
      default: "white"
    },
    //文字尺寸大小,单位px
    fontSize: {
      type: Number,
      default: 14
    },
    //提示框圆角值,单位px
    radius: {
      type: Number,
      default: 5
    },
    //提示框背景色
    bgColor: {
      type: String,
      default: "rgba(0,0,0,0.65)"
    },
    //提示多少时间后关闭,单位ms,写0表示永不关闭
    time: {
      type: Number,
      default: 3000
    },
    //提示框被点击后自动关闭
    clickClose: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    //计算样式
    toastStyle() {
      const style = {};
      style.left = typeof this.left == "string" ? this.left : this.left + "px";
      style.top = this.top;
      style.bottom = this.bottom;
      style.width = this.width;
      style.height = this.height;
      style.color = this.fontColor;
      style.fontSize = this.fontSize + "px";
      style.borderRadius = this.radius + "px";
      style.backgroundColor = this.bgColor;
      return style;
    }
  },
  mounted() {
    this.selfCtrl = this.show;
    //艰辛的位置计算
    if (this.position == "center") {
      this.left = (window.innerWidth - this.$refs.toast.clientWidth) / 2;
      this.top =
        (window.innerHeight - this.$refs.toast.clientHeight) / 2 + "px";
      if (this.$refs.toast.clientWidth / window.innerWidth >= 0.8) {
        this.width = "80vw";
        this.left = window.innerWidth * 0.1 - 8;
      }
      if (this.$refs.toast.clientHeight / window.innerHeight >= 0.8) {
        this.height = "80vh";
        this.top = "10vh";
      }
    } else if (this.position == "top") {
      this.left = (window.innerWidth - this.$refs.toast.clientWidth) / 2;
      this.top = "5vh";
      if (this.$refs.toast.clientWidth / window.innerWidth >= 0.8) {
        this.width = "80vw";
        this.left = window.innerWidth * 0.1 - 8;
      }
      if (this.$refs.toast.clientHeight / window.innerHeight >= 0.8) {
        this.height = "80vh";
        this.top = "10vh";
      }
    } else if (this.position == "bottom") {
      this.left = (window.innerWidth - this.$refs.toast.clientWidth) / 2;
      this.bottom = "5vh";
      if (this.$refs.toast.clientWidth / window.innerWidth >= 0.8) {
        this.width = "80vw";
        this.left = window.innerWidth * 0.1 - 8;
      }
      if (this.$refs.toast.clientHeight / window.innerHeight >= 0.8) {
        this.height = "80vh";
        this.top = "10vh";
      }
    }
  }
};
</script>
<style scoped>
@import "./toast.css";
</style>
