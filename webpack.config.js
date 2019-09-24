const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/*
 hash modules
 learn loaders
*/

const isProd = process.env.NODE_ENV === 'production';

const config = {
  entry: [
    !isProd && 'webpack-dev-server/client',
    !isProd && 'webpack/hot/dev-server',
    './src/index.js',
    './src/scss/index.scss',
  ].filter(Boolean),
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: !isProd ? '[name].js' : '[name].[chunkhash].js',
  },
  devtool: isProd && 'cheap-module-source-map', // generate source map
  devServer: {
    compress: true,
    overlay: true,
    historyApiFallback: true, // necessary for spa, fallback on index.html if 404 error
    port: 3000,
    hot: true,
    // open: true, // devserver open default broswer
    open: 'chrome', // only for windows os
    proxy: {
      '/api': 'http://localhost:8080' // useful if api url should redirect to http://localhost:8080/api
    },
    contentBase: path.resolve(__dirname, 'dist/'),
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          output: {
            comments: false,
          }
        },
      }),
    ],
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
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
              importLoaders: 2, // applied postcss-loader and sass-loader before css-loader (applied 2 loaders for css styles)
            },
          },
          'postcss-loader',
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
    extensions: ['.scss', '.js'], // allow not to specify extension of .scss and .js
    modules: ['node_modules', path.resolve(__dirname, 'src')], // search for imported files in this directories
  },
  stats: {
    builtAt: false,
    children: false,
    colors: true,
    hash: false,
    publicPath: false // console stats info
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) // var is working in code in development and production mode
    }),
    new MiniCssExtractPlugin({
      filename: !isProd ? '[name].css' : '[name].[chunkhash].css',
    }),
    new HtmlWebpackPlugin({
      inject: false, // inject script at the bottom of the body
      // hash: true, // add hash to files for hash busting
      cache: true,
      template: './index.html', // entry template
      filename: 'index.html', // output template
    }),
    isProd && new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    !isProd && new webpack.HotModuleReplacementPlugin()
  ].filter(Boolean),
};

module.exports = config;