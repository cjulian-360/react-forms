module.exports = {
    entry: {
        spec: [
            '_MyFirstSpec.js'
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/public/bundles'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader']
            }
        ]
    }
}