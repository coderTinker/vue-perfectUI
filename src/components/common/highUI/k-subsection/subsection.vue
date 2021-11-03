<template>
  <div ref="subsection" class="k-subsection">
    <div class="k-subsection-mask" :style="{left:left+'px',width:(bodyWidth/list.length-6) + 'px'}"></div>
    <div @click="itemClick(index)" class="k-subsection-item" :key="index" v-for="(item,index) in list" :style="{width:100/list.length + '%',color:current==index?'black':'rgba(0,0,0,0.5)','font-weight':current==index?'bold':''}">{{item}}</div>
  </div>
</template>

<script>
export default {
  name:'k-subsection',
  data() {
    return {
      current:0,
      left:3,
      bodyWidth:0
    }
  },
  methods: {
    itemClick(index) {
      this.current = index
      this.left = index*this.bodyWidth/this.list.length + 3
      this.$emit('change',index)
    }
  },
  props: {
    //数据列表
    list:{
      type:Array,
      required:true
    },
    //默认选中的current
    index:{
      type:Number,
      default:0
    }

  },
  mounted() {
    this.current = this.index
    this.bodyWidth = this.$refs.subsection.clientWidth
    this.left = this.current*this.bodyWidth/this.list.length + 3
  }
}
</script>

<style scoped>
@import './subsection.css';
</style>
