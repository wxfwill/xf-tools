## 工具函数集合

> 总结了自己工作中一些常用的工具函数，方便使用

## 安装

```
 npm install xf-tools  or yarn add xf-tools
```

## 使用

```
import Tools from 'xf-tools'

 默认从Tools下引入默认方法
```

## example

```js
console.log(Tools.formatDate(new Date(1632643437144)), "yyyy-MM-dd");

// 打印格式化后的时间
```

## API

|  类型说明  |   方法名   |                                            example                                            |
| :--------: | :--------: | :-------------------------------------------------------------------------------------------: |
|  通用方法  | toolCommon |                                    `urlParse(str:string)`                                     |
| 日期类方法 |  toolDate  |                            `formatDate(date:Date, format: string)`                            |
| 下载类方法 |  toolDown  | `downFileBlob(flie:blob, name: string, type: string)` `downFileUrl(url:string, name: string)` |
| 打印类方法 | toolPrint  |                        `htmlPrint(id:string)` `urlPrint(url: string)`                         |

## [文档地址](https://wxfwill.github.io/xf-tools/) 持续更新中...
