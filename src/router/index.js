import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const home = ()=> import('views/home/index.vue')

//base组件
const button = ()=> import('views/demo/base/button/index.vue')
const radio = ()=> import('views/demo/base/radio/index.vue')
const checkbox = ()=> import('views/demo/base/checkbox/index.vue')
const Switch = ()=> import('views/demo/base/switch/index.vue')
const badge = ()=> import('views/demo/base/badge/index.vue')
const tags = ()=> import('views/demo/base/tags/index.vue')
const count = ()=> import('views/demo/base/count/index.vue')
const toast = ()=> import('views/demo/base/toast/index.vue')
const progress = ()=> import('views/demo/base/progress/index.vue')
const slider = ()=> import('views/demo/base/slider/index.vue')

//high组件
const noticebar = ()=> import('views/demo/high/noticebar/index.vue')
const search = ()=> import('views/demo/high/search/index.vue')
const subsection = ()=> import('views/demo/high/subsection/index.vue')
const cell = ()=> import('views/demo/high/cell/index.vue')
const table = ()=> import('views/demo/high/table/index.vue')
const grid = ()=> import('views/demo/high/grid/index.vue')
const picker = ()=> import('views/demo/high/picker/index.vue')
const scroll = ()=> import('views/demo/high/scroll/index.vue')
const lazyload = ()=> import('views/demo/high/lazyload/index.vue')
const dropdown = ()=> import('views/demo/high/dropdown/index.vue')

//super组件
const waterfall = ()=> import('views/demo/super/waterfall/index.vue')
const popup = ()=> import('views/demo/super/popup/index.vue')
const tabbar = ()=> import('views/demo/super/tabbar/index.vue')
const swiper = ()=> import('views/demo/super/swiper/index.vue')
const tabs = ()=> import('views/demo/super/tabs/index.vue')
const steps = ()=> import('views/demo/super/steps/index.vue')
const indexlist = ()=> import('views/demo/super/indexlist/index.vue')
const barrage = ()=> import('views/demo/super/barrage/index.vue')

const router = new VueRouter({
  mode: 'history',
  routes:[
    {
      path:'/',
      redirect:'/html/perfectUI/index.html-home'
    },
    {
      path:'/html/perfectUI/index.html',
      redirect:'/html/perfectUI/index.html-home'
    },
    {
      path:'/html/perfectUI/index.html-home',
      component:home,
      meta:{
        title:'vue-perfectUI移动端组件库'
      }
    },
    //base组件
    {
      path:'/html/perfectUI/index.html-components-button',
      component:button,
      meta:{
        title:'button 按钮'
      }
    },
    {
      path:'/html/perfectUI/index.html-components-radio',
      component:radio,
      meta:{
        title:'radio 单选框'
      }
    },
    {
      path:'/html/perfectUI/index.html-components-checkbox',
      component:checkbox,
      meta:{
        title:'checkbox 复选框'
      }
    },
    {
      path:'/html/perfectUI/index.html-components-switch',
      component:Switch,
      meta:{
        title:'switch 开关'
      }
    },
    {
      path:'/html/perfectUI/index.html-components-badge',
      component:badge,
      meta:{
        title:'badge 徽标数'
      }
    },
    {
      path:'/html/perfectUI/index.html-components-tags',
      component:tags,
      meta:{
        title:'tags 标签'
      }
    },
    {
      path:'/html/perfectUI/index.html-components-count',
      component:count,
      meta:{
        title:'count 计数器'
      }
    },
    {
      path:'/html/perfectUI/index.html-components-toast',
      component:toast,
      meta:{
        title:'toast 弹出提示'
      }
    },
    {
      path:'/html/perfectUI/index.html-components-progress',
      component:progress,
      meta:{
        title:'progress 进度条'
      }
    },
    {
      path:'/html/perfectUI/index.html-components-slider',
      component:slider,
      meta:{
        title:'slider 滑动选择器'
      }
    },
    //high组件
    {
      path:'/html/perfectUI/index.html-components-noticebar',
      component:noticebar,
      meta:{
        title:'noticebar 滚动提示'
      }
    },
    {
      path:'/html/perfectUI/index.html-components-search',
      component:search,
      meta:{
        title:'search 搜索框'
      }
    },
    {
      path:'/html/perfectUI/index.html-components-subsection',
      component:subsection,
      meta:{
        title:'subsection 分段器'
      }
    },
    {
      path:'/html/perfectUI/index.html-components-cell',
      component:cell,
      meta:{
        title:'cell 单元格列表'
      }
    },
    {
      path:'/html/perfectUI/index.html-components-table',
      component:table,
      meta:{
        title:'table 表格'
      }
    },
    {
      path:'/html/perfectUI/index.html-components-grid',
      component:grid,
      meta:{
        title:'grid 宫格布局'
      }
    },
    {
      path:'/html/perfectUI/index.html-components-picker',
      component:picker,
      meta:{
        title:'picker 选择器'
      }
    },
    {
      path:'/html/perfectUI/index.html-components-scroll',
      component:scroll,
      meta:{
        title:'scroll 滚动容器'
      }
    },
    {
      path:'/html/perfectUI/index.html-components-lazyload',
      component:lazyload,
      meta:{
        title:'lazyload 图片懒加载'
      }
    },
    {
      path:'/html/perfectUI/index.html-components-dropdown',
      component:dropdown,
      meta:{
        title:'dropdown 下拉菜单'
      }
    },
    //super组件
    {
      path:'/html/perfectUI/index.html-components-waterfall',
      component:waterfall,
      meta:{
        title:'waterfall 瀑布流'
      }
    },
    {
      path:'/html/perfectUI/index.html-components-popup',
      component:popup,
      meta:{
        title:'popup 弹窗对话框'
      }
    },
    {
      path:'/html/perfectUI/index.html-components-tabbar',
      component:tabbar,
      meta:{
        title:'tabbar 底部导航'
      }
    },
    {
      path:'/html/perfectUI/index.html-components-swiper',
      component:swiper,
      meta:{
        title:'swiper 轮播图'
      }
    },
    {
      path:'/html/perfectUI/index.html-components-tabs',
      component:tabs,
      meta:{
        title:'tabs 顶部导航'
      }
    },
    {
      path:'/html/perfectUI/index.html-components-steps',
      component:steps,
      meta:{
        title:'steps 步骤条'
      }
    },
    {
      path:'/html/perfectUI/index.html-components-indexlist',
      component:indexlist,
      meta:{
        title:'indexlist 字母索引列表'
      }
    },
    {
      path:'/html/perfectUI/index.html-components-barrage',
      component:barrage,
      meta:{
        title:'barrage 弹幕'
      }
    },
  ]
});


//全局导航守卫
router.beforeEach((to,from,next)=>{
  document.title = to.matched[0].meta.title
  if(to.matched[0].meta.title !='vue-perfectUI移动端组件库'){
    document.title = 'Demo'
  }
  next()
})

export default router;
