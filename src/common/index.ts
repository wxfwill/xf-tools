/*
 * @Author: will
 * @Date: 2021-09-26 12:21:06
 * @LastEditTime: 2021-11-02 10:01:47
 * @LastEditors: will
 * @Description: tolls 公共方法
 */
/**
 * @description: 获取url后面的参数
 * @param src {string}
 * @return {*}
 */
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
/**
 * @description: 随机取min-max之间的值
 * @param min {number}
 * @param max {number}
 * @return {*}
 */
export const selectRandomValue = (min: number, max: number) => {
  if (typeof min !== "number" || typeof max !== "number") {
    throw new Error("param must is number");
  }
  let choices = max - min + 1;
  return Math.floor(Math.random() * choices + min);
};
/**
 * @description:数组求和
 * @param arr {number}
 * @return {*}
 */
export const addNums = (arr: number[]) => {
  if (arr?.length === 0) {
    throw "the length of Array is 0";
  }
  let allNum = arr.reduce((prev: number, cur: number) => {
    return prev + cur;
  });
  return allNum;
};

// 比较函数
let compareFunction = (name: string) => {
  return function (obj1: any, obj2: any) {
    let value1 = obj1[name];
    let value2 = obj2[name];
    if (value1 < value2) {
      return -1;
    } else if (value1 > value2) {
      return 1;
    } else {
      return 0;
    }
  };
};
/**
 * @description: 根据数组元素的某一项来排序
 * @param arr {any}
 * @return {*}
 */
export const compareArrayKey = (arr: any[]) => {
  if (!(arr instanceof Array)) {
    throw new Error("compareArrayKey(): Argument must be an Array");
  }
  arr.sort(compareFunction("name")); // name 是假设key
};
