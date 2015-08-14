'use strict';

var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  cache: true,
  debug: false,
  devtool: false,
  entry: "./showcase/index.jsx",
  output: {
    path: path.join(__dirname, "assets"),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
        test: /\.(jsx)$/,
        exclude: [/node_modules\/^((?!@walmart).)*$/],
        loader: 'babel-loader?stage=1'
      }, {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }, {
        test: /\.styl$/,
        loader: "style-loader!css-loader!stylus-loader"
      }, {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
  resolve: {
    root: [__dirname],
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['','.js','.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'showcase/index.html'
    })
  ]

};
