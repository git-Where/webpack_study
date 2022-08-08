const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode:"development",
  entry:"./src/app.js",
  plugins:[
    new HtmlWebpackPlugin()
  ],
  devServer:{
    devMiddleware:{
      writeToDisk:true  //写入到硬盘    这个会使在开发环境下，启动页面在线浏览的代码同步打包到dist下，
    }
  }
}