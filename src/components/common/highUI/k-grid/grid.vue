<template>
  <div
    ref="grid"
    class="k-grid"
    :style="{ borderRadius: radius + 'px', backgroundColor: bgColor,paddingTop:slide?'10px':'0px'}"
  >
    <div
      @scroll="scrollX"
      class="k-grid-top"
      :style="{height:slide?'90%':'100%','overflow-x': slide?'auto':'hidden',paddingBottom:slide?'10px':'0px'}"
    >
      <div
        class="k-grid-item"
        :key="a"
        v-for="a in Math.ceil(list.length/(rank[0]*rank[1]))"
        :style="{width:width + 'px'}"
      >
        <div class="k-grid-row" :style="rowStyle" :key="i" v-for="i in rank[0]">
          <div
            @touchstart="start(index+(a-1)*rank[0]*rank[1])"
            @touchend="end"
            @click="itemClick(index+(a-1)*rank[0]*rank[1])"
            v-show="index >= (i - 1) * rank[1] && index < i * rank[1] "
            class="k-grid-column"
            :style="[
          columnStyle,
          { opacity: clickEffect ? (current == index+(a-1)*rank[0]*rank[1] ? 0.5 : 1) : 1 },
        ]"
            :key="index"
            v-for="(item, index) in handleList[a-1]"
          >
            <img
              class="k-grid-img"
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
    </div>
    <div v-if="slide" class="k-grid-bottom" :style="{height:slide?'10%':'0%'}">
      <div class="k-grid-indicator-box">
        <div
          class="k-grid-indicator"
          :style="{marginLeft:left+'%',width:1/Math.ceil(list.length / (rank[0] * rank[1]))*100+'%'}"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "k-grid",
  data() {
    return {
      current: -1,
      //指示器的left，单位百分比
      left: 0,
      //item的宽度，单位px
      width: 0,
      //处理传过来的list
      handleList: []
    };
  },
  mounted() {
    this.width = this.$refs.grid.clientWidth;
    this.handleData();
  },
  watch: {
    //观察宫格数据变化更新布局
    list() {
      this.handleData();
    },
    //观察排列方式变化更新布局
    rank() {
      this.handleData();
    }
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
    },
    //grid容器滚动事件
    scrollX(e) {
      const num = Math.ceil(this.list.length / (this.rank[0] * this.rank[1]));
      const width = num * e.target.clientWidth;
      const scrollLength = width - e.target.clientWidth;
      this.left = (e.target.scrollLeft / scrollLength) * (1 - 1 / num) * 100;
    },
    //艰辛的宫格数据处理
    handleData() {
      this.handleList = [];
      let abc = [];
      for (let i in this.list) {
        abc.push(this.list[i]);
        if ((parseInt(i) + 1) % (this.rank[0] * this.rank[1]) == 0) {
          this.handleList.push(abc);
          abc = [];
        } else {
          if (this.list.length - 1 == i) this.handleList.push(abc);
        }
      }
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
    },
    //是否可滑动
    slide: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style scoped>
@import "./grid.css";
</style>
