const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode:'development',
  entry:'./app.js',
  plugins:[
    new HtmlWebpackPlugin()
  ],

  // 动态在打包或者运行后的页面上加载第三方库，externalsType这个是必须的，表示第三方库地址在页面上是以script标签引入的
  externalsType:'script', // 使以下的链接在页面上以script标签的形式加载
  externals:{
    // 要想在代码中引入jquery，这边的key必须与之对应  import $ from 'jquery'  
    jquery: ['http://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.0/jquery.min.js','$'],  // 后面的$是jquery在浏览器上的别名
  }
}