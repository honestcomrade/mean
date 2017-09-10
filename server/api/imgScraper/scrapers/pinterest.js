'use strict';
var request = require('request');
var cheerio = require('cheerio');

exports.list = function (url, cb) {
  request(url, function(err, res, body) {
    if(err) {
      cb({
        err:err
      });
    }
    if(!err) {
      var $ = cheerio.load(body);
      var pin = {};
      var $url = url;
      var $img = $('.flashLightEnabledContent img').attr('src');
      var $desc = $('.flashLightEnabledContent img').attr('alt');

      console.log($img + ' pin url');

      pin = {
        img: $img,
        url: $url,
        desc: $desc
      }

      // respond with final JSON object - pass to cb
      cb(pin);
    }
  });
}