const path = require("path");
const webpack = require("webpack");

module.exports = {

  entry: [
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/dev-server",
    "./src/js/main",
  ],

  output: {
    path: path.join(__dirname, "build"),
    filename: "main.js",
    publicPath: "/",
    contentBase: "./src/html/",
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
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
        loaders: ["react-hot", "babel-loader?optional=runtime"],
      },
    ],
  },

};
