path = require('path')
files = require('fs').readdirSync(__dirname + path.sep)

files.forEach((filename) => {
  if (path.extname(filename) === '.js' && filename !== 'index.js') {
    var exportAsName = path.basename(filename)
    module.exports[exportAsName] = require(path.join(__dirname, filename))
  }
})