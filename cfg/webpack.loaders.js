const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [
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
