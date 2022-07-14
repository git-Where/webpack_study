const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  entry:'./src/app.js',

  devServer:{
    client:{
      overlay:false
    }
  },

  module:{
    rules:[
      {
        test:/\.js$/,
        use:['babel-loader','eslint-loader']  
      },
    ],
  },

  plugins:[
    new HtmlWebpackPlugin()
  ]
};
