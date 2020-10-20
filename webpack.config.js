const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/pages/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },


    module: {
        rules: [
            {
                test: /\.html$/,
                loader: ['html-loader']
            },
            {
                test: /\.css$/,
                loader: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ],
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader'],
             },
            {
                test: /\.(ttf|woff2|woff|eot)$/,
                use: ['file-loader'],
            },
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: './src/images',
                    to: 'images'
                },
                {
                    from: './vendor/fonts',
                    to: 'fonts'
                }

            ]
        })
    ]
}