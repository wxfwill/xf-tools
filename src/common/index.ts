// 获取url参数
export const urlParse = (src: string) => {
  const url = decodeURIComponent(src) || null;
  const obj: any = {};
  const reg = /[?&][^?&]+=[^?&]+/g;
  const arr = url && url.match(reg);
  if (arr) {
    arr.forEach((item) => {
      const temArr = item.substring(1).split("=");
      const key = temArr[0];
      const val = temArr[1];
      obj[key] = val;
    });
  }
  return obj;
};
