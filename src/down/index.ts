/**
 * a 标签下载
 * 文件流的形式 blob
 * res 后台返回的文件流
 * file 当前文件
 */
export const downFileBlob = (res: any, name?: any, type?: string) => {
  if (!res) {
    throw new Error("获取的文件流为空");
  }
  const content = res;
  // const filename = content.headers['content-disposition'];
  const blob = new Blob([content], {
    type: type || "application/pdf;chartset=UTF-8",
  });
  const fileName = res.name || name || "默认名字";
  if ("download" in document.createElement("a")) {
    // 非IE下载
    const elink = document.createElement("a");
    // elink.download = filename.split('filename=')[1];
    elink.download = fileName;
    elink.style.display = "none";
    elink.href = URL.createObjectURL(blob);
    document.body.appendChild(elink);
    elink.click();
    URL.revokeObjectURL(elink.href); // 释放URL 对象
    document.body.removeChild(elink);
  } else {
    // IE10+下载
    window.navigator.msSaveBlob(blob, fileName);
  }
};

/**
 * 使用a标签下载一个文件
 * @param {} url  pdf地址
 */
export const downFileUrl = (url: string, fileName: string) => {
  let x = new XMLHttpRequest();
  x.open("GET", url, true);
  x.responseType = "blob";
  x.onload = () => {
    let blob = x.response;
    if ("msSaveOrOpenBlob" in navigator) {
      // IE导出
      window.navigator.msSaveOrOpenBlob(blob, fileName);
    } else {
      let a = document.createElement("a");
      a.download = fileName;
      a.href = window.URL.createObjectURL(blob);
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  };
  x.send();
};
