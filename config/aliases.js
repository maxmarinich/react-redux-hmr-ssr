const fs = require('fs')
const path = require('path')
const appDirectory = fs.realpathSync(process.cwd())

module.exports = {
  styles: path.resolve(appDirectory, 'source/client/styles/'),
  components: path.resolve(appDirectory, 'source/client/app/components'),
}
