/*
 * @Author: will
 * @Date: 2021-09-24 12:04:31
 * @LastEditTime: 2021-11-02 16:27:56
 * @LastEditors: will
 * @Description: 入口文件
 */
// import * as toolCommon from "./common/index";
// import * as toolDate from "./date/index";
// import * as toolPrint from "./print/index";
// import * as toolDown from "./down/index";

import { urlParse, selectRandomValue, addNums, compareArrayKey } from "./common/index";
import { formatDate } from "./date/index";
import { downFileBlob, downFileUrl } from "./down/index";
import { htmlPrint, urlPrint } from "./print/index";

// import { testa } from "./test";
// console.log(process.env.API);
// console.log(process.env.NODE_ENV);

// const Tools = {
//   ...toolCommon,
//   ...toolDate,
//   ...toolPrint,
//   ...toolDown,
// };

const Tools = {
  urlParse,
  formatDate,
  downFileBlob,
  downFileUrl,
  htmlPrint,
  urlPrint,
  selectRandomValue,
  addNums,
  compareArrayKey,
};

// export { testa };

// es 按需引入
// export const { urlParse, formatDate, downFileBlob, downFileUrl, htmlPrint, urlPrint, selectRandomValue, addNums } = Tools;

export { urlParse, formatDate, downFileBlob, downFileUrl, htmlPrint, urlPrint, selectRandomValue, addNums, compareArrayKey };

export default Tools; // umd
