const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode:'development',
  entry:'./src/app.js',
  plugins:[
    new HtmlWebpackPlugin(),
  ],
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          'style-loader',
          {
            loader:'css-loader',
            options:{
              modules:true
            }
          },
          'postcss-loader' //(配合autoprefixer这个插件，这个插件是自动加上低版本浏览器的样式前缀) 这个可以在css文件里的css3属性兼容低版本浏览器，即自动加上低版本浏览器特有的样式前缀
        ]
      }
    ]
  }
}