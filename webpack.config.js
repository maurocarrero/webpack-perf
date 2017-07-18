const pkg = require('./package.json')
const loaders = require('./cfg/webpack.loaders')
const plugins = require('./cfg/webpack.plugins')

module.exports = {
  context: __dirname + '/src',
  entry: {
    app: './index.js',
    vendor: Object.keys(pkg.dependencies)
  },
  output: {
    path: __dirname + '/public',
    filename: '[hash].bundle.js',
    chunkFilename: '[id].[hash].bundle.js'
  },
  module: { loaders },
  plugins,
  // // PREACT
  // resolve: {
  //   alias: {
  //     'react': 'preact-compat',
  //     'react-dom': 'preact-compat'
  //   }
  // }
}
