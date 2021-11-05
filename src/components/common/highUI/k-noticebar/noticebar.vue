<template>
  <div :style="bodyStyle" class="k-board">
    <div v-if="showIcon" class="k-board-laba">
      <img :src="img1" width="20px" height="20px" />
    </div>
    <div
      ref="contentBox"
      id="contentBox"
      class="k-board-content-box"
      :style="{width:showIcon?'78%':'100%'}"
    >
      <div
        ref="content"
        id="content"
        :style="{ left: left + 'px'}"
        class="k-board-content"
      >{{ list.join("。") }}</div>
    </div>
    <div v-if="showIcon" class="k-board-enter">
      <img @click="moreClick" :src="img2" width="20px" height="20px" />
    </div>
  </div>
</template>
<script>
export default {
  name: "k-board",
  data() {
    return {
      left: 0,
      width: 0,
      widthBox: 0,
      //定时器ID
      ID: 0
    };
  },
  methods: {
    //移动内容
    move() {
      //移动一次
      this.left -= this.speed / 200;
      if (this.left * -1 > this.width) {
        //重置位置
        this.left = this.widthBox;
      }
    },
    //更多图标被点击事件
    moreClick() {
      this.$emit("moreClick");
    }
  },
  watch: {
    //观察播放状态变化
    status(value) {
      if (value == "running") {
        this.ID = setInterval(this.move, 5);
      }
      if (value == "paused") {
        clearInterval(this.ID);
      }
    },
    //观察是否显示图标
    showIcon() {
      setTimeout(() => {
        this.widthBox = this.$refs.contentBox.clientWidth;
      }, 50);
    }
  },
  mounted() {
    //需要滚动的内容宽度
    this.width = this.$refs.content.clientWidth;
    this.widthBox = this.$refs.contentBox.clientWidth;
    //当前的left单位px
    this.left = this.$refs.contentBox.clientWidth;
    //开始播放
    if (this.status == "running") {
      this.ID = setInterval(this.move, 5);
    }
  },
  computed: {
    //图片使用
    img1() {
      let src = "";
      const address = {
        primary: "/img/noticebar/laba_primary.svg",
        success: "/img/noticebar/laba_success.svg",
        warning: "/img/noticebar/laba_warning.svg",
        error: "/img/noticebar/laba_error.svg",
        none: "/img/noticebar/laba_none.svg"
      };
      if (!address[this.mainStyle]) src = address.primary;
      else src = address[this.mainStyle];
      return src;
    },
    //图片使用
    img2() {
      let src = "";
      const address = {
        primary: "/img/noticebar/enter_primary.svg",
        success: "/img/noticebar/enter_success.svg",
        warning: "/img/noticebar/enter_warning.svg",
        error: "/img/noticebar/enter_error.svg",
        none: "/img/noticebar/enter_none.svg"
      };
      if (!address[this.mainStyle]) src = address.primary;
      else src = address[this.mainStyle];
      return src;
    },
    //总体样式
    bodyStyle() {
      const style = {};
      style.borderRadius = "3px";
      const color = {
        primary: "rgba(0,122,255,0.1)",
        success: "rgba(76,217,100,0.1)",
        warning: "rgba(240,173,78,0.1)",
        error: "rgba(221,82,77,0.1)",
        none: "rgba(0,0,0,0)"
      };
      const color2 = {
        primary: "rgb(0,122,255)",
        success: "rgb(76,217,100)",
        warning: "rgb(240,173,78)",
        error: "rgb(221,82,77)",
        none: "#616267"
      };
      if (!color[this.mainStyle]) {
        style.color = "rgb(0,122,255)";
      } else {
        style.backgroundColor = color[this.mainStyle];
        style.color = color2[this.mainStyle];
      }
      return style;
    }
  },
  props: {
    //展示的内容
    list: {
      type: Array,
      required: true
    },
    //展示的模式，默认为horizontal，horizontal表示从右到左，vertical表示从下到上
    mode: {
      type: String,
      default: "horizontal"
    },
    //主题样式,分为primary,success,warning,error,none
    mainStyle: {
      type: String,
      default: "primary"
    },
    //播放状态,running为播放,paused为暂停
    status: {
      type: String,
      default: "running"
    },
    //播放速度,单位px/s
    speed: {
      type: Number,
      default: 40
    },
    //是否显示图标
    showIcon: {
      type: Boolean,
      default: true
    },
    //水平情况下是否衔接播放
    useConnect: {
      type: Boolean,
      default: true
    }
  }
};
</script>
<style scoped>
@import "./noticebar.css";
</style>
