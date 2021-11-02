<!--
 * @Author: will
 * @Date: 2021-09-26 14:22:49
 * @LastEditTime: 2021-11-02 12:34:35
 * @LastEditors: will
 * @Description:
-->

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

 or

 import {xxx} from 'xf-tools'  // xxx: 方法名

```

## example

```js
console.log(Tools.formatDate(new Date(1632643437144)), "yyyy-MM-dd");

// 打印格式化后的时间
```

## API

<table border>
	<tr>
	    <th>类型说明</th>
	    <th>方法名</th>
	    <th>example</th>  
	</tr >
	<tr valign="middle" align="center" valign="middle" >
	    <td rowspan="4"  valign="middle" align="center" style="vertical-align:middle;">通用类</td>
	    <td>`urlParse`：获取url后面的参数</td>
	    <td>urlParse(url:string)</td>
	</tr>
	<tr>
	    <td>selectRandomValue: 随机取min-max之间的值</td>
	    <td>selectRandomValue(min:number, max:number) </td>
	</tr>
	<tr>
	    <td>addNums: 数组求和(注意数组每一项为number)</td>
	    <td>addNums(arr:number[]) // arr: [1,2,3]</td>
	</tr>
	<tr>
	    <td>compareArrayKey: 根据数组元素的某一项来排序</td>
	    <td>compareArrayKey(arr: []) // arr: [{name: 'zs', age: 3}] </td>
	</tr>
    <tr valign="middle" align="center" valign="middle" >
	    <td rowspan="1"  valign="middle" align="center" style="vertical-align:middle;">日期类</td>
	    <td>`formatDate`：格式化时间戳</td>
	    <td>formatDate(date: new Date, fmt: any) //date: Date日期类型，fmt: 'yyyy-MM-dd' </td>
	</tr>
    <tr valign="middle" align="center" valign="middle" >
	    <td rowspan="2"  valign="middle" align="center" style="vertical-align:middle;">下载类</td>
	    <td>`downFileBlob`：返回的文件流下载</td>
	    <td>downFileBlob(res: any, name?: any, type?: string) // res: 文件流；name: 文件名；文件格式：pdf或者word格式</td>
	</tr>
    	<tr>
	    <td>downFileUrl: 根据url下载</td>
	    <td>downFileUrl(url: string, fileName: string) // url:url;fileName: 文件名字</td>
	</tr>
    <tr valign="middle" align="center" valign="middle" >
	    <td rowspan="2"  valign="middle" align="center" style="vertical-align:middle;">打印类</td>
	    <td>`htmlPrint`：根据html打印文件</td>
	    <td>htmlPrint(id: any) // id：dom元素id</td>
	</tr>
    	<tr>
	    <td>urlPrint: 根据url打印文件</td>
	    <td>urlPrint(url: any, isbase64?: boolean) // url: url； isbase64: 是否转换成base64打印，默认false;</td>
	</tr>
</table>

<!-- |  类型说明  |             方法名             |                                            example                                            |
| :--------: | :----------------------------: | :-------------------------------------------------------------------------------------------: |
|  通用方法  | `urlParse`,`selectRandomValue` |                                    `urlParse(str:string)`                                     |
| 日期类方法 |            toolDate            |                            `formatDate(date:Date, format: string)`                            |
| 下载类方法 |            toolDown            | `downFileBlob(flie:blob, name: string, type: string)` `downFileUrl(url:string, name: string)` |
| 打印类方法 |           toolPrint            |                        `htmlPrint(id:string)` `urlPrint(url: string)`                         | -->

<!-- ## [文档地址](https://wxfwill.github.io/xf-tools/) 持续更新中... -->
