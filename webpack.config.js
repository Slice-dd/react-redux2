const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');



module.exports = {
    entry: './index',
    output:{
        filename: '[name].js',
        path: path.resolve(__dirname + 'dist')
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                exclude: /node_modules$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            }
        ]
    },
        
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: './index.html'
        })
    ],
    
    devServer: {
        port: 9000,
        historyApiFallback: true
    }
}