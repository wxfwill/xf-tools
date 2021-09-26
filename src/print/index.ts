import print from "print-js";

/*
 * id: dom元素
 * desc: 根据HTML打印文件
 */
export const htmlPrint = (id: any) => {
  if (!id) {
    throw new Error("id是必填的额");
  }
  print({
    printable: id || "contentPrint",
    type: "html",
    // scanStyles: false,
    targetStyles: ["*"],
    // css: ['@/styles/print.less'],
    ignoreElements: ["noButton"],
  });
};

/*
 * id: dom元素
 * desc: 根据pdf或者img url打印文件
 */
export const urlPrint = (url: any, isbase64?: boolean) => {
  if (!url) {
    throw new Error("url是必填的额");
  }
  print({
    printable: url,
    type: "pdf",
    targetStyles: ["*"],
    base64: isbase64 || false,
    // showModal: true,
    onLoadingStart: () => {
      console.log("开始");
    },
    onLoadingEnd: () => {
      console.log("结束了。。。。");
    },
    onPrintDialogClose: () => {
      console.log("关闭了。。");
    },
    ignoreElements: ["noButton"],
  });
};
