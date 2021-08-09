# cheerio-utils

基于 `cheerio` 的几个工具方法

安装

```
npm i cheerio cheerio-utils
```

使用示例

```js
const cheerioUtils = require('cheerio-utils');

let html =  `<div><p data-src="daa" src="dd">plebale</p></div>`;

console.log(cheerioUtils.removeAttrs(html, ['src', 'data-src']));
// <div><p>plebale</p></div>
```

已实现的方法
```js
// 替换图片链接
replaceImages(html, image_mapping)

// 提取图片连接
extractImages(html)

// 移除属性
removeAttrs(html, remove_attrs = null)

// 移除空白标签
removeBlankLabel(html, labels = ['p'])
```
