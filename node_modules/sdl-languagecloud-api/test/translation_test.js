var chai = require('chai');
var should = chai.should();
var LanguageCloudAPI = require('../lib/languagecloud').LanguageCloudAPI;
var configs = require('../lib/config.js');
var lc = new LanguageCloudAPI(configs);

describe('Translations', function() {
  it('should get a translation', function(done) {
    lc.translations.translate({text: 'Hello', from: 'eng', to: 'fra'}, function(err, results) {
      if (err) throw err;

      should.not.exist(err);
      should.exist(results);
      done();
    });
  });

  it('should get a translation in html format using `encodeURI`', function(done) {
    lc.translations.translate({
      text: '<html><head></head><body><h1>Hello, how are you?</h1></body></html>',
      from: 'eng',
      to: 'fra',
      inputFormat: 'html'
    }, function(err, results) {
      if (err) throw err;

      should.not.exist(err);
      should.exist(results);
      done();
    });
  });
});
