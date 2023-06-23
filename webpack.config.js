const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    watch: true,

    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },

    entry: './js/app.js',

    output: {
        path: path.resolve(__dirname, './'),
        filename: 'bundle.js',
    },
    mode: 'production'
}