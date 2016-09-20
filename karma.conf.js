var path = require('path');

module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        files: [
            'spec/**/*.js'
        ],
        preprocessors: {
            'spec/**/*.js': ['webpack']
        },
        webpack: {
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'babel'
                    }
                ]
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        },
        reporters: ['progress']
    })
}