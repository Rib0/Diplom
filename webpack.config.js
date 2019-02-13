const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const config = {
    entry: [
        './src/index.js',
        './src/scss/index.scss'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist/' // по этому пути папка dist доступна в браузере
    },
    devServer: {
        contentBase: path.join(__dirname, '/dist'),
        overlay: true,
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
                // use: [
                //     'style-loader', добавляет css в js файл, а затем в head
                //     'css-loader',
                // ]
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                })
            }
        ]
    },
    resolve: {
            extensions: ['.scss', '.js'],
            modules: ['node_modules', 'src'],
    },
    devtool: 'source-map', // карта сайта для корректного отображения кода в консоли браузера
    plugins: [
        new ExtractTextPlugin('styles.css') // создает в дист файл styles.css со всеми стилями
    ]
}

module.exports = config;