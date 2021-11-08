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
      <!-- cell组件展示代码 -->
      <k-cell
        class="show-component"
        style="height:170px;width:100%;flex:auto 0 0;"
        @itemClick="itemClick"
        @switchStatus="switchStatus"
        :list="list"
      ></k-cell>
    </div>
    <div id="head" class="params-head">参数配置</div>
    <div class="params-body" :style="{height:paramsHeight + 'px'}">
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">右侧图标</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['箭头','开关','徽标','自定义','不显示']"
          @change="changeRightIcon"
          :index="params[0]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">右侧文字</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['诗人','政治家','军事家','不显示']"
          @change="changeRightText"
          :index="params[1]"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">描述信息</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['显示','隐藏']"
          @change="changeDescribe"
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
          <span class="tag-text">加载中</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['是','否']"
          @change="changeLoading"
          :index="params[4]"
        ></k-subsection>
      </div>
    </div>
  </div>
</template>

<script>
//局部引入组件
import Kcell from "components/common/highUI/k-cell/cell.vue";
//引入单元格数据列表
import list from "./const";
export default {
  components: {
    "k-cell": Kcell
  },
  data() {
    return {
      //单元格数据列表
      list: list,
      //提示框显示文字
      toastText: "",
      //控制提示框是否显示
      toastShow: false,

      //参数配置内容的自适应高度
      paramsHeight: 100,
      //默认参数配置
      params: [0, 0, 1, 1, 1]
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
    //单元格被点击事件
    itemClick(item) {
      this.toastText = "名字：" + item.name + "，路由：" + item.path;
      this.toastShow = true;
    },
    //单元格开关状态变化事件
    switchStatus(value) {
      if(value)this.toastText = '已打开';
      if(!value)this.toastText = '已关闭';
      this.toastShow = true;
    },
    //改变右侧图标
    changeRightIcon(index) {
      const icon = ["arrow", "switch", "badge", "custom", "none"];
      this.list[0].body[1].rightIcon.type = icon[index];
    },
    //改变右侧文字内容
    changeRightText(index) {
      const text = ["诗人", "政治家", "军事家", ""];
      this.list[0].body[1].rightText = text[index];
    },
    //改变是否显示描述信息
    changeDescribe(index) {
      const describe = ["作者：李白", ""];
      this.list[0].body[1].describe = describe[index];
    },
    //改变禁用状态
    changeDisable(index) {
      const disable = [true, false];
      this.list[0].body[1].disable = disable[index];
    },
    //改变是否加载中
    changeLoading(index) {
      const loading = [true, false];
      this.list[0].body[1].loading = loading[index];
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
