const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 install define plugin
 install uglifyjsplugin
 install cleanwebpack plugin
 hash modules
 learn loaders
*/

const isProd = process.env.NODE_ENV === 'production';

const config = {
  entry: ['./src/index.js', './src/scss/index.scss'],
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js',
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
      '/api': 'http://localhost:8080' // useful if api should redirect to http://localhost:8080/api
    },
    contentBase: path.resolve(__dirname, 'dist/'),
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
      filename: '[name].css',
      allChunks: true, // to read about it
      // chunkFilename: '[id].[hash].css', // to read about it
    }),
    new HtmlWebpackPlugin({
      inject: false, // inject script at the bottom of the body
      // hash: true, // add hash to files for hash busting
      cache: true,
      template: './index.html', // entry template
      filename: 'index.html', // output template
    }),
  ],
};

if(!isProd) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config;