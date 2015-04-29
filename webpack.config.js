const path = require("path");
const webpack = require("webpack");

module.exports = {

  entry: [
    "./src/js/main",
  ],

  output: {
    path: path.join(__dirname, "build"),
    filename: "main.js",
  },

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
    ],
  },

};
