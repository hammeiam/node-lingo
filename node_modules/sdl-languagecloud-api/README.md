sdl-languagecloud-api
=============

A node.js wrapper for [SDL Language Cloud Translation API](http://languagecloud.sdl.com/)

## Installation

You can install it using NPM (Node Package Manager)
```
npm install sdl-languagecloud-api
```
Also you can add it as a dependecy in your `package.json` file.

##Usage

Refer to the [SDL Language Cloud Translation API page](http://languagecloud.sdl.com/translation-api/api-documentation) for more information about the API.

###Initialize
```js
var LanguageCloud = require('sdl-languagecloud-api');

//initialize the BeGlobal API
var lc = new LanguageCloud.LanguageCloudAPI({
  api_token: 'API_TOKEN'
});
```

###Translation
```js
lc.translations.translate({
  text: 'hello',
  from: 'eng',
  to: 'fra'
  }, function(err, results) {
    if (err) {
      return console.log(err);
    }

    console.log(results);
  }
);
```

###Languages
```js
lc.languages.all(function(err, results) {
    if (err) {
      return console.log(err);
    }

    console.log(results);
    // returning a list of language pairs
    /*
      [
        {
            "from": {
                "id": "505037985fe01ac20407b7fb",
                "code": "eng",
                "name": "English",
                "fullName": "English",
                "rightToLeft": false
            },
            "to": {
                "id": "505037985fe01ac20407b81f",
                "code": "spa",
                "name": "Spanish",
                "fullName": "Spanish; Castilian",
                "rightToLeft": false
            }
        },
        ...
      ]
    */
  }
);
```

###Projects

`GET` all projects

```js
lc.projects.all(function(err, results) {
    if (err) {
      return console.log(err);
    }

    console.log(results);
    // returning a list of projects
    /*
    {
        "totalCount" : 1,
        "projects" : [
            {
              "type" : "translationProject",
              "id" : "5176407e132b856177f4c87a",
              "notificationCallbackURL" : "https://some.api.com/endpoint",
              "autoAcceptProject" : false,
              "links" : null,
              "creationDate" : "2013-04-24 11:13:09",
              "lastModifiedDate" : null,
              "version" : null,
              "apiKeyId" : null,
              "accessControllList" : [

             ],
              "description" : null,
              "projectName" : null,
              "currentState" : null,
              ...
            }
       ]
    }
    */
  }
);
```

`GET` a project by id

```js
lc.projects.get("5176407e132b856177f4c87a", function(err, results) {
    if (err) {
      return console.log(err);
    }

    console.log(results);
    // returning a list of language pairs
    /*
    {
        "type" : "translationProject",
        "id" : "5176407e132b856177f4c87a",
        "notificationCallbackURL" : "https://some.api.com/endpoint",
        "autoAcceptProject" : false,
        "links" : null,
        "creationDate" : "2013-04-24 11:13:09",
        "lastModifiedDate" : null,
        "version" : null,
        "apiKeyId" : null,
        "accessControllList" : [

       ],
        "description" : null,
        "projectName" : null,
        "currentState" : null,
        ...
    }
    */
  }
);
```

## License

The MIT License (MIT)

Copyright (c) 2014 SDL plc. (http://languagecloud.sdl.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
