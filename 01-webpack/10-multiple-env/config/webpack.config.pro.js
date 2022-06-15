const CssMinimizerPlugin = require('css-minimizer-webpack-plugin') // 压缩css文件代码
const TerserWebpackPlugin = require('terser-webpack-plugin') // 对代码进行压缩 生产下压缩，开发下不压缩


module.exports = {
  output:{
    filename:'scripts/[name].[contenthash].js', // 打包输出的文件名称 ,加contenthash使每次打包，在浏览器都能获取最新的文件内容，要是内容不变化，生产的contenthash也不会变；使得有变就拿最新的，没变就拿浏览器缓存的文件
    publicPath:'./'
  },
  mode: 'production',
  // 优化
  optimization:{
    minimizer:[
      new CssMinimizerPlugin(),
      new TerserWebpackPlugin()
    ],
  },

  // 性能优化
  performance:{
    hints:false // 在打包过程中有些报警信息，让报警信息不出现在命令行里
  }
}