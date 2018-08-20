const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const PRODUCTION = 'production'

const extractCss = new ExtractTextPlugin('style.css')

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
        use: extractCss.extract([
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader'
          },
          {
            loader: 'postcss-loader'
          }
        ]),
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
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true,
        drop_debugger: true,
        dead_code: true
      }
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: path.join(__dirname, '../', 'views', 'index.pug'),
      templateParameters: {
        title: 'React Redux HMR SSR Starter Kit',
      },
    }),
    extractCss,
  ],
}

module.exports = merge(baseConfig, config)
