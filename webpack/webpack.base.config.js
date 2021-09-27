/** @type {import('webpack').Configuration} */
const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "will_xf_tools.js",
    clean: true,
    library: "xf-tools",
    libraryTarget: "umd",
  },
  resolve: {
    alias: {
      "@": path.resolve("src"),
    },
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
