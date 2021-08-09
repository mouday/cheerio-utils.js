const cheerio = require('cheerio');

/**
 *  替换图片链接
 * @param {*} html
 * @param {Object} image_mapping
 * @returns
 */
function replaceImages(html, image_mapping) {
  const doc = cheerio.load(html, {
    xmlMode: true,
    decodeEntities: false,
  });

  // each不等待promise
  doc('img').each(function (index, elem) {
    let src = doc(this).attr('src');

    if (image_mapping[src]) {
      doc(this).attr('src', image_mapping[src]);
    }
  });

  return doc.xml();
}

/**
 *  提取图片连接
 * @param {*} html
 * @returns
 */
function extractImages(html) {
  const doc = cheerio.load(html, {
    xmlMode: true,
    decodeEntities: false,
  });

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
function removeAttrs(html, remove_attrs = null) {
  const doc = cheerio.load(html, {
    xmlMode: true,
    decodeEntities: false,
  });

  // 移除指定的属性
  if (remove_attrs) {
    for (let attr of remove_attrs) {
      doc(`*[${attr}]`).removeAttr(attr);
    }
  }

  return doc.xml();
}

/**
 *  移除空白标签
 * @param {String} html
 * @param {Array} attrs
 * @returns {String}
 */
function removeBlankLabel(html, labels = ['p']) {
  const doc = cheerio.load(html, {
    xmlMode: true,
    decodeEntities: false,
  });

  // .children().length
  for (let label of labels) {
    doc(label).each(function (index, elem) {
      if (doc(this).contents().length == 0) {
        doc(this).remove();
      }
    });
  }

  return doc.xml();
}

module.exports = {
  replaceImages,
  extractImages,
  removeAttrs,
  removeBlankLabel,
};
