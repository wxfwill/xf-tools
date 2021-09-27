/** @type {import('webpack').Configuration} */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../docs"),
    filename: "will_xf_tools.js",
    clean: true,
    library: "xf-tools",
    libraryTarget: "umd",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "xf-toos",
      template: "./example/index.html",
    }),
  ],
};
