const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("./hot.webpack.config");

const server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: config.output.contentBase,
  hot: true,
});

server.listen(3000, "localhost", (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log("localhost:3000");
  }
});
