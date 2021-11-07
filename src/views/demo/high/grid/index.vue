<template>
  <div id="demo" class="demo">
    <k-toast
      @close="toastClose"
      :text="toastText"
      :show="toastShow"
      position="top"
      bgColor="success"
    ></k-toast>
    <div id="top" class="top">
      <div class="top-left">
        <img @click="clickBack" class="top-back" src="/img/back.svg" />
      </div>
      <div class="top-title">{{$route.meta.title}}</div>
      <div class="top-right"></div>
    </div>
    <div id="showBox" class="show-box">
      <div class="show-title">演示效果</div>
      <!-- grid组件展示代码 -->
      <k-grid
        class="show-component"
        :style="{height:height + 'px'}"
        @itemClick="itemClick"
        :list="list"
        :rank="rank"
        :slide="slide"
      ></k-grid>
    </div>
    <div id="head" class="params-head">参数配置</div>
    <div class="params-body" :style="{height:paramsHeight + 'px'}">
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">修改行列数</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['2行4列','3行3列']"
          @change="changeRank"
          :index="params[0]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">是否可滑动</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['是','否']"
          @change="changeSlide"
          :index="params[1]"
        ></k-subsection>
      </div>
        <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">宫格数据设置</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['增加数据','减少数据']"
          @change="changeData"
          :index="params[2]"
        ></k-subsection>
      </div>
    </div>
  </div>
</template>

<script>
//局部引入组件
import Kgrid from "components/common/highUI/k-grid/grid.vue";
//引入宫格数据列表
import list from "./const";
export default {
  components: {
    "k-grid": Kgrid
  },
  data() {
    return {
      //宫格数据
      list: list,
      //几行几列,默认2行4列
      rank: [2, 4],
      //是否可滑动
      slide: false,
      //提示框显示文字
      toastText: "",
      //控制提示框是否显示
      toastShow: false,
      //grid的高度
      height:180,

      //参数配置内容的自适应高度
      paramsHeight: 100,
      //默认参数配置
      params: [0, 1,1]
    };
  },
  methods: {
    //返回按键
    clickBack() {
      this.$router.replace("/");
    },
    //单元格点击事件
    itemClick(index) {
      this.toastText = "第" + index + "个被点击";
      this.toastShow = true;
    },
    //提示框关闭事件
    toastClose() {
      this.toastShow = false;
    },
    //改变几行几列,默认2行4列
    changeRank(index) {
      const Height = [180,240]
      this.height = Height[index]
      const Rank = [
        [2, 4],
        [3, 3]
      ];
      this.rank = Rank[index];
    },
    //改变是否可滑动
    changeSlide(index) {
      const Slide = [true, false];
      this.slide = Slide[index];
    },
    //增加或者减少宫格数据
    changeData(index) {
      const Data = [true, false];
      const pushData = {
        src: "/img/grid/5.png",
        text: "个护美妆",
      }
      if(Data[index]){
        for(let i=0;i<6;i++ ){
          this.list.push(JSON.parse(JSON.stringify(pushData)))
        }
      }
      else{
        this.list.splice(this.list.length-6,6)
      }

    }
  },
  mounted() {
    //计算参数配置盒子的自适应高度
    this.paramsHeight =
      document.getElementById("demo").clientHeight -
      document.getElementById("top").clientHeight -
      document.getElementById("showBox").clientHeight -
      document.getElementById("head").clientHeight -
      20 -
      12;
  }
};
</script>

<style scoped>
</style>
