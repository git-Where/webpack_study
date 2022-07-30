const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode:'development',
  entry:{
    main:{
      // 以下加了dependOn的意思是：在app.js或者app2.js文件中要是有引入依赖（dependOn）lodash 则不在文件里进行打包，直接单独打包lodash
      import:['./src/app.js','./src/app2.js'],
      dependOn:'lodash',
      filename:'channel1/[name].js'
    },
    main2:{
      import:'./src/app3.js',
      dependOn:'lodash', //lodash 指的是下面的key,
      filename:'channel2/[name].js'
    },
    lodash:{
      import:'lodash',
      filename:'common/[name].js'
    }
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'多页面应用',
      template:'./index.html',
      filename:'channel1/index.html',
      inject:'body', //打包之后在页面上的body内引入js文件
      chunks:['main','lodash'], // 当前页面引入main.js文件
      publicPath:'http://www.a.com/', // 文件在打包之后被script标签加载的前缀路劲
    }),
    new HtmlWebpackPlugin({
      title:'多页面应用',
      template:'./index2.html',
      filename:'channel2/index2.html',
      inject:'body', //打包之后在页面上的body内引入js文件
      chunks:['main2','lodash'], // 当前页面引入main.js文件
      publicPath:'http://www.b.com/'
    })
  ],
  output:{
    clean:true
  }
}