const ExtractTextPlugin = require('extract-text-webpack-plugin');
const getComponentsList = require('./scripts/get-components-list');

function getEntries() {
    return getComponentsList().reduce((list, component) => {
        list[component] = `./components/${component}`;
        return list;
    }, {});
}

module.exports = {
    entry: getEntries(),
    output: {
        path: __dirname + '/lib',
        filename: '[name]/[name].js',
        libraryTarget: 'commonjs2'
    },


    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader?modules'
                })
            }
        ]
    },

    externals : {
        react: 'react'
    },

    plugins: [
        new ExtractTextPlugin("[name]/[name].css")
    ]
};