/*
 * @Author: will
 * @Date: 2021-09-24 12:04:31
 * @LastEditTime: 2021-11-02 11:04:37
 * @LastEditors: will
 * @Description: 入口文件
 */
import * as toolCommon from "./common/index";
import * as toolDate from "./date/index";
import * as toolPrint from "./print/index";
import * as toolDown from "./down/index";
// import { testa } from "./test";
// console.log(process.env.API);
// console.log(process.env.NODE_ENV);

const Tools = {
  ...toolCommon,
  ...toolDate,
  ...toolPrint,
  ...toolDown,
};

// export { testa };

// es 按需引入
export const { urlParse, formatDate, downFileBlob, downFileUrl, htmlPrint, urlPrint, selectRandomValue, addNums } = Tools;

export default Tools; // umd
