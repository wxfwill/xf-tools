const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  devServer: {
    // contentBase: path.join(__dirname, "./example/index.html"),
    hot: true,
    open: true,
    port: 6699,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "xf-toos",
      template: "./example/index.html",
    }),
  ],
};
