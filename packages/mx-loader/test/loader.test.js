const test = require('ava')
const path = require('path')
const MemoryFS = require('memory-fs')
const pack = require('./webpack')

test('loader with config', async t => {
  const fs = new MemoryFS()
  const config = {
    entry: path.resolve(__dirname, 'fixtures/template.mx'),
    output: {
      filename: 'bundle.js',
      path: '/'
    },
    module: {
      rules: [
        {test: /\.mx$/, use: 'mx-loader'}
      ]
    }
  }

  await pack(config, fs)

  const compiled = fs.readFileSync('/bundle.js', 'utf-8')
  t.snapshot(compiled)
})
