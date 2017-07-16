const webpack = require('webpack')
const pkg = require('./package.json')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const VendorChunkPlugin = require('webpack-vendor-chunk-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin


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
          plugins: ['lodash'],
          presets: [ 'react', 'es2015' ]
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader?name=[name].[ext]"
      }
    ]
  },
  plugins: [
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
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    }),
    new VendorChunkPlugin('vendor'),
    new ExtractTextPlugin('styles.css'),
    new BundleAnalyzerPlugin()
  ],
  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  }
}
