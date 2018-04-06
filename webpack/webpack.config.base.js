const path = require('path')

module.exports = {
  context: path.resolve(__dirname, '../source/client'),
  target: 'web',
  stats: {
    assets: true
  },
  resolve: {
    alias: require('../config/aliases'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        loader: 'eslint-loader'
      },
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, '../source/client'),
        loader: 'babel-loader'
      },
      {
        test: /\.(otf|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: ['file-loader?name=fonts/[name].[ext]']
      },
      {
        test: /\.(png|jpg)$/,
        use: ['url-loader?name=images/[name].[ext]']
      }
    ]
  },
}
