const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");

const filters = require('./utils/filters.js');

module.exports = function (eleventyConfig) {

  // Filters & Shortcodes
  filters(eleventyConfig);
  // shortcodes(eleventyConfig);

  // Eleventy
  eleventyConfig.addPassthroughCopy('src/assets/styles/*.css');
  eleventyConfig.addPassthroughCopy('src/assets/img');
  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  eleventyConfig.addPassthroughCopy('src/site.webmanifest');
  eleventyConfig.setDataDeepMerge(true);

  const markdownLib = markdownIt({ html: true }).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLib);

  return {
    passthroughFileCopy: true,
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
      output: '_site',
    }
  }
}