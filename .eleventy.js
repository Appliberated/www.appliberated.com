
// const filters = require('./utils/filters.js');

module.exports = function (eleventyConfig) {

  // Filters & Shortcodes
  // filters(eleventyConfig);
  // shortcodes(eleventyConfig);

  // Eleventy
  eleventyConfig.addPassthroughCopy('src/assets/styles/*.css');
  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  eleventyConfig.addPassthroughCopy('src/site.webmanifest');
  eleventyConfig.setDataDeepMerge(true);

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