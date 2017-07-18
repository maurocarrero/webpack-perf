const path = require('path')

const PUBLIC_PATH = path.join(__dirname, '/public')

module.exports = {
  context: __dirname + '/src',
  entry: {
    app: './index.js'
  },
  output: {
    path: PUBLIC_PATH,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: PUBLIC_PATH,
    port: 8000,
    historyApiFallback: {
      index: 'index.html'
    }
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
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader?name=[name].[ext]"
      }
    ]
  }
}
