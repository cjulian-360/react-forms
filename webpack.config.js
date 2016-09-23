module.exports = {
    entry: {
        app: __dirname + '/src/app.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/public/script/bundle'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            }
        ]
    }
}