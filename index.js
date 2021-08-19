const cheerio = require('cheerio');

/**
 * 通过html获取doc对象
 * @param {*} html
 * @returns
 */
function getDoc(html) {
  return cheerio.load(html);
}

/**
 * 将doc对象转html
 * @param {*} doc
 * @returns
 */
function toHtml(doc) {
  // 将生成文本多余的标签去除
  let html = doc.html();
  console.log(html);

  let pattern = /<html><head><\/head><body>([\s\S]*)<\/body><\/html>/;
  let res = html.match(pattern);
  return res[1];
}

/**
 *  替换图片链接
 * @param {*} html
 * @param {Object} image_mapping
 * @returns {String}
 */
function replaceImages(html, image_map) {
  const doc = getDoc(html);

  // each不等待promise
  doc('img').each(function (index, elem) {
    let src = doc(this).attr('src');

    if (image_map[src]) {
      doc(this).attr('src', image_map[src]);
    }
  });

  return toHtml(doc);
}

/**
 *  提取图片连接
 * @param {*} html
 * @returns {String}
 */
function extractImages(html) {
  const doc = getDoc(html);

  let images = [];

  doc('img').each(function (index, elem) {
    let src = doc(this).attr('src');
    if (src) {
      images.push(src);
    }
  });

  return images;
}

/**
 *  移除属性
 * @param {String} html
 * @param {Array} attrs
 * @returns {String}
 */
function removeAttrs(html, remove_attrs = ['style']) {
  const doc = getDoc(html);

  // 移除指定的属性
  if (remove_attrs) {
    for (let attr of remove_attrs) {
      doc(`*[${attr}]`).removeAttr(attr);
    }
  }

  return toHtml(doc);
}

/**
 *  移除空白标签
 * @param {String} html
 * @param {Array} attrs
 * @returns {String}
 */
function removeBlankLabel(html, labels = ['p']) {
  const doc = getDoc(html);

  // .children().length
  for (let label of labels) {
    doc(label).each(function (index, elem) {
      if (doc(this).contents().length == 0) {
        doc(this).remove();
      }
    });
  }

  return toHtml(doc);
}

/**
 * 替换a标签为文本字符串
 * @param {String} html
 * @returns {String}
 */
function replaceAnchorLabel(html) {
  const doc = getDoc(html);

  doc('a').each(function (index, elem) {
    doc(this).replaceWith(doc(this).text());
    // console.log(doc(this).text());
  });

  return toHtml(doc);
}

module.exports = {
  replaceImages,
  extractImages,
  removeAttrs,
  removeBlankLabel,
  replaceAnchorLabel,
  getDoc,
  toHtml,
};
