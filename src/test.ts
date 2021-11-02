/*
 * @Author: will
 * @Date: 2021-11-02 10:39:29
 * @LastEditTime: 2021-11-02 10:46:36
 * @LastEditors: will
 * @Description: tree shaking 测试文件
 */

const testa = () => {
  return "this is test value a";
};

const testb = (x: number, y: number) => {
  return x + y;
};

export { testa, testb };
