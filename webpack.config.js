const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: [
    './src/index.js',
    './src/scss/index.scss'
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js',
  },
  devServer: {
    overlay: true,
    historyApiFallback: true,
    port: 3000,
    contentBase: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              // modules: true,
              localIdentName: '[local]___[hash:base64:5]', //to read about it
              // importLoaders: 2, // to read about it
              // url: false
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'images/[name].[ext]' } 
          },
        ],
      }
    ]
  },
  resolve: {
    extensions: ['.scss', '.js'],
    modules: ['node_modules', path.join(__dirname, 'src')],
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      allChunks: true, // to read about it
      // chunkFilename: '[id].[hash].css', // to read about it
    }),
    new HtmlWebpackPlugin({
      inject: false, // помещает скрипт внуть body
      hash: true,
      template: './index.html', // на основе какого файла делать шаблон
      filename: 'index.html'
    })
  ]
}

module.exports = config;