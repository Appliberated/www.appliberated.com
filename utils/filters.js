const site = require('../src/_data/site.js');

const imgurl = (url) => `${site.imagesUrl}${url}`;

module.exports = (config) => {
  config.addFilter("imgurl", imgurl);
};
