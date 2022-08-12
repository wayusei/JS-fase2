const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { userInfo } = require('os');

module.exports = {
    entry: {
        bundle: './src/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true
    },
    module: {
        rules: [
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },
            {
                test: /\.gif$/i,
                type: 'asset/resource'
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],
    }
}