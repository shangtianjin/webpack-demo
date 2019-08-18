

"use strict"
const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.js$/, 
        use: 'babel-loader'
      },
      {
        test: /.css$/, 
        use: ['style-loader', 'css-loader']
      },
      {
        test: /.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      // {
      //   test: /.(png|jpg|gif|jpeg)$/,
      //   use: ['file-loader']
      // },
      {
        test: /.(png|jpg|gif|jpeg)$/,
        use: [
          { loader: 'url-loader', options: { limit: 1024 }}
        ]
      }
    ]
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 1000,
    poll: 1000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    hot: true,
    port: 9000
  }
}