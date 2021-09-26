const TerserWebpackPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  optimization: {
    usedExports: true,
    // 开启代码压缩
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        extractComments: false, // 不将注释提取到单独的文件中 即不生成 LICENSE.txt 文件
        terserOptions: {
          compress: {
            warnings: true,
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ["console.log", "console.table"], // 删除console
          },
        },
      }),
    ],
  },
};
