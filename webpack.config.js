const path = require('path')

// const HtmlWebpackPlugin = require('html-webpack-plugin'); // подключите плагин
// // подключите к проекту mini-css-extract-plugin
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//
// const autoprefixer = require('autoprefixer');
// const cssnano = require('cssnano');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
        port: 4000
    },

    // module: {
    //     rules: [
    //         {
    //             test: /\.js$/,
    //             loader: 'babel-loader',
    //             exclude: '/node_modules/'
    //         },
    //
    //         {
    //             test: /\.html$/,
    //             loader: 'html-loader',
    //         },
    //
    //         {
    //             test: /\.css$/, // regular expression
    //             use: [
    //                 MiniCssExtractPlugin.loader,
    //                 {
    //                     loader: 'css-loader',
    //                     options: { importLoaders: 1 }
    //                 },
    //                 'postcss-loader']
    //         },
    //
    //         {
    //             test: /\.(png|jpg|svg|gif)$/,
    //             use: ['file-loader']
    //         },
    //
    //         {
    //             test: /\.(ttf|woff2|woff|eot)$/,
    //             use: ['file-loader']
    //         }
    //     ]
    // },
    //
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: './src/index.html'
    //     })
    // //     new MiniCssExtractPlugin(),
    // //     autoprefixer,
    // //     cssnano({ preset: 'default' }),
    // ]
}