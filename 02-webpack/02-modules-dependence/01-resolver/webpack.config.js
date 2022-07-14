const path = require('path')

module.exports = {
  mode:'development',
  entry:'./src/app.js',
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'./src')
    },
    extensions:['.json','.js','.vue'] // 当请求一个文件夹下同名不同扩展名的文件时，会先请求json文件
  }
}