const HtmlWebpackPlugin = require('html-webpack-plugin')
// 以下是各模块文件的解析插件
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  mode:'development',
  entry:{
    app:'./src/app.js',
    app2:'./src/app2.js'
  },
  plugins:[
    new HtmlWebpackPlugin(),
    new BundleAnalyzerPlugin()
  ],

}