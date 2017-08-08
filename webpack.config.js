module.exports = () => {
  if (process.env.NODE_ENV === 'production') {
    return require('./webpack/webpack.config.prod');
  }
  return require('./webpack/webpack.config.dev');
};
