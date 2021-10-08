import resolve from "rollup-plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript";
import babel from "rollup-plugin-babel";
import alias from "@rollup/plugin-alias";
import server from "rollup-plugin-server";
import livereload from "rollup-plugin-livereload";
import postcss from "rollup-plugin-postcss";
const path = require("path");
const resolveDir = (dir) => path.join(__dirname, dir);

console.log("当前环境==" + process.env.NODE_ENV);

export default {
  input: "src/index.ts", // 打包入口
  output: {
    // 打包出口
    name: "xf-tools", // 包名称
    file: "example/will_xf_tools.dev.js", // 最终打包出来的文件路径和文件名
    format: "umd", // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
    exports: "named",
    sourcemap: true, // 映射源文件
  },
  plugins: [
    replace({
      values: { "process.env.API": JSON.stringify("http://123456.com"), "process.env.NODE_ENV": JSON.stringify("dev") },
      preventAssignment: true,
    }),
    // 打包插件
    babel({
      exclude: "node_modules/**", // 排除node_module下的所有文件
    }),
    resolve(), // 查找和打包node_modules中的第三方模块
    commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
    typescript(), // 解析TypeScript
    postcss(), // 解析 css
    alias({
      entries: [{ find: "@", replacement: resolveDir("src") }],
    }),
    server({
      open: true, // 是否打开浏览器
      contentBase: "example", // 入口html的文件位置
      //   historyApiFallback: true, // Set to true to return index.html instead of 404
      //   host: "localhost",
      port: 1006,
    }),
    livereload("example"),
  ],
};
