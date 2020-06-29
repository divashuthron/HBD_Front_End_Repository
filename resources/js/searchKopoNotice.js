const request = require('request');
const cheerio = require('cheerio');

request ('http://www.kopo.ac.kr/incheon/index.do', function (error, response, body) => {
  const $ = cheerio.load(body);

  $('.visual__anchor').each((index, element) => {
    var noticeImg = $(element).find('img').text().trim();
  });
});
