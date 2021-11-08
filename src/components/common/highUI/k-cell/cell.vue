<template>
  <div class="k-cell">
    <div class="k-cell-piece" :key="index" v-for="(item,index) in list">
      <div class="k-cell-head">
        <span class="k-cell-head-text">{{item.head}}</span>
      </div>
      <div class="k-cell-body">
        <div
          class="k-cell-item"
          @touchstart.stop="touchStart(index,index2)"
          @touchend.stop="touchEnd"
          @click.stop="itemClick(item2)"
          :key="index2"
          v-for="(item2,index2) in item.body"
          :style="{'border-top-style':index2==0?'solid':'none',transitionDuration:transitionTime + 'ms',backgroundColor:index==headIndex?index2==touchIndex?'rgb(242,242,242)':'white':'white',height:item2.describe!=''?(height+20)+'px':height+'px'}"
        >
          <div class="k-cell-left" :style="{opacity:item2.disable?0.5:item2.loading?0.5:1}">
            <img class="k-cell-icon1" :src="item2.icon" />
            <div class="k-cell-left-text-box">
              <div class="k-cell-name">{{item2.name}}</div>
              <div v-if="item2.describe != ''" class="k-cell-describe">{{item2.describe}}</div>
            </div>
          </div>
          <div class="k-cell-right" :style="{opacity:item2.disable?0.5:item2.loading?0.5:1}">
            <div class="k-cell-right-text">{{item2.rightText}}</div>
            <img
              class="k-cell-arrow"
              src="/img/cell/arrow.svg"
              v-if="item2.rightIcon.type=='arrow' && !item2.loading"
            />
            <div class="k-cell-switch" v-if="item2.rightIcon.type=='switch' && !item2.loading">
              <k-switch
                @change="switchChange"
                :width="40"
                :height="20"
                bgColor="primary"
                :disable="item2.disable"
              ></k-switch>
            </div>
            <div
              class="k-cell-badge"
              v-if="item2.rightIcon.type=='badge' && !item2.loading"
            >{{item2.rightIcon.count>99?'99+':item2.rightIcon.count}}</div>
            <img
              class="k-cell-icon2"
              :src="item2.rightIcon.src"
              v-if="item2.rightIcon.type=='custom' && !item2.loading"
            />
            <img
              class="k-cell-loading"
              src="/img/cell/loading.svg"
              v-if="item2.loading"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//局部引入switch组件,这里可能要用到
import Kswitch from "components/common/baseUI/k-switch/switch.vue";
export default {
  name: "k-cell",
  components: {
    "k-switch": Kswitch
  },
  data() {
    return {
      transitionTime: 0,
      touchIndex: -1,
      headIndex: -1
    };
  },
  methods: {
    //item被点击事件，发射事件通知父组件
    itemClick(item) {
      if (item.disable) return;
      this.$emit("itemClick", item);
    },
    //手指按下事件
    touchStart(index, index2) {
      if (this.list[index].body[index2].disable) return;
      this.touchIndex = index2;
      this.headIndex = index;
      this.transitionTime = 0;
    },
    //手指抬起事件
    touchEnd() {
      this.touchIndex = -1;
      this.headIndex = -1;
      this.transitionTime = 300;
    },
    //开关状态变化事件
    switchChange(value) {
      //发射开关状态变化事件
      this.$emit("switchStatus", value);
    }
  },
  props: {
    //列表数据
    list: {
      type: Array,
      required: true
    },
    //每行的高度,单位px
    height: {
      type: Number,
      default: 50
    }
  }
};
</script>

<style scoped>
@import "./cell.css";
</style>
