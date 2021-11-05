<template>
  <transition name="k-toast-transition">
    <div @click="close" v-if="selfCtrl" ref="toast" class="k-toast" :style="toastStyle">
      <img
        v-if="showIcon?bgColor=='success' || bgColor=='error' || bgColor=='warning':false"
        class="k-toast-icon"
        :src="bgColor=='success'?'/img/toast/success.svg':bgColor=='error'?'/img/toast/error.svg':bgColor=='warning'?'/img/toast/warning.svg':null"
      />
      <span class="k-toast-text">{{ text }}</span>
    </div>
  </transition>
</template>
<script>
export default {
  name: "k-toast",
  data() {
    return {
      //弹出提示的left
      left: 0,
      //弹出提示的top
      top: null,
      //弹出提示的bottom
      bottom: null,
      //弹出提示的宽度
      width: "auto",
      //弹出提示的高度
      height: "auto",
      //控制弹出提示是否显示
      selfCtrl: false,
      //定时器ID
      id: 0
    };
  },
  watch: {
    //观察父组件传来的show变量变化来修改子组件的selfCtrl变量
    show(value) {
      this.selfCtrl = value;
      if (value) {
        //等待一会儿渲染出dom再来计算位置
        setTimeout(() => {
          this.computePlace();
        }, 20);
        if (this.time != 0) {
          this.id = setTimeout(this.close2, this.time);
        }
      } else {
        clearInterval(this.id);
      }
    },
    //观察位置变化
    position() {
      //等待渲染
      setTimeout(()=>{
      this.computePlace()
      },50)
    },
    showIcon() {
      //等待渲染
      setTimeout(()=>{
      this.computePlace()
      },50)
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
    },
    //艰辛的位置计算
    computePlace() {
      if (this.position == "center") {
        this.left = (window.innerWidth - this.$refs.toast.clientWidth) / 2;
        this.top =
          (window.innerHeight - this.$refs.toast.clientHeight) / 2 + "px";
        this.bottom = null
        if (this.$refs.toast.clientWidth / window.innerWidth >= 0.8) {
          this.width = "80vw";
          this.left = window.innerWidth * 0.1 - 15;
        }
        if (this.$refs.toast.clientHeight / window.innerHeight >= 0.8) {
          this.height = "80vh";
          this.top = "10vh";
        }
      } else if (this.position == "top") {
        this.left = (window.innerWidth - this.$refs.toast.clientWidth) / 2;
        this.top = "5vh";
        this.bottom = null
        if (this.$refs.toast.clientWidth / window.innerWidth >= 0.8) {
          this.width = "80vw";
          this.left = window.innerWidth * 0.1 - 15;
        }
        if (this.$refs.toast.clientHeight / window.innerHeight >= 0.8) {
          this.height = "80vh";
          this.top = "10vh";
        }
      } else if (this.position == "bottom") {
        this.left = (window.innerWidth - this.$refs.toast.clientWidth) / 2;
        this.bottom = "5vh";
        this.top = null
        if (this.$refs.toast.clientWidth / window.innerWidth >= 0.8) {
          this.width = "80vw";
          this.left = window.innerWidth * 0.1 - 15;
        }
        if (this.$refs.toast.clientHeight / window.innerHeight >= 0.8) {
          this.height = "80vh";
          this.top = "10vh";
        }
      }
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
      default: "default"
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
    },
    //是否显示图标
    showIcon: {
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
      style.fontSize = this.fontSize + "px";
      style.borderRadius = this.radius + "px";
      //字体颜色
      const fColor = {
        primary: "#007aff",
        success: "#4cd964",
        warning: "#f0ad4e",
        error: "#dd524d",
        default: "white"
      };
      //背景颜色
      const BColor = {
        primary: "#ECF4FF",
        success: "#DBF2E2",
        warning: "#FDF6EC",
        error: "#FEF0F0",
        default: "rgba(0,0,0,0.6)"
      };
      //边框颜色
      const borderColor = {
        primary: "#E2EBF4",
        success: "#CAEBD3",
        warning: "#FEF8EC",
        error: "#F9E9E9"
      };
      if (fColor[this.bgColor]) {
        style.color = fColor[this.bgColor];
        style.backgroundColor = BColor[this.bgColor];
        if (this.bgColor != "default") {
          style.borderColor = borderColor[this.bgColor];
          style.borderWidth = "0.5px";
          style.borderStyle = "solid";
        }
      } else {
        style.color = this.fontColor;
        style.backgroundColor = this.bgColor;
      }
      return style;
    }
  },
  mounted() {
    //继承父组件的显示状态
    this.selfCtrl = this.show;
  }
};
</script>
<style scoped>
@import "./toast.css";
</style>
