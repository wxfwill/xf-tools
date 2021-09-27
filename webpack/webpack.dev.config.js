/** @type {import('webpack').Configuration} */
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    // contentBase: path.join(__dirname, "./example/index.html"),
    hot: true,
    open: true,
    port: 6899,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "xf-toos",
      template: "./example/index.html",
    }),
  ],
};
