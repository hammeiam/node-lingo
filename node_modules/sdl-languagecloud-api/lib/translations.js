var Request = require('./request').Request;

function Translations(opts) {
  this.request = new Request(opts.username, opts.api_token);
}

Translations.prototype.translate = function(translationObject, callback) {
  var format = (['plain', 'html'].indexOf(translationObject.inputFormat) === -1) ? 'plain' : translationObject.inputFormat;
  var text = translationObject.text;

  if (format === 'html') {
    text = encodeURI(text);
  }

  this.request.post('/translate', {
    text: text,
    from: translationObject.from,
    to: translationObject.to,
    inputFormat: format
  }, callback);
};

exports.Translations = Translations;
