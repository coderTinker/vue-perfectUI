const list = [
  {
    //单元格头
    head:'读万卷书',
    //单元格体
    body:[
      {
        name:'桃花潭水深千尺', //单元格名字
        icon: '/img/cell/laba_success.svg',//单元格的图标
        describe:'',//单元格的描述信息
        rightText:'',//单元格右侧的文字
        disable:false,//是否禁用事件
        loading:false,//是否加载中
        path:'/home',//此处可以携带路由的路径等等，一般都这样
        rightIcon:{
          type:'arrow',//arrow为箭头，switch为开关，badge为徽标数，custom为自定义图标，none为什么都不用
          count:1000,//徽标数量
          src:''//自定义图标路径
        },
      },
      {
        name:'不及汪伦送我情', //单元格名字
        icon: '/img/cell/laba_success.svg',//单元格的图标
        describe:'',//单元格的描述信息
        rightText:'诗人',//单元格右侧的文字
        disable:false,//是否禁用事件
        loading:false,//是否加载中
        path:'/profile',//此处可以携带路由的路径等等，一般都这样
        rightIcon:{
          type:'arrow',//arrow为箭头，switch为开关，badge为徽标数，custom为自定义图标，none为什么都不用
          count:1000,//徽标数量
          src:'/img/cell/identity.svg'//自定义图标路径
        },
      },
    ]
  }
]

export default list
