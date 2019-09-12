const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const config = {
  entry: ['./src/index.js', './src/scss/index.scss'],
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: '[name].js',
  },
  devtool: isProd && 'cheap-module-source-map',
  devServer: {
    compress: true,
    overlay: true,
    historyApiFallback: true, // necessary for spa, fallback on index.html if 404 error
    port: 3000,
    hot: true,
    // open: true, // devserver open default broswer
    open: 'chrome', // only for windows os
    proxy: {
      '/api': 'http://localhost:8080' // useful if api should redirect to http://localhost:8080/api
    },
    contentBase: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
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
            },
          },
          require.resolve('postcss-loader'),
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'images/[name].[ext]' },
          },
        ],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: {
          loader: 'svg-react-loader',
          options: {
            name: 'SvgIcon',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.scss', '.js'],
    modules: ['node_modules', path.resolve(__dirname, 'src')],
  },
  stats: {
    builtAt: false,
    children: false,
    colors: true,
    hash: false,
    publicPath: false
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
      filename: 'index.html',
    }),
  ],
};

module.exports = config;
