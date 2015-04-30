const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

  entry: [
    "./src/main",
  ],

  output: {
    path: path.join(__dirname, "build"),
    filename: "main.js",
  },

  plugins: [
    new ExtractTextPlugin("main.css"),
  ],

  resolve: {
    extensions: ["", ".js", ".jsx"],
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader?optional=runtime"],
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ["babel-loader?optional=runtime"],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader"),
      },
    ],
  },

};
