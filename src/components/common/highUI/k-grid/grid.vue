<template>
  <div class="k-cell" :style="{ borderRadius: radius + 'px', backgroundColor: bgColor }">
    <div class="k-cell-row" :style="rowStyle" :key="i" v-for="i in rank[0]">
      <div
        @touchstart="start(index)"
        @touchend="end"
        @click="itemClick(index)"
        v-show="index >= (i - 1) * rank[1] && index < i * rank[1]"
        class="k-cell-column"
        :style="[
          columnStyle,
          { opacity: clickEffect ? (current == index ? 0.5 : 1) : 1 },
        ]"
        :key="index"
        v-for="(item, index) in list"
      >
        <img
          class="k-cell-img"
          :style="{ borderRadius: imgRadius + 'px' }"
          :width="imgSize[0]"
          :height="imgSize[1]"
          :src="item.src"
        />
        <div
          :style="{
            marginTop: space + 'px',
            color: fontColor,
            fontSize: fontSize + 'px',
          }"
        >{{ item.text }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "k-cell",
  data() {
    return {
      current: -1
    };
  },
  computed: {
    //行样式
    rowStyle() {
      const style = {};
      style.width = "100%";
      style.height = 100 / this.rank[0] + "%";
      return style;
    },
    //列样式
    columnStyle() {
      const style = {};
      (style.width = 100 / this.rank[1] + "%"), (style.height = "100%");
      return style;
    }
  },
  methods: {
    //发射item被点击事件
    itemClick(index) {
      this.$emit("itemClick", index);
    },
    //手指按下事件
    start(index) {
      this.current = index;
    },
    //手指抬起事件
    end() {
      this.current = -1;
    }
  },
  props: {
    //宫格数据
    list: {
      type: Array,
      required: true
    },
    //几行几列,默认2行4列
    rank: {
      type: Array,
      default() {
        return [2, 4];
      }
    },
    //总体的圆角值,单位px
    radius: {
      type: Number,
      default: 10
    },
    //背景色
    bgColor: {
      type: String,
      default: "white"
    },
    //图标和文字的距离,单位px
    space: {
      type: Number,
      default: 4
    },
    //图标的宽高,单位px
    imgSize: {
      type: Array,
      default() {
        return [35, 35];
      }
    },
    //图标的圆角值,单位px
    imgRadius: {
      type: Number,
      default: 0
    },
    //字体大小,单位px
    fontSize: {
      type: Number,
      default: 11
    },
    //字体颜色
    fontColor: {
      type: String,
      default: "black"
    },
    //是否显示点击效果
    clickEffect: {
      type: Boolean,
      default: true
    }
  }
};
</script>
<style scoped>
@import "./grid.css";
</style>
