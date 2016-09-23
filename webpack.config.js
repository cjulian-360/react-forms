var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        app: __dirname + '/src/app.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/public/bundle'
    },
    devtool: "eval",
    devServer:{
        contentBase: 'public',
        inline: true,
        hot: true
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
                loader: ExtractTextPlugin.extract("style", "css?sourceMap!sass?sourceMap!postcss?sourceMap")
            },
        ]
    },
    postcss: [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ],
    plugins: [
        new ExtractTextPlugin("[name].bundle.css")
    ]
}