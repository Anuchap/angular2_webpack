var webpack = require('webpack');
var path = require('path');

var config = {
    entry: {
        'main': './app/main.ts',
        'vendor': './app/vendor.ts',
        'polyfills': './app/polyfills.ts'
    },
    resolve: {
        extensions: ['', '.ts', '.js', 'css']
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loaders: ['awesome-typescript-loader', 'angular2-template-loader']
        },
        {
            test: /\.html$/,
            loader: 'html'
        },
        {
            test: /\.css$/,
            exclude: path.resolve('app'),
            loader: "style-loader!css-loader?root=."
        }
        ]
    },
    plugins: [],
    output: {
        filename: './dist/[name].js',

    }
};

module.exports = config;