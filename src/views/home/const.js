//组件数据对象
const list = [
  //基本组件
  {
    head:'base组件',
    body:[
      {
        name:'button 按钮',
        icon: 'http://81.68.243.94/image/list/button.svg',
        route:'/html/perfectUI/index.html-components-button',//此处独有信息
        describe:'',
        rightText:'',
        rightCustom:{
          type:0,//0为箭头，1为switch开关，2为徽标数，3为自定义图标
          count:1000,//徽标数量
          src:''//自定义图标路径
        }
      },
      {
        name:'radio 单选框',
        icon: 'http://81.68.243.94/image/list/radio.svg',
        route:'/html/perfectUI/index.html-components-radio',
        describe:'',
        rightText:'',
        rightCustom:{
          type:0,
          count:1000,
          src:''
        }
      },
      {
        name:'checkbox 复选框',
        icon: 'http://81.68.243.94/image/list/checkbox.svg',
        route:'/html/perfectUI/index.html-components-checkbox',
        describe:'',
        rightText:'',
        rightCustom:{
          type:0,
          count:1000,
          src:''
        }
      },
      {
        name:'switch 开关',
        icon: 'http://81.68.243.94/image/list/switch.svg',
        route:'/html/perfectUI/index.html-components-switch',
        describe:'',
        rightText:'',
        rightCustom:{
          type:0,
          count:1000,
          src:''
        }
      },
      {
        name:'badge 徽标数',
        icon: 'http://81.68.243.94/image/list/badge.svg',
        route:'/html/perfectUI/index.html-components-badge',
        describe:'',
        rightText:'',
        rightCustom:{
          type:0,
          count:1000,
          src:''
        }
      },
      {
        name:'tags 标签',
        icon: 'http://81.68.243.94/image/list/tags.svg',
        route:'/html/perfectUI/index.html-components-tags',
        describe:'',
        rightText:'',
        rightCustom:{
          type:0,
          count:1000,
          src:''
        }
      },
      {
        name:'count 计数器',
        icon: 'http://81.68.243.94/image/list/count.svg',
        route:'/html/perfectUI/index.html-components-count',
        describe:'',
        rightText:'',
        rightCustom:{
          type:0,
          count:1000,
          src:''
        }
      },
      {
        name:'toast 弹出提示',
        icon: 'http://81.68.243.94/image/list/toast.svg',
        route:'/html/perfectUI/index.html-components-toast',
        describe:'',
        rightText:'',
        rightCustom:{
          type:0,
          count:1000,
          src:''
        }
      },
      {
        name:'progress 进度条',
        icon: 'http://81.68.243.94/image/list/progress.svg',
        route:'/html/perfectUI/index.html-components-progress',
        describe:'',
        rightText:'',
        rightCustom:{
          type:0,
          count:1000,
          src:''
        }
      },
      {
        name:'slider 滑动选择器',
        icon: 'http://81.68.243.94/image/list/slider.svg',
        route:'/html/perfectUI/index.html-components-slider',
        describe:'',
        rightText:'',
        rightCustom:{
          type:0,
          count:1000,
          src:''
        }
      },
    ]
  },
  //高级组件
  {
    head:'high组件',
    body:[
      {
        name:'noticebar 滚动提示',
        icon: 'http://81.68.243.94/image/list/noticebar.svg',
        route:'/html/perfectUI/index.html-components-noticebar',
        describe:'',
        rightText:'',
        rightCustom:{
          type:0,
          count:1000,
          src:''
        }
      },
      {
        name:'search 搜索框',
        icon: 'http://81.68.243.94/image/list/search.svg',
        route:'/html/perfectUI/index.html-components-search',
        describe:'',
        rightText:'',
        rightCustom:{
          type:0,
          count:1000,
          src:''
        }
      },
      {
        name:'subsection 分段器',
        icon: 'http://81.68.243.94/image/list/subsection.svg',
        route:'/html/perfectUI/index.html-components-subsection',
        describe:'',
        rightText:'',
        rightCustom:{
          type:0,
          count:1000,
          src:''
        }
      },
      {
        name:'cell 单元格列表',
        icon: 'http://81.68.243.94/image/list/cell.svg',
        route:'/html/perfectUI/index.html-components-cell',
        describe:'',
        rightText:'',
        rightCustom:{
          type:0,
          count:1000,
          src:''
        }
      },
      {
        name:'table 表格',
        icon: 'http://81.68.243.94/image/list/table.svg',
        route:'/html/perfectUI/index.html-components-table',
        describe:'',
        rightText:'',
        rightCustom:{
          type:0,
          count:1000,
          src:''
        }
      },
      {
        name:'grid 宫格布局',
        icon: 'http://81.68.243.94/image/list/grid.svg',
        route:'/html/perfectUI/index.html-components-grid',
        describe:'',
        rightText:'',
        rightCustom:{
          type:0,
          count:1000,
          src:''
        }
      },
      {
        name:'picker 选择器',
        icon: 'http://81.68.243.94/image/list/picker.svg',
        route:'/html/perfectUI/index.html-components-picker',
        describe:'',
        rightText:'',
        rightCustom:{
          type:0,
          count:1000,
          src:''
        }
      },
      {
        name:'scroll 滚动容器',
        icon: 'http://81.68.243.94/image/list/scroll.svg',
        route:'/html/perfectUI/index.html-components-scroll',
        describe:'',
        rightText:'',
        rightCustom:{
          type:0,
          count:1000,
          src:''
        }
      },
      {
        name:'lazyload 图片懒加载',
        icon: 'http://81.68.243.94/image/list/lazyload.svg',
        route:'/html/perfectUI/index.html-components-lazyload',
        describe:'',
        rightText:'',
        rightCustom:{
          type:0,
          count:1000,
          src:''
        }
      },
      {
        name:'dropdown 下拉菜单',
        icon: 'http://81.68.243.94/image/list/dropdown.svg',
        route:'/html/perfectUI/index.html-components-dropdown',
        describe:'',
        rightText:'',
        rightCustom:{
          type:0,
          count:1000,
          src:''
        }
      },
    ]
  },
  //超级组件
  {
    head:'super组件',
    body:[
      {
        name:'waterfall 瀑布流',
        icon: 'http://81.68.243.94/image/list/waterfall.svg',
        route:'/html/perfectUI/index.html-components-waterfall',
        describe:'',
        rightText:'',
        rightCustom:{
          type:0,
          count:1000,
          src:''
        }
      },
      {
        name:'popup 弹窗对话框',
        icon: 'http://81.68.243.94/image/list/popup.svg',
        route:'/html/perfectUI/index.html-components-popup',
        describe:'',
        rightText:'',
        rightCustom:{
          type:0,
          count:1000,
          src:''
        }
      },
      {
        name:'tabbar 底部导航',
        icon: 'http://81.68.243.94/image/list/tabbar.svg',
        route:'/html/perfectUI/index.html-components-tabbar',
        describe:'',
        rightText:'',
        rightCustom:{
          type:0,
          count:1000,
          src:''
        }
      },
      {
        name:'swiper 轮播图',
        icon: 'http://81.68.243.94/image/list/swiper.svg',
        route:'/html/perfectUI/index.html-components-swiper',
        describe:'',
        rightText:'',
        rightCustom:{
          type:0,
          count:1000,
          src:''
        }
      },
      {
        name:'tabs 顶部导航',
        icon: 'http://81.68.243.94/image/list/tabs.svg',
        route:'/html/perfectUI/index.html-components-tabs',
        describe:'',
        rightText:'',
        rightCustom:{
          type:0,
          count:1000,
          src:''
        }
      },
      {
        name:'steps 步骤条',
        icon: 'http://81.68.243.94/image/list/steps.svg',
        route:'/html/perfectUI/index.html-components-steps',
        describe:'',
        rightText:'',
        rightCustom:{
          type:0,
          count:1000,
          src:''
        }
      },
      {
        name:'indexlist 字母索引列表',
        icon: 'http://81.68.243.94/image/list/indexlist.svg',
        route:'/html/perfectUI/index.html-components-indexlist',
        describe:'',
        rightText:'',
        rightCustom:{
          type:0,
          count:1000,
          src:''
        }
      },
      {
        name:'barrage 弹幕',
        icon: 'http://81.68.243.94/image/list/barrage.svg',
        route:'/html/perfectUI/index.html-components-barrage',
        describe:'',
        rightText:'',
        rightCustom:{
          type:0,
          count:1000,
          src:''
        }
      },
    ]
  }

]


export default list
