var express = require('express');
var router = express.Router();
var https = require('https');
var querystring = require('querystring');

// var LanguageCloud = require('sdl-languagecloud-api');

// //initialize the BeGlobal API
// var lc = new LanguageCloud.LanguageCloudAPI({
//   api_token: '1XDzY0DyOUI5F4218reyPA%3D%3D'
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/translate', function(req, res, next){
	var postData = JSON.stringify({
		text: req.body.word,
	  from: req.body.fromLang,
	  to: req.body.toLang
	});
	console.log(postData)

	var options = {
		hostname: 'lc-api.sdl.com',
		path: '/translate',
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
			'Authorization': 'LC apiKey=1XDzY0DyOUI5F4218reyPA%3D%3D'
		}
	};

	var apiCall = https.request(options, function(apiResponse){
		console.log('STATUS: ' + apiResponse.statusMessage);
	  console.log('HEADERS: ' + JSON.stringify(apiResponse.headers));
	  apiResponse.setEncoding('utf8');
		apiResponse.on('data', function (chunk) {
			console.log(chunk["translation"])
			console.log('BODY: ' + chunk);
			res.write(chunk)
			res.end()
	   
	  });
	});

	apiCall.on('error', function(e) {
	  console.log('problem with request: ' + e.message);
	});
	apiCall.write(postData);
	apiCall.end();	

	// lc.translations.translate({
	//   text: word,
	//   from: tranFrom,
	//   to: tranTo
	//   }, function(err, results) {
	//     if (err) {
	//       return console.log(err);
	//     }
	//     // res.json(results)
	//     console.log(results);
	//   }
	// );
});


module.exports = router;
