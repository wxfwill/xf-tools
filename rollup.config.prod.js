/*
 * @Author: will
 * @Date: 2021-10-08 16:25:25
 * @LastEditTime: 2021-11-03 10:18:11
 * @LastEditors: will
 * @Description: rollup build配置文件
 */
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import babel from "rollup-plugin-babel";
import alias from "@rollup/plugin-alias";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import filesize from "rollup-plugin-filesize";
// import strip from "@rollup/plugin-strip";
import { name, version, author } from "./package.json";
const path = require("path");
const resolveDir = (dir) => path.join(__dirname, dir);

console.log("当前环境==" + process.env.NODE_ENV);
const pkgName = "xf-tools";
const banner =
  "/*!\n" + ` * ${name} v${version}\n` + ` * (c) 2014-${new Date().getFullYear()} ${author}\n` + " * Released under the MIT License.\n" + " */";

export default {
  input: "src/index.ts", // 打包入口
  output: [
    {
      // 打包出口
      name: pkgName, // 包名称
      file: `dist/${pkgName}.umd.min.js`, // 最终打包出来的文件路径和文件名
      format: "umd", // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
      exports: "named", // 指定导出模式
      banner,
      plugins: [terser()],
    },
    {
      name: pkgName, // 包名称
      file: `dist/${pkgName}.cjs.min.js`, // 最终打包出来的文件路径和文件名
      format: "cjs", // commonjs
      banner,
      exports: "named", // 指定导出模式
      plugins: [terser()],
    },
    {
      name: pkgName, // 包名称
      file: `dist/${pkgName}.esm.js`, // 最终打包出来的文件路径和文件名
      format: "es", // esm
      banner,
      exports: "named", // 指定导出模式
    },
  ],
  plugins: [
    // strip({ // 删除 console.log 暂时没有生效
    //   functions: ["console.log", "alert"],
    // }),
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
    filesize(), // 显示信息
  ],
};
