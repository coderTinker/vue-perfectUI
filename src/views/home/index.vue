<template>
  <div class="home">
    <k-cell :list="list" style="width:100%;height:100%" @itemClick="itemClick"></k-cell>
  </div>
</template>

<script>
//引入组件列表数据
import componentsList from './const';
//引入k-cell组件
import cell from 'components/common/highUI/k-cell/cell.vue';
export default {
  name:'home',
  components: {
    "k-cell":cell
  },
  data() {
    return {
      list:componentsList,
    }
  },
  methods: {
    //item被点击，进入到指定组件demo页面
    itemClick(item) {
      this.$router.replace({
        path:item.route
      })
    }
  }
}
</script>

<style scoped>
@import './home.css';
</style>
