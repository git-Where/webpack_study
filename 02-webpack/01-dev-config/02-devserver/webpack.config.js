const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode:'development',

  entry:'./app.js',

  output:{
    publicPath:'/'
  },

  devServer:{
    static:path.resolve(__dirname,'./dist'),
    compress:false, // 配置为true可以保证文件在向浏览器传输的过程中的压缩的，
    host:'0.0.0.0',
    port:3000,
    headers:{ // 传输响应头信息给浏览器,可在浏览器的network响应头看到
      'X-Access-Token':'123123'
    },
    proxy:{
      '/api':'http://localhost:9000'
    },
    // https:true, // 使当前以https开头打开，不过这个协议涉及一些安全证书问题，开发下可以不用设置这个
    http2:true, // 如果要使用https协议的话，可以设置http2为true，使其仍然可以以https访问

    historyApiFallback:true // 这次配置可以在地址栏随意输入路由地址，保证页面不会报错，还能正常访问
  },

  plugins:[
    new HtmlWebpackPlugin()
  ]
}