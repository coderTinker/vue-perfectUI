<template>
  <div id="demo" class="demo">
    <div id="top" class="top">
      <div class="top-left">
        <img @click="clickBack" class="top-back" src="/img/back.svg" />
      </div>
      <div class="top-title">{{$route.meta.title}}</div>
      <div class="top-right"></div>
    </div>
    <div id="showBox" class="show-box">
      <div class="show-title">演示效果</div>
      <!-- slider组件展示代码 -->
      <k-slider
        class="show-component"
        style="flex:auto 0 0;"
        @change="valueChange"
        :selectColor="selectColor"
        :lienHeight="lienHeight"
        :circleR="circleR"
        :circleColor="circleColor"
        :region="region"
        :value="value"
        :disable="disable"
        :showValue="showValue"
      ></k-slider>
      <div
        style="margin-top:20px;border-radius:8px;background-color:rgb(230,230,230);border-style:dashed;border-width:0.5px;border-color:rgb(200,200,200);font-size:16px;padding:8px;color:rgba(0,0,0,0.5);flex:auto 0 0;"
      >滑块值：{{valueRecord}}</div>
    </div>
    <div id="head" class="params-head">参数配置</div>
    <div class="params-body" :style="{height:paramsHeight + 'px'}">
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">自定义颜色</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['primary','error','warning','success']"
          @change="changeStyle"
          :index="params[0]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">自定义尺寸</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['是','否']"
          @change="changeSize"
          :index="params[1]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">最大值最小值</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['0-100','-50-50','20-80']"
          @change="changeMinMax"
          :index="params[2]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">是否禁用</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['是','否']"
          @change="changeDisable"
          :index="params[3]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">步进值</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['1','5','10']"
          @change="changeStep"
          :index="params[4]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">自定义指示器</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['白色','海蓝','天青']"
          @change="changeIndicator"
          :index="params[5]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">使用悬浮提示值</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['是','否']"
          @change="changeHang"
          :index="params[6]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">显示形式</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['横向','竖向']"
          @change="changeType"
          :index="params[7]"
        ></k-subsection>
      </div>
    </div>
  </div>
</template>

<script>
//局部引入组件
import Kslider from "components/common/baseUI/k-slider/slider.vue";
export default {
  components: {
    "k-slider": Kslider
  },
  data() {
    return {
      //选择部分颜色
      selectColor: "primary",
      //线条高度,单位px
      lienHeight: 2,
      //圆的直径,单位px
      circleR: 25,
      //圆的背景颜色
      circleColor: "white",
      //最小值和最大值
      region: [0, 100],
      //初始值
      value: 30,
      //是否禁用
      disable: false,
      //是否使用悬浮提示进度值
      showValue: false,
      //步进值
      step: 1,
      //记录滑块值变量
      valueRecord: 30,

      //参数配置内容的自适应高度
      paramsHeight: 100,
      //默认参数配置
      params: [0, 1, 0, 1, 0, 0, 1,0]
    };
  },
  methods: {
    //返回按键
    clickBack() {
      this.$router.replace("/");
    },
    //背景样式改变
    changeStyle(index) {
      const style = ["primary", "error", "warning", "success"];
      this.selectColor = style[index];
    },
    //自定义尺寸
    changeSize(index) {
      const size = [
        {
          circleR: 20,
          height: 5
        },
        {
          circleR: 25,
          height: 2
        }
      ];
      this.circleR = size[index].circleR;
      this.lienHeight = size[index].height;
    },
    //最大值最小值
    changeMinMax(index) {
      const minMax = [
        [0, 100],
        [-50, 50],
        [20, 80]
      ];
      this.region = minMax[index];
    },
    //是否禁用
    changeDisable(index) {
      const useDisable = [true, false];
      this.disable = useDisable[index];
    },
    //步进值
    changeStep(index) {
      const stepRegion = [1, 5, 10];
      this.step = stepRegion[index];
    },
    //自定义指示器
    changeIndicator(index) {
      const custom = ["white", "#0081ff", "#1cbbb4"];
      this.circleColor = custom[index];
    },
    //滑块值改变事件
    valueChange(value) {
      this.valueRecord = value;
    },
    //使用悬浮提示值
    changeHang(index) {
      //暂未开发
    },
    //改变显示形式
    changeType(index) {
      //暂未开发
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
