const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractCssPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const baseConfig = require('./webpack.config.base')

const PRODUCTION = 'production'

const config = {
  entry: [
    './index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../public/assets'),
    publicPath: '/assets/'
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: ExtractCssPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader'
          },
          {
            loader: 'postcss-loader'
          }
        ],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(PRODUCTION)
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: path.join(__dirname, '../', 'views', 'index.pug'),
      templateParameters: {
        title: 'React Redux HMR SSR Starter Kit',
      },
    }),
    new ExtractCssPlugin(),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
}

module.exports = merge(baseConfig, config)
