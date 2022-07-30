const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode:'production',
  entry:'./src/app.js',
  plugins:[
    new HtmlWebpackPlugin()
  ],
  // devtool:'inline-source-map',
  optimization:{  // 关键配置
    usedExports:true
  }
}