module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        files: [
            {
                pattern: 'spec/**/*Spec.js', watched: false
            }
        ],
        preprocessors: {
            'spec/**/*Spec.js': ['webpack']
        },
        webpack: {
            module: {
                loaders: [
                    {
                        test: /\.js/,
                        exclude: /node_modules/,
                        loader: 'babel-loader'
                    }
                ]
            },
            watch: true
        }
    })
}