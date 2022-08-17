const HtmlWebpackPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
  mode:"development",
  entry:"./src/app.js",
  plugins:[
    new HtmlWebpackPlugin(),
    new WorkboxPlugin.GenerateSW({
      clientsClaim:true, // 快速帮我们启用workservice服务
      skipWaiting:true, // 跳出等待
    })
  ],
  devServer:{
    devMiddleware:{
      writeToDisk:true  //写入到硬盘    这个会使在开发环境下，启动页面在线浏览的代码同步打包到dist下，
    }
  }
}