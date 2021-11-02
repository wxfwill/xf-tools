/*
 * @Author: will
 * @Date: 2021-09-26 12:17:18
 * @LastEditTime: 2021-10-20 14:07:56
 * @LastEditors: will
 * @Description:
 */
function padLeftZero(str: any) {
  return `00${str}`.substr(str.length);
}
/**
 * @description: 格式化时间戳
 * @param date {new Date()}
 * @param fmt {yyyy-MM-DD hh:mm:ss}
 * @return {*}
 */
export const formatDate = (date: any, fmt: any) => {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, `${date.getFullYear()}`.substr(4 - RegExp.$1.length));
  }
  const o: any = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
  };
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = `${o[k]}`;
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
    }
  }
  return fmt;
};
