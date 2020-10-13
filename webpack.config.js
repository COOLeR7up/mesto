const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },


    module: {
        rules: [
            {
                test: /\.css$/,
                loader:  ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff2|woff|eot)$/,
                use: ['file-loader']
            }
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: './src/images',
                    to: 'images'
                }
            ]
        })
    ]
}