'use strict';

var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path              = require('path');
var srcPath           = path.join(__dirname, 'src');

module.exports = {  

    target: 'web',
    cache: true,

    entry: {
        module: path.join(srcPath, 'module.js'),
        common: ['react', 'react-router' ]
    },

    resolve: {
        root: srcPath,
        extensions: ['', '.js'],
        modulesDirectories: ['node_modules', 'src']
    },

    output: {
        path       : path.join(__dirname, 'www'),
        publicPath : '',
        filename   : '[name].js',
        library    : ['[name]'],
        pathInfo   : true
    },

    module: {
        loaders: [
            {
                test   : /\.js?$/, 
                exclude: /node_modules/,
                loader : 'babel',
                query: {
                    presets:['es2015', 'react']
                }
            },
            {
                test  : /\.scss$/, // Only .css files
                loader: 'style!css!sass' // Run both loaders
            },
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
                loader: 'url-loader?limit=100000' 
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
        new HtmlWebpackPlugin({
            inject  : true,
            template: 'src/index.html'
        }),
        new webpack.NoErrorsPlugin()
    ],

    debug: true,
    devtool: 'eval-cheap-module-source-map'
};
