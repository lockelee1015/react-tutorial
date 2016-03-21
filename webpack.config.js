var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {app: './app.js'},
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath:'/dist',
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.(js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }

}