<template>
  <div ref="search" class="k-search">
    <img @click="backClick" ref="back" v-if="leftBack" class="k-back-icon" src="/img/search/back.svg" />
    <div id="body" ref="body" class="k-search-body" :style="[bodyStyle,{width:bodyWidth+'px'},borderStyle]">
      <img @click="leftClick" ref="left" v-if="leftIcon!='none'" class="k-left-icon" :src="leftIcon=='search'?'/img/search/search.svg':leftIcon=='scan'?'/img/search/scan.svg':leftIcon" />
      <div class="k-search-input-box" :style="[{width:inputWidth + 'px'}]">
        <input @focus="focus" @blur="blur" @input="input" class="k-search-input" type="text" v-model="selfValue" :placeholder="placeholder" :style="{textAlign: textPosition=='center'?'center':'left'}" />
        <div class="k-search-trend"></div>
      </div>
      <img @touchstart='clearOpacity=true' @touchend='clearOpacity=false' :style="{opacity:clearOpacity?0.5:1}" @click="selfValue=''" ref="clear" v-if="useClear && selfValue!=''" class="k-clear-icon" src="/img/search/clear.svg" />
      <img @click="rightClick" ref="right" v-if="rightIcon!='none'" class="k-right-icon" :src="rightIcon=='camera'?'/img/search/camera.svg':rightIcon=='scan'?'/img/search/scan.svg':rightIcon" />
      <k-button @click="btnClick" id='btnin' v-if="btnPosition=='inside' && showBtn" class="k-in-btn" bgColor="primary" :style="{height:btnHeight+'px'}">{{btnText}}</k-button>
    </div>
    <k-button @click="btnClick" id='btnOne' v-if="btnPosition=='outside' && showBtn && btnStyle" class="k-out-btn" bgColor="primary">{{btnText}}</k-button>
    <div @touchstart='btnOpacity=true' @touchend='btnOpacity=false'  :style="{opacity:btnOpacity?0.5:1,color:btnColor,fontSize:fontSize+'px'}" @click="btnClick" ref="btnTwo" v-if="btnPosition=='outside' && showBtn && !btnStyle" class="k-out-text">{{btnText}}</div>
  </div>
