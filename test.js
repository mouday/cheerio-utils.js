const {
  replaceImages,
  extractImages,
  removeAttrs,
  removeBlankLabel,
  replaceAnchorLabel
} = require('./index.js');


// console.log(removeAttrs(html, ['class', 'id', 'style']));
// console.log(extractImages(html));
// console.log(replaceImages(html, {'img-url': 'new-img-url'}));

let html = `<div><p data-src="daa" src="dd">plebale</p>
<a href="https://36kr.com/projectDetails/3969340" target="_blank">一条</a>
<a href="https://36kr.com/projectDetails/3969340" target="_blank"><span>二条</span></a>
</div>`;

console.log(replaceAnchorLabel(html));
// <div><p>plebale</p></div>
