const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
  entry: [
    './src/index.js',
    './src/scss/index.scss'
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  devServer: {
    overlay: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.scss$/,     
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
        })
      }
    ]
  },
  resolve: {
    extensions: ['.scss', '.js', '.json'],
    modules: ['node_modules', 'src'],
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
}

module.exports = config;