</template>
<script>
//局部引入组件
import Kbutton from "components/common/baseUI/k-button/button.vue";
export default {
  //非常牛逼的搜索框组件，props可传近20个参数，整合了QQ，微信，百度，淘宝的搜索框样式
  name: "k-search",
  components:{
    "k-button":Kbutton
  },
  data() {
    return {
      //input盒子的计算宽度
      inputWidth: 0,
      //body盒子的计算宽度
      bodyWidth: 0,
      //搜索按钮的高度
      btnHeight:0,
      //绑定值
      selfValue:'',
      //控制清除按钮的透明度
      clearOpacity:false,
      //控制外部无样式按钮的透明度
      btnOpacity:false
    };
  },
  watch:{
    //观察value变化更新子组件的value
    value(value){
      this.selfValue = value
    },
    //观察是否显示左侧返回变化更新body的宽度
    leftBack(value){
      if(value)this.bodyWidth -= 20
      if(!value)this.bodyWidth += 20
    },
    //观察按钮是否显示变化更新body的宽度
    showBtn(value){
      if(value){
        if(this.btnPosition=='outside'){
          if(!this.btnStyle)this.bodyWidth -= 50
          if(this.btnStyle)this.bodyWidth -= 60
        }
      }
      if(!value){
        if(this.btnPosition=='outside'){
          if(!this.btnStyle)this.bodyWidth += 50
          if(this.btnStyle)this.bodyWidth += 60
        }
      }
    },
    //观察按钮样式变化更新body的宽度
    btnStyle(value){
      if(this.showBtn){
        if(this.btnPosition=='outside'){
          if(!value)this.bodyWidth += 10
          if(value)this.bodyWidth -= 10
        }
      }
    },
    //观察按钮位置变化更新body的宽度
    btnPosition(value){
      if(value=='inside'){
        if(this.btnStyle)this.bodyWidth += 60
        if(!this.btnStyle)this.bodyWidth += 50
      }
      if(value=='outside'){
        if(this.btnStyle)this.bodyWidth -= 60
        if(!this.btnStyle)this.bodyWidth -= 50
      }
    }

  },
  mounted() {
    //初始化数据
    this.selfValue = this.value
    this.computeWidth()

  },
  computed: {
    //body的样式
    bodyStyle() {
      const style = {};
      style.borderRadius = this.radius + 'px'
      style.backgroundColor = this.bgColor
      style.fontSize = this.fontSize + 'px'
      return style
    }
  },
  methods: {
    //按钮被点击事件
    btnClick() {
      this.$emit("btnClick", this.selfValue);
    },
    //搜索框获得焦点
    focus() {
      this.$emit("focus");
    },
    //搜搜框失去焦点
    blur() {
      this.$emit("blur");
    },
    //搜索框输入事件
    input() {
      this.$emit("input", this.selfValue);
    },
    //返回按钮被点击
    backClick(){
      this.$emit('backClick')
    },
    //左侧图标被点击
    leftClick(){
      this.$emit('leftClick')
    },
    //右侧图标被点击
    rightClick() {
      this.$emit('rightClick')
    },
    //计算宽度
    computeWidth(){
      //计算可用宽度
    this.bodyWidth = this.$refs.search.clientWidth
    if(this.leftBack) this.bodyWidth -= this.$refs.back.clientWidth
    if(this.btnPosition=='outside' && this.showBtn && this.btnStyle) this.bodyWidth -= document.getElementById('btnOne').clientWidth
    if(this.btnPosition=='outside' && this.showBtn && !this.btnStyle) this.bodyWidth -= this.$refs.btnTwo.clientWidth

    this.inputWidth = this.bodyWidth
    if(this.leftIcon!='none') this.inputWidth -= this.$refs.left.clientWidth
    if(this.useClear && this.selfValue!='') this.inputWidth -= this.$refs.clear.clientWidth
    if(this.rightIcon!='none') this.inputWidth -= this.$refs.right.clientWidth
    if(this.btnPosition=='inside' && this.showBtn) this.inputWidth -= document.getElementById('btnin').clientWidth
    //计算按钮高度
    this.btnHeight = this.$refs.search.clientHeight - 4

    console.log(this.bodyWidth)
    console.log(this.inputWidth)

    }
  },
  props: {
    //搜索框的圆角值，单位px
    radius: {
      type: Number,
      default: 50
    },
    //搜索框的背景颜色
    bgColor: {
      type: String,
      default: "white"
    },
    //搜索框提示内容
    placeholder: {
      type: String,
      default: "关键词"
    },
    //搜索框内容的字体大小
    fontSize: {
      type: Number,
      default: 13
    },
    //搜索框初始值
    value: {
      type: String,
      default: ""
    },
    //搜索框边框样式
    borderStyle: {
      type: Object,
    },
    //是否显示按钮
    showBtn: {
      type: Boolean,
      default: true
    },
    //是否使用清除按钮
    useClear: {
      type: Boolean,
      default: true
    },
    //按钮显示的文本
    btnText: {
      type: String,
      default: "搜索"
    },
    //文本显示位置，分为left，center
    textPosition: {
      type: String,
      default: "left"
    },
    //左侧图标，分为search搜索图标，scan扫码图标，none不显示，自定义其他图标传输路径即可
    leftIcon: {
      type: String,
      default: "search"
    },
    //按钮有无样式,无样式为普通文本，有样式为k-button的样式
    btnStyle: {
      type: Boolean,
      default: false
    },
    //无样式按钮的文字颜色
    btnColor:{
      type:String,
      default:'black'
    },
    //按钮所在位置，分为outside处于外面和inside处于里面
    btnPosition: {
      type: String,
      default: "outside"
    },
    //右侧图标分为camera相机图标，scan扫码图标，none不显示，自定义其他图标传输路径即可
    rightIcon: {
      type: String,
      default: "none"
    },
    //左边是否使用返回按钮
    leftBack: {
      type: Boolean,
      default: false
    },
    //是否使用动态循环推荐
    trend: {
      type: Boolean,
      default: true
    },
    //动态推荐的搜索内容
    trendContent: {
      type: Array,
      default() {
        return ["马甲", "芭比娃娃", "充气娃娃"];
      }
    }
  }
};
</script>
<style scoped>
@import "./search.css";
</style>
