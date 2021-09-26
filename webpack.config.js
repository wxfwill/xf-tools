const { merge } = require("webpack-merge");
const baseConfig = require("./webpack/webpack.base.config");
console.log(`webpack.${process.env.XF_ENV}.config`);

// const devConfig = require("./webpack/webpack.dev.config");
// const prodConfig = require("./webpack/webpack.prod.config");
// let config = process.env.NODE_ENV === "development" ? devConfig : prodConfig;

const config = require(`./webpack/webpack.${process.env.XF_ENV}.config`);

module.exports = merge(baseConfig, config);
