const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 把多个css文件合并成一个文件输出，并在页面head里引入
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin') // 压缩css文件代码

const toml = require('toml')
const yaml = require('yaml')
const json5 = require('json5')

module.exports = {
  entry:{  // 如果这里是多入口的话，有重复的代码就会被打包到各自的入口文件里，导致每个文件包很大
    // index:{
    //   import:'./src/index.js',
    //   dependOn:'shared'
    // },
    // another:{
    //   import:'./src/another-module.js',
    //   dependOn:'shared'
    // },
    // shared:'loadsh'
    index:'./src/index.js',
    // another:'./src/another-module.js',
  },
  output:{
    filename:'[name].bundle.js', // 打包输出的文件名称
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
    }),
    new MiniCssExtractPlugin({
      filename:'styles/[contenthash].css', // 指定输出的文件路劲，并根据文件内容生成hash去命名
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
      },

      {
        test:/\.jpg$/,
        type:'asset',
        parser:{ // 解析器
          dataUrlCondition:{ // 默认资源大小是8KB
            maxSize:1*1024*1024 // 超出4M才生成一个资源文件在dist文件里，要是没超出就生成一个base64文件
          }
        }
      },

      { // 编译css文件
        test:/\.(css|less)$/,
        use:[MiniCssExtractPlugin.loader,'css-loader','less-loader'], // style-loader帮我们把css文件置顶到页面上  css-loader能让webpack识别出css文件  less-loader要放在最后面，因为它要先用less-loader去解析我们的css文件，把解析好的文件交给css-loader，在通过style-loader把文件放至到页面上面   这个是从后面开始执行的
      },
      // {
      //   // 加载字体文件
      //   text:/\.(woff|woff2|eot|ttf|otf)$/,
      //   type:'asset/resource', // 这个可以加载任何类型的资源文件
      // },

      { // 加载.csv类型的文件数据
        test:/\.(csv|tsv)$/,
        use:'csv-loader'
      },
      { // 加载.xml类型的文件数据
        test:/\.xml$/,
        use:'xml-loader'
      },

      { // 加载.xml类型的文件数据
         test:/\.toml$/,
         type:'json',
         parser:{ // 解析器
           parse:toml.parse
         }
      },
      { // 加载.xml类型的文件数据
         test:/\.yaml$/,
         type:'json',
         parser:{ // 解析器
           parse:yaml.parse
         }
      },
      { // 加载.xml类型的文件数据
         test:/\.json5$/,
         type:'json',
         parser:{ // 解析器
           parse:json5.parse
         }
      },

      // regeneratorRuntime是webpack打包生成的全局辅助函数，由babel生成，用于兼容async/await语法
      {// 把es6的js代码转译成低版本浏览器可识别的es5代码
        test:/\.js$/,
        exclude: /node_modules/, // 排除掉node_modules里的代码不需要转译
        use:{
          loader:'babel-loader',
          options:{ // 编译器
            presets:['@babel/preset-env'],
            plugins:[
              ['@babel/plugin-transform-runtime']
            ]
          }
        }
      }
    ]
  },

  // 优化
  optimization:{
    minimizer:[
      new CssMinimizerPlugin()
    ],
    //  拆分
    splitChunks:{
      chunks:'all' // 实现代码的分割，把公告代码抽离出来放置在一个公共的文件内
    }
  }
}