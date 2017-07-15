const webpack = require('webpack')

module.exports = {
  context: __dirname + '/src',
  entry: {
    app: './index.js',
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
        loader: 'style!css'
      }
    ]
  }
}
