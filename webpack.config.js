var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var devConfig = {
    debug: true,
    devtool: 'cheap-module-source-map',
    loader: 'style!css?sourceMap!sass?sourceMap!postcss?sourceMap',
    plugins: []
};

var prodConfig = {
    debug: false,
    devtool: 'source-map',
    loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap!postcss?sourceMap'),
    plugins: [
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new ExtractTextPlugin('[name].bundle.css')
    ]
};

var isProd = process.env.NODE_ENV === 'production';
var config = isProd ? prodConfig : devConfig;

module.exports = {
    debug: config.debug,
    devtool: config.devtool,
    entry: {
        app: __dirname + '/src/app.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + "/public/bundle",
        publicPath: "/bundle/"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.scss$/,
                loader: config.loader
            },
        ]
    },
    postcss: [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ],
    plugins: config.plugins
}