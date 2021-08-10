# cheerio-utils

基于 `cheerio` 的几个工具方法

- npm: [https://www.npmjs.com/package/cheerio-utils](https://www.npmjs.com/package/cheerio-utils)

- github: [https://github.com/mouday/cheerio-utils.js](https://github.com/mouday/cheerio-utils.js)

- cheerio: [https://github.com/cheeriojs/cheerio/wiki/Chinese-README](https://github.com/cheeriojs/cheerio/wiki/Chinese-README)

安装

```
npm i cheerio cheerio-utils
```

使用示例

```js
const cheerioUtils = require('cheerio-utils');

let html = `<div><p data-src="daa" src="dd">plebale</p></div>`;

console.log(cheerioUtils.removeAttrs(html, ['src', 'data-src']));
// <div><p>plebale</p></div>
```

已实现的方法

```js
// 替换图片链接
replaceImages(html, image_map);

// 提取图片连接
extractImages(html);

// 移除属性
removeAttrs(html, (remove_attrs = ['style']));

// 移除空白标签
removeBlankLabel(html, (labels = ['p']));

// 替换a标签为文本字符串
replaceAnchorLabel(html);
```
