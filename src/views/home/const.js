//组件数据对象
const list = [
  //基本组件
  {
    head:'base组件',
    body:[
      {
        name:'button 按钮',
        icon: '/img/list/button.svg',
        route:'/components/button',//此处独有信息
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
        icon: '/img/list/radio.svg',
        route:'/components/radio',
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
        icon: '/img/list/checkbox.svg',
        route:'/components/checkbox',
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
        icon: '/img/list/switch.svg',
        route:'/components/switch',
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
        icon: '/img/list/badge.svg',
        route:'/components/badge',
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
        icon: '/img/list/tags.svg',
        route:'/components/tags',
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
        icon: '/img/list/count.svg',
        route:'/components/count',
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
        icon: '/img/list/toast.svg',
        route:'/components/toast',
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
        icon: '/img/list/progress.svg',
        route:'/components/progress',
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
        icon: '/img/list/slider.svg',
        route:'/components/slider',
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
        icon: '/img/list/noticebar.svg',
        route:'/components/noticebar',
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
        icon: '/img/list/search.svg',
        route:'/components/search',
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
        icon: '/img/list/subsection.svg',
        route:'/components/subsection',
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
        icon: '/img/list/cell.svg',
        route:'/components/cell',
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
        icon: '/img/list/table.svg',
        route:'/components/table',
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
        icon: '/img/list/grid.svg',
        route:'/components/grid',
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
        icon: '/img/list/picker.svg',
        route:'/components/picker',
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
        icon: '/img/list/scroll.svg',
        route:'/components/scroll',
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
        icon: '/img/list/lazyload.svg',
        route:'/components/lazyload',
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
        icon: '/img/list/dropdown.svg',
        route:'/components/dropdown',
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
        icon: '/img/list/waterfall.svg',
        route:'/components/waterfall',
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
        icon: '/img/list/popup.svg',
        route:'/components/popup',
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
        icon: '/img/list/tabbar.svg',
        route:'/components/tabbar',
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
        icon: '/img/list/swiper.svg',
        route:'/components/swiper',
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
        icon: '/img/list/tabs.svg',
        route:'/components/tabs',
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
        icon: '/img/list/steps.svg',
        route:'/components/steps',
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
        icon: '/img/list/indexlist.svg',
        route:'/components/indexlist',
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
        icon: '/img/list/barrage.svg',
        route:'/components/barrage',
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
