module.exports = {
  entry: './template.mx',
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  module: {
    rules: [
      {test: /\.mx$/, use: 'mx-loader'}
    ]
  }
}
