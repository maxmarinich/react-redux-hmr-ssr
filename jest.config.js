const aliases = require('./config/aliases')
const path = require('path')

const appDirectory = fs.realpathSync(process.cwd())

// alias: 'root/dir/some/path' ===> 'alias(/.*)?': '<rootDir>/some/path$1',
const jestModulesMap = Object.entries(aliases).reduce((obj, [key, value]) => {
  obj[`^${key}(.*)`] = `${value.replace(appDirectory, '<rootDir>')}$1`
  return obj
}, {})

module.exports = {
  'collectCoverageFrom': [
    'source/client/**/*.{js,jsx,mjs}'
  ],
  'setupTestFrameworkScriptFile': '<rootDir>src/setupTests.js',
  'testMatch': [
    path.resolve(appDirectory, 'source/client/**/__tests__/**/*.{js,jsx,mjs}'),
    path.resolve(appDirectory, 'source/client/**/?(*.)(spec|test).{js,jsx,mjs}'),
  ],
  'testEnvironment': 'jsdom',
  'testURL': 'http://localhost',
  'transform': {
    '^.+\\.(js|jsx|mjs)$': path.resolve(appDirectory, 'node_modules/babel-jest'),
    '^.+\\.css$': path.resolve(appDirectory, 'config/jest/cssTransform.js'),
    '^(?!.*\\.(js|jsx|mjs|css|json)$)': path.resolve(appDirectory, 'config/jest/fileTransform.js'),
  },
  'transformIgnorePatterns': [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'
  ],
  'moduleNameMapper': jestModulesMap,

  'moduleFileExtensions': [
    'web.js',
    'mjs',
    'js',
    'json',
    'web.jsx',
    'jsx',
    'node'
  ],
  'globals': {
    GLOBAL_CONFIG: {}
  }
}
