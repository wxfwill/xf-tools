import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts", // 打包入口
  output: {
    // 打包出口
    name: "xf-tools", // 包名称
    file: "dist/will_xf_tools.js", // 最终打包出来的文件路径和文件名
    format: "umd", // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
  },
  plugins: [
    // 打包插件
    terser({ compress: { drop_console: true } }), // 压缩代码并删除console.log
    babel(),
    resolve(), // 查找和打包node_modules中的第三方模块
    commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
    typescript(), // 解析TypeScript
  ],
};
