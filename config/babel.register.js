const aliases = require('./aliases')

require('babel-core/register')({
  'plugins': [
    ['babel-plugin-transform-require-ignore', {
      extensions: ['.scss', '.sass']
    }],
    ['module-resolver', {
      'alias': { ...aliases },
    }],
  ]
})
