const webpack = require('webpack')
const pkg = require('./package.json')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
  context: __dirname + '/src',
  entry: {
    app: './index.js',
    vendor: Object.keys(pkg.dependencies)
  },
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: [ 'react', 'es2015' ]
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity),
    new ExtractTextPlugin('styles.css'),
    new BundleAnalyzerPlugin()
  ]
}
