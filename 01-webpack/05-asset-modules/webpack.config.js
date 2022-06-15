const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry:'./src/index.js',
  output:{
    filename:'bundle.js', // 打包输出的文件名称
    path: path.resolve(__dirname,'./dist'),
    clean:true, // 每次都清除dist底下的文件
    assetModuleFilename:'image/[contenthash][ext]'
  },
  mode:'development',
  devtool:'inline-source-map', // 在文件报错的情况下，能精准定位到是哪个文件哪个位置发生的错误
  plugins:[ // 插件
    new HtmlWebpackPlugin({
      template:'./index.html', // 打包的模板html文件
      filename:'app.html', // 打包后的html文件
      inject:'body' // 导出的js文件，在html文件里的哪个位置进行引入
    })
  ],

  devServer:{ // 实时监听文件变化
    static:'./dist'
  },

  module:{
    rules:[
      {
        test:/[\.png | \.jpg]$/, // 匹配资源后缀名
        type:'asset/resource',
        generator:{ // 这个规则会比assetModuleFilename优先级高
          filename:'images/[contenthash][ext]' // 打包后文件的命名格式，以webpack规则生成的唯一hash名称，
        }
      },
      {
        test:/\.svg$/, // 用于导出资源的data:uri
        type:'asset/inline'
      },
      {
        test:/\.txt$/, // 用于导出资源的源代码
        type:'asset/source',
      },{
        test:/\.jpg$/,
        type:'asset',
        parser:{ // 解析器
          dataUrlCondition:{ // 默认资源大小是8KB
            maxSize:1*1024*1024 // 超出4M才生成一个资源文件在dist文件里，要是没超出就生成一个base64文件
          }
        }
      }
    ]
  }
}