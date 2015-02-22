var LanguageCloudAPI = require('../lib/languagecloud').LanguageCloudAPI;
var configs = require('../lib/config.js');
var lc = new LanguageCloudAPI(configs);

lc.translations.translate({text: 'hello', from: 'eng', to: 'fra'}, function(err, results) {
  if (err) {
    return console.log(err);
  }

  console.log(results);
});
