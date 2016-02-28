var path = require('path');

module.exports = {
    entry: [
        './client/app.js'
    ],
    output: {
        path: path.join(__dirname, 'public/javascripts/build/'),
        filename: 'bundle.js',
    },
    externals: {
        "socket.io": "io"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js$|\.jsx$/,
            loaders: ['babel'],
            exclude: /node_modules/,
            include: __dirname
        }]
    },
};

