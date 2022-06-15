const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode:'development',
  entry:'./app.js',
  module:{
    rules:[
      {
        test:/\.css$/,
        use:['style-loader','css-loader'] // 先加载style-loader,后加载css-loader
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./index.html'
    })
  ],
  devServer:{
    hot:true, // 开启模块热替换（webpack默认也会帮我们配置好）
    liveReload:true, // 帮助我们修改的文件，自动编译，并且自动刷新浏览器
  }
}