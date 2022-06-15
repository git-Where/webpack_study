
module.exports = {
  output:{
    filename:'scripts/[name].js', // 打包输出的文件名称
  },
  mode: 'development',
  devtool:'inline-source-map', // 在文件报错的情况下，能精准定位到是哪个文件哪个位置发生的错误
  devServer:{ // 实时监听文件变化
    static:'./dist'
  },
}