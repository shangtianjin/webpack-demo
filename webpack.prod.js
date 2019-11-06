

"use strict"
const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const px2rem = require('postcss-px2rem')


module.exports = {
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_[chunkhash:8].js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader'
      },
      {
        test: /.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /.less$/,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader', 
          'less-loader',
          'postcss-loader'
          // {
          //   loader: 'px2rem-loader',

          // }
        ]
      },
      // {
      //   test: /.(png|jpg|gif|jpeg)$/,
      //   use: ['file-loader']
      // },
      {
        test: /.(png|jpg|gif|jpeg)$/,
        use: [
          { loader: 'file-loader', options: { name: '[name]_[hash:8].[ext]' } }
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
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css'
    }),
    new UglifyjsWebpackPlugin({
      test: /.js($|\?)/i,
      cache: false
    }),
    new OptimizeCssAssetsWebpackPlugin({
      cssProcessor: require('cssnano'),
      assetNameRegExp: /\.css$/g,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, `src/index.html`),
      filename: 'index.html',
      chunks: ['index'],
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, `src/search.html`),
      filename: 'search.html',
      chunks: ['search'],
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false
      }
    })
  ]
}