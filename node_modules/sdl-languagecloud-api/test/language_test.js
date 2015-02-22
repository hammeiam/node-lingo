var chai = require('chai');
var should = chai.should();
var LanguageCloudAPI = require('../lib/languagecloud').LanguageCloudAPI;
var configs = require('../lib/config.js');
var lc = new LanguageCloudAPI(configs);
var utils = require('../lib/utils.js');

describe('Languages', function() {
  it('should get all language pairs', function(done) {
    lc.languages.all(function(err, results) {
      utils.writeDataToLog(results, function(fsErr) {
        should.not.exist(err);
        should.exist(results);
        done();
      });
    });
  });
});
