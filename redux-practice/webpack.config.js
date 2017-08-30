const webpack = require("webpack");
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = {
    devtool: 'inline-source-map',
    entry: {
        app:[
            path.resolve(__dirname,"./src/index.js"),
            'webpack/hot/only-dev-server',
            "webpack-dev-server/client?http://127.0.0.1:9091"
        ],
        vendor: [ 'react', 'react-dom', 'react-redux', 'redux', 'redux-immutable', 'immutable']
    },
    output:{
        path:path.resolve(__dirname,'public'),
        filename:'bundle.js',
        publicPath: "/"
    },
    resolve:{
        extensions:['.js','.json','.jsx']
    },
    devServer: {
        disableHostCheck: true,
        port:9091
    },
    module:{
        loaders:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader:'react-hot-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test:/\.css/,
                loader:'style-loader!css-loader'
            }

        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({filename: '[name].css', allChunks: true }),
        new HtmlWebpackPlugin({ title: 'todos-redux-immutable', template: './index.html' }),
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.js'}),

    ]
}