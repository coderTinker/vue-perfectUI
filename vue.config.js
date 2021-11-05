module.exports = {
  //关闭代码检测
  lintOnSave: false,
  devServer: {
    port: 8888,
    open: true,
    overlay: {
      warning: false,
      errors: false
    }
  },
  configureWebpack:{
    resolve:{
      //配置别名
      alias:{
        "assets":"@/assets",
        "common":"@/common",
        "components":"@/components",
        "network":"@/network",
        "views":"@/views"
      }
    }
  }
}
