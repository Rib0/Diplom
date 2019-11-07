const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SvgStore = require('webpack-svgstore-plugin');
const CopyPlugin = require('copy-webpack-plugin');

/*
  make hot reload
  svg loader
  remove useless dependenses in packaje.json
  sort dependences
  INSTALL COMPOSE
*/

const isProd = process.env.NODE_ENV === 'production';

const config = {
  entry: [
    './src/javascript',
    './src/scss'
  ],
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: !isProd ? '[name].js' : '[name].[hash].js',
  },
  devtool: isProd && 'cheap-module-source-map', // generate source map
  devServer: {
    compress: true,
    overlay: true,
    historyApiFallback: true, // necessary for spa, fallback on index.html if 404 error
    port: 8000,
    hot: true,
    // open: true, // devserver open default broswer
    open: 'chrome', // only for windows os
    proxy: {
      '/api': 'http://localhost:8080' // useful if api url should redirect to http://localhost:8080/api
    },
    contentBase: path.resolve(__dirname, 'build/'),
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          }
        },
        extractComments: false,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              // modules: true,
              // localIdentName: '[path][name]__[local]--[hash:base64:5]',
              importLoaders: 2, // applied postcss-loader and sass-loader before css-loader (applied 2 loaders for css styles)
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
          loader: 'file-loader',
          exclude: /\.(js|css|scss|html|svg)/,
          options: { 
              name: 'images/[name].[ext]' 
          },
      },
    ],
  },
  resolve: {
    extensions: ['.scss', '.js'], // allow not to specify extension of .scss and .js
    modules: ['node_modules', path.resolve(__dirname, 'src')], // search for imported files in this directories
    alias: {
      images: path.resolve(__dirname, 'src/images/') // short pathname
    }
  },
  stats: {
    hash: false,
    version: false,
    children: false,
    modules: false,
    warnings: false,
    entrypoints: false,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) // var is working in code in development and production mode
    }),
    new MiniCssExtractPlugin({
      filename: !isProd ? '[name].css' : '[name].[hash].css',
    }),
    new HtmlWebpackPlugin({
      inject: false, // inject script at the bottom of the body
      // hash: true, // add hash to files for hash busting
      template: './index.html', // entry template
      filename: 'index.html', // output template
    }),
    !isProd && new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin(),
    isProd && new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new CopyPlugin([
      { 
        from: 'src/images', 
        to: 'images',
        force: true 
      },
    ]),
    new SvgStore({
      svgoOptions: {
        plugins: [
          { removeTitle: true }
        ]
      },
    })
  ].filter(Boolean),
};

module.exports = config;