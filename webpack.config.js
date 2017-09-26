/*
    ./webpack.config.js
*/
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve('dist'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['babel-plugin-transform-object-rest-spread']
        }
      },
      {
        test: /\.css$/,
        loaders: [
          // 'style-loader',
          // 'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'to-string-loader',
          'css-loader'
        ]
      }
    ]
  }
}
