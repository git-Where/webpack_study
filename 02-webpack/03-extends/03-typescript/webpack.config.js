const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode:'development',
  entry:'./src/app.ts',
  plugins:[
    new HtmlWebpackPlugin(),
  ],
  devtool:'inline-source-map',
  module:{
    rules:[
      {
        test:/\.ts$/,
        use:'ts-loader', // 解析.ts后缀的文件
        exclude:/node_modules/, // 排除该文件夹下的.ts文件不做解析
      }
    ]
  },
  resolve:{
    extensions:['.ts','.js'] //  优先解析ts文件，接着在解析js文件
  },
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'./dist')
  }
}