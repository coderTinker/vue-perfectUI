<template>
  <div ref="subsection" class="k-subsection" :style="bodyStyle">
    <div class="k-subsection-mask" :style="[{left:left+'px'},maskStyle]"></div>
    <div
      @click="itemClick(index)"
      class="k-subsection-item"
      :key="index"
      v-for="(item,index) in list"
      :style="[itemStyle,{color:current==index?activeColor:normalColor,fontWeight:current==index?bold?'bold':'normal':'normal',borderRightStyle:list.length-1==index?'none':type=='normal'?'none':'solid'}]"
    >{{item}}</div>
  </div>
</template>

<script>
export default {
  name: "k-subsection",
  data() {
    return {
      //当前选中索引
      current: 0,
      //滑块的left，单位px
      left: 0,
      //整个组件的宽度，单位px
      bodyWidth: 0,
      //上一次的索引
      lastIndex: 0,
      //选中字体颜色
      activeColor: "",
      //未选中字体颜色
      normalColor: ""
    };
  },
  computed: {
    //主体的样式
    bodyStyle() {
      const style = {};
      if (this.type == "normal") {
        style.backgroundColor = "rgb(230,230,230)";
        style.borderStyle = "none";
      }
      if (this.type == "fine") {
        const color = {
          default: "black",
          primary: "#007aff",
          success: "#4cd964",
          warning: "#f0ad4e",
          error: "#dd524d"
        };
        style.backgroundColor = "white";
        style.borderStyle = "solid";
        style.borderWidth = "1px";
        style.borderColor = color[this.mainStyle];
        if (!color[this.mainStyle]) {
          style.borderColor = this.mainStyle;
        }
      }
      return style;
    },
    //滑块的样式
    maskStyle() {
      const style = {};
      if (this.type == "normal") {
        style.backgroundColor = "white";
        style.borderRadius = "5px";
        style.width = this.bodyWidth / this.list.length - 6 + "px";
        style.top = "3px";
        style.bottom = "3px";
      }
      if (this.type == "fine") {
        const color = {
          default: "black",
          primary: "#007aff",
          success: "#4cd964",
          warning: "#f0ad4e",
          error: "#dd524d"
        };
        style.backgroundColor = color[this.mainStyle];
        if (this.current == 0) {
          style.borderTopLeftRadius = "5px";
          style.borderBottomLeftRadius = "5px";
          style.borderTopRightRadius = "0px";
          style.borderBottomRightRadius = "0px";
        } else if (this.current == this.list.length - 1) {
          style.borderTopRightRadius = "5px";
          style.borderBottomRightRadius = "5px";
          style.borderTopLeftRadius = "0px";
          style.borderBottomLeftRadius = "0px";
        } else {
          style.borderTopLeftRadius = "0px";
          style.borderBottomLeftRadius = "0px";
          style.borderTopRightRadius = "0px";
          style.borderBottomRightRadius = "0px";
        }
        if (!color[this.mainStyle]) {
          style.backgroundColor = this.mainStyle;
        }

        style.width = this.bodyWidth / this.list.length + "px";
        style.top = "0px";
        style.bottom = "0px";
      }
      return style;
    },
    //item的样式
    itemStyle() {
      const style = {};
      const color = {
        default: "black",
        primary: "#007aff",
        success: "#4cd964",
        warning: "#f0ad4e",
        error: "#dd524d"
      };
      style.width = 100 / this.list.length + "%";

      if (this.type == "normal") {
        style.borderStyle = "none";
      }
      if (this.type == "fine") {
        style.borderRightStyle = "solid";
        style.borderRightWidth = "1px";
        style.borderRightColor = color[this.mainStyle];
        if (!color[this.mainStyle]) style.borderRightColor = this.mainStyle;
      }
      return style;
    }
  },
  methods: {
    //item被点击事件
    itemClick(index) {
      this.current = index;
    },
    //移动滑块
    moveSlider() {
      if (this.type == "normal")
        this.left = (this.current * this.bodyWidth) / this.list.length + 3;
      if (this.type == "fine")
        this.left = (this.current * this.bodyWidth) / this.list.length;
    },
    //更新字体颜色样式
    updateColor() {
      const color = {
        default: "black",
        primary: "#007aff",
        success: "#4cd964",
        warning: "#f0ad4e",
        error: "#dd524d"
      };
      if (this.type == "normal") {
        this.activeColor = color[this.mainStyle];
        this.normalColor = "rgba(0,0,0,0.8)";
        if (!color[this.mainStyle]) this.activeColor = this.mainStyle;
        if (this.mainStyle == "default") {
          this.normalColor = "rgba(0,0,0,0.5)";
        }
      }
      if (this.type == "fine") {
        this.activeColor = "white";
        this.normalColor = color[this.mainStyle];
        if (!color[this.mainStyle]) this.normalColor = this.mainStyle;
      }
    }
  },
  watch: {
    //观察index来更新current
    index(value) {
      this.current = value;
    },
    //观察current变化来移动滑块
    current(value) {
      this.moveSlider();
      //索引无变化不发射事件
      if (value == this.lastIndex) return;
      this.$emit("change", value);
      //记录上一次索引
      this.lastIndex = value;
    },
    //观察主题样式变化更新字体颜色
    mainStyle() {
      this.updateColor();
    },
    //观察类型变化更新字体颜色
    type(value) {
      if (value == "fine") this.left -= 3;
      if (value == "normal") this.left += 3;
      this.updateColor();
    }
  },
  props: {
    //数据列表
    list: {
      type: Array,
      required: true
    },
    //默认选中的current
    index: {
      type: Number,
      default: 0
    },
    //主题样式
    mainStyle: {
      type: String,
      default: "default"
    },
    //类型,分为normal和fine两种
    type: {
      type: String,
      default: "normal"
    },
    //选中字体是否加粗
    bold: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    //初始化data数据
    this.current = this.index;
    this.lastIndex = this.index;
    this.bodyWidth = this.$refs.subsection.clientWidth;
    this.moveSlider();
    this.updateColor();
  }
};
</script>

<style scoped>
@import "./subsection.css";
</style>
