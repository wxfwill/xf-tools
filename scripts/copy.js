var copy = require("copy");

copy.each(["./package.json", "./README.md"], "dist", function (err, files) {
  if (err) {
    return console.error(err);
  }
  console.log("文件拷贝成功...");
});
