const isProduction = process.env.ELEVENTY_ENV == 'production';

module.exports = {
  url: isProduction ? 'https://www.appliberated.com' : 'http://localhost:8080',
  imagesUrl: '/assets/img/',
  // downloadsBaseUrl: 'https://download.aurelitec.com',
  buildYear: new Date().getFullYear(),
  isProduction,
  // analytics: {
  //   gtag: '',
  // },
};