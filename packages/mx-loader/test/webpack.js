const webpack = require('webpack')
const path = require('path')

module.exports = function pack(config, fs) {
  config.resolveLoader = {
    alias: {
      'mx-loader': path.resolve(__dirname, '../')
    }
  }

  return new Promise(function (resolve, reject) {
    const compiler = webpack(config)
    compiler.outputFileSystem = fs
    compiler.run(function (err, stats) {
      if (err) {
        return reject({err: err, stats: stats})
      }
      return resolve(stats)
    })
  })
}
