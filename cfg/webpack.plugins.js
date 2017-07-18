const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const OfflinePlugin = require('offline-plugin')
const VendorChunkPlugin = require('webpack-vendor-chunk-plugin')

module.exports = [
  new CleanWebpackPlugin(['public'], {
    root: __dirname + '/../'
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  new webpack.optimize.DedupePlugin(),
  new LodashModuleReplacementPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new HtmlWebpackPlugin({
    title: 'Webpack Performance',
    template: 'index.ejs',
    minify: {
      collapseInlineTagWhitespace: true,
      collapseWhitespace: true,
      minifyCSS: true
    }
  }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: '[hash].[name].js',
    chunkFilename: '[id].[hash].[name].js'
  }),
  new VendorChunkPlugin('vendor'),
  new ExtractTextPlugin('styles.css'),
  new OfflinePlugin(),
  new BundleAnalyzerPlugin()
]