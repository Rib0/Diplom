const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: [
    './src/index.js',
    './src/scss/index.scss'
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js',
    publicPath: '/dist'
  },
  devServer: {
    overlay: true,
    historyApiFallback: true,
    port: 3000,
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
                // localIdentName: '[local]___[hash:base64:5]', //to read about it
                // sourceMap: true,
                // importLoaders: 2, // to read about it
                // url: false
              }
          },
          'sass-loader',
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.scss', '.js', '.json'],
    modules: ['node_modules', path.join(__dirname, 'src')],
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      allChunks: true, // to read about it
      // chunkFilename: '[id].[hash].css', // to read about it
    }),
  ]
}

module.exports = config;