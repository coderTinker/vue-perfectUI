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
      <!-- search组件展示代码 -->
      <k-search
        class="show-component"
        style="flex:auto 0 0;"
        @btnClick="btnClick"
        @focus="focus"
        @blur="blur"
        @input="input"
        @backClick="backClick"
        @leftClick="leftClick"
        @rightClick="rightClick"
        :radius="radius"
        :value="value"
        :borderStyle="borderStyle"
        :showBtn="showBtn"
        :useClear="useClear"
        :textPosition="textPosition"
        :leftIcon="leftIcon"
        :btnStyle="btnStyle"
        :btnPosition="btnPosition"
        :rightIcon="rightIcon"
        :leftBack="leftBack"
        :trend="trend"
      ></k-search>
    </div>
    <div id="head" class="params-head">参数配置</div>
    <div class="params-body" :style="{height:paramsHeight + 'px'}">
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">搜索框形状</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['圆形','方形']"
          @change="changeShape"
          :index="params[0]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">初始值</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['空','芭比娃娃']"
          @change="changeValue"
          :index="params[1]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">显示返回图标</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['是','否']"
          @change="changeBack"
          :index="params[2]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">显示按钮</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['是','否']"
          @change="changeBtnShow"
          :index="params[3]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">按钮位置</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['搜索框内','搜索框外']"
          @change="changeBtnPosition"
          :index="params[4]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">文本位置</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['左对齐','居中']"
          @change="changeTextPosition"
          :index="params[5]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">按钮样式</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['无样式','精美按钮']"
          @change="changeBtnStyle"
          :index="params[6]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">左侧图标</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['搜索图标','扫码图标','自定义','不显示']"
          @change="changeLeftIcon"
          :index="params[7]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">右侧图标</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['照相图标','扫码图标','自定义','不显示']"
          @change="changeRightIcon"
          :index="params[8]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">是否使用清除按钮</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['是','否']"
          @change="changeClear"
          :index="params[9]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">搜索框边框样式</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['primary','success','error','warning','none']"
          @change="changeBorder"
          :index="params[10]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">是否开启动态推送搜索热词</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['是','否']"
          @change="changeTrend"
          :index="params[11]"
        ></k-subsection>
      </div>
    </div>
  </div>
</template>

<script>
//局部引入组件
import Ksearch from "components/common/highUI/k-search/search.vue";
export default {
  components: {
    "k-search": Ksearch
  },
  data() {
    return {
      //搜索框的圆角值，单位px
      radius: 50,
      //初始值
      value: "",
      //搜索框边框样式
      borderStyle: {},
      //是否显示按钮
      showBtn: true,
      //是否使用清除按钮
      useClear: true,
      //文本显示位置，分为left，center
      textPosition: "left",
      //左侧图标，分为search搜索图标，scan扫码图标，none不显示，自定义其他图标传输路径即可
      leftIcon: "search",
      //按钮有无样式,无样式为普通文本，有样式为k-button的样式
      btnStyle: false,
      //按钮所在位置，分为outside处于外面和inside处于里面
      btnPosition: "outside",
      //右侧图标分为camera相机图标，scan扫码图标，none不显示，自定义其他图标传输路径即可
      rightIcon: "none",
      //左边是否使用返回按钮
      leftBack: false,
      //是否使用动态循环推荐
      trend: false,

      //提示框显示文字
      toastText: "",
      //控制提示框是否显示
      toastShow: false,

      //参数配置内容的自适应高度
      paramsHeight: 100,
      //默认参数配置
      params: [0, 0, 1, 0, 1, 0, 0, 0, 3, 0, 4, 1]
    };
  },
  methods: {
    //返回按键
    clickBack() {
      this.$router.replace("/");
    },
    //提示框关闭事件
    toastClose() {
      this.toastShow = false;
    },
    //搜索按钮被点击事件
    btnClick(value) {
      this.toastText = "搜索内容:" + value;
      this.toastShow = true;
    },
    //获取焦点事件
    focus() {
      this.toastText = "输入框获得焦点";
      this.toastShow = true;
    },
    //失去焦点事件
    blur() {
      this.toastText = "输入框失去焦点";
      this.toastShow = true;
    },
    //输入框输入内容事件
    input(value) {
      this.toastText = "当前内容:" + value;
      this.toastShow = true;
    },
    //返回被点击事件
    backClick() {
      this.toastText = "返回按钮被点击";
      this.toastShow = true;
    },
    //返回被点击事件
    leftClick() {
      this.toastText = "左侧图标被点击";
      this.toastShow = true;
    },
    //返回被点击事件
    rightClick() {
      this.toastText = "右侧图标被点击";
      this.toastShow = true;
    },
    //改变搜索框形状
    changeShape(index) {
      const Radius = [50, 5];
      this.radius = Radius[index];
    },
    //改变初始值
    changeValue(index) {
      const Value = ["", "芭比娃娃"];
      this.value = Value[index];
    },
    //改变是否显示返回图标
    changeBack(index) {
      const back = [true, false];
      this.leftBack = back[index];
    },
    //改变是否显示按钮
    changeBtnShow(index) {
      const btn = [true, false];
      this.showBtn = btn[index];
    },
    //改变按钮位置
    changeBtnPosition(index) {
      const position = ["inside", "outside"];
      this.btnPosition = position[index];
    },
    //改变文本位置
    changeTextPosition(index) {
      const position = ["left", "center"];
      this.textPosition = position[index];
    },
    //改变按钮样式
    changeBtnStyle(index) {
      const style = [false, true];
      this.btnStyle = style[index];
    },
    //改变左侧图标
    changeLeftIcon(index) {
      const icon = ["search", "scan", "/img/list/button.svg", "none"];
      this.leftIcon = icon[index];
    },
    //改变右侧图标
    changeRightIcon(index) {
      const icon = ["camera", "scan", "/img/list/button.svg", "none"];
      this.rightIcon = icon[index];
    },
    //改变是否使用清除按钮
    changeClear(index) {
      const clear = [true, false];
      this.useClear = clear[index];
    },
    //改变搜索框边框样式
    changeBorder(index) {
      const border = [
        {
          borderColor: "#007aff",
          borderWidth: "1px",
          borderStyle: "solid"
        },
        {
          borderColor: "#4cd964",
          borderWidth: "1px",
          borderStyle: "solid"
        },
        {
          borderColor: "#dd524d",
          borderWidth: "1px",
          borderStyle: "solid"
        },
        {
          borderColor: "#f0ad4e",
          borderWidth: "1px",
          borderStyle: "solid"
        },
        {
          borderStyle: "none"
        }
      ];
      this.borderStyle = border[index];
    },
    //改变是否使用动态推送热搜词
    changeTrend(index) {
      const Trend = [true, false];
      this.trend = Trend[index];
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
