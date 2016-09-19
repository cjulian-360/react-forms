module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        files: [
            {
                pattern: 'spec/**/*_spec.js',
                watched: false
            }
        ],
        preprocessors: {
            'spec/**/*_spec.js': ['webpack']
        },
        webpack: {
            module: {
                loaders: [{
                    test: /\.js/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }]
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        }
    })
}