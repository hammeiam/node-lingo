var express = require('express');
var router = express.Router();
var LanguageCloud = require('sdl-languagecloud-api');

//initialize the BeGlobal API
var lc = new LanguageCloud.LanguageCloudAPI({
  api_token: '1XDzY0DyOUI5F4218reyPA%3D%3D'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.post('/translate', function(req, res, next){
// 	console.log(req.body)
// 	lc.translations.translate({
// 	  text: 'hello',
// 	  from: 'eng',
// 	  to: 'fra'
// 	  }, function(err, results) {
// 	    if (err) {
// 	      return console.log(err);
// 	    }
// 	    res.json(results)
// 	    console.log(results);
// 	  }
// 	);
	
// })


module.exports = router;
