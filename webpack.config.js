var path = require('path');

module.exports = {
    entry: [
        './components/index.jsx'
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
            test: /\.jsx$/,
            loaders: ['babel'],
            exclude: /node_modules/,
            include: __dirname
        }]
    },
};

