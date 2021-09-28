import * as toolCommon from "./common/index";
import * as toolDate from "./date/index";
import * as toolPrint from "./print/index";
import * as toolDown from "./down/index";
console.log(process.env.API);
console.log(process.env.NODE_ENV);

const Tools = {
  ...toolCommon,
  ...toolDate,
  ...toolPrint,
  ...toolDown,
};
console.log(Tools);

// es 按需引入
export const { urlParse, formatDate, downFileBlob, downFileUrl, htmlPrint, urlPrint } = Tools;

export default Tools; // umd
