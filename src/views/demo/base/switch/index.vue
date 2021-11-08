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
      <!-- switch组件展示代码 -->
      <k-switch
        @change="noticeChange"
        :status='status'
        class="show-component"
        style="flex:auto 0 0;"
        :width='sthWidth'
        :height='sthHeight'
        :bgColor="bgColor"
        :disable="disable"
      ></k-switch>
    </div>
    <div id="head" class="params-head">参数配置</div>
    <div class="params-body" :style="{height:paramsHeight + 'px'}">
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">颜色</span>
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
          <span class="tag-text">尺寸大小</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['40','60','80']"
          @change="changeSize"
          :index="params[1]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">状态</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['关闭','打开']"
          @change="changeStatus"
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
    </div>
  </div>
</template>

<script>
//局部引入组件
import Kswitch from "components/common/baseUI/k-switch/switch.vue";
export default {
  components: {
    "k-switch": Kswitch
  },
  data() {
    return {
      //开关背景色
      bgColor: "primary",
      //开关状态
      status:false,
      //是否禁用开关
      disable: false,
      //开关宽度
      sthWidth: 40,
      //开关高度
      sthHeight: 20,

      //参数配置内容的自适应高度
      paramsHeight: 100,
      //默认参数配置
      params: [0, 0, 0, 1],
    };
  },
  methods: {
    //返回按键
    clickBack() {
      this.$router.replace("/");
    },
    //开关被点击事件
    noticeChange() {
      //做些什么...
    },
    //改变开关状态
    changeStatus(index) {
      const status = [false,true]
      this.status = status[index]
    },
    //背景样式改变
    changeStyle(index) {
      const style = [ "primary", "error", "warning", "success"];
      this.bgColor = style[index];
    },
    //改变开关大小
    changeSize(index) {
      const size = [
        {
          width:40,
          height:20
        },
        {
          width:60,
          height:30
        },
        {
          width:80,
          height:40
        }
      ];
      this.sthWidth = size[index].width;
      this.sthHeight = size[index].height;
    },
    //改变禁用状态
    changeDisable(index) {
      const disable = [true, false];
      this.disable = disable[index];
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
