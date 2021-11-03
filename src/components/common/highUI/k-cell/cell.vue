<template>
  <div class="k-cell">
    <div class="k-cell-piece" :key="index" v-for="(item,index) in list">
      <div class="k-cell-head">
        <span class="k-cell-head-text">{{item.head}}</span>
      </div>
      <div class="k-cell-body">
        <div class="k-cell-item" @touchstart.stop="touchStart(index,index2)" @touchend.stop="touchEnd" @click.stop="itemClick(item2)" :key="index2" v-for="(item2,index2) in item.body" :style="{'border-top-style':index2==0?'solid':'none',transitionDuration:transitionTime + 'ms',backgroundColor:index==headIndex?index2==touchIndex?'rgb(242,242,242)':'white':'white',height:item2.describe!=''?'66px':'50px'}">
          <div class="k-cell-left">
            <img class="k-cell-icon1" :src="item2.icon">
            <div class="k-cell-left-text-box">
              <div class="k-cell-name">{{item2.name}}</div>
              <div v-if="item2.describe != ''" class="k-cell-describe">{{item2.describe}}</div>
            </div>
          </div>
          <div class="k-cell-right">
            <div class="k-cell-right-text">{{item2.rightText}}</div>
            <img class="k-cell-arrow" src="./img/arrow.svg" v-if="item2.rightCustom.type==0" >
            <div class="k-cell-switch" v-if="item2.rightCustom.type==1">

            </div>
            <div class="k-cell-badge" v-if="item2.rightCustom.type==2">

            </div>
            <img class="k-cell-icon2" :src="item2.rightCustom.src" v-if="item2.rightCustom.type==3" >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'k-cell',
  data() {
    return {
      transitionTime: 0,
      touchIndex:-1,
      headIndex:-1
    }
  },
  methods: {
    //item被点击事件，发射事件通知父组件
    itemClick(item) {
      this.$emit('itemClick',item)
    },
    //手指按下事件
    touchStart(index,index2) {
      this.touchIndex = index2
      this.headIndex = index
      this.transitionTime = 0;
    },
    //手指抬起事件
    touchEnd() {
      this.touchIndex = -1
      this.headIndex = -1
      this.transitionTime = 300;
    }
  },
  props: {
    //列表数据
    list:{
      type:Array,
      required:true
    },
    //每行的高度,单位px
    height:{
      type:Number,
      default:50
    },
    //

  },
}
</script>

<style scoped>
@import './cell.css';
</style>
