# _GitHub API Web Application_

#### _A web app that allows a user to enter in a GitHub user's name and return a list their public repositories. May 27, 2016_

#### By _**Nick Lyman**_

## Description

_This web application allows a user to enter a GitHub user's username into a form and return a list of that user's public repositories - including repository names and descriptions (if available). The web app accesses the GitHub API to return the requested information._

## Setup/Installation Requirements

* _Link to repository: https://github.com/nicklyman/0527_JS_GitHubAPI.git_
* _Clone or download this repository to your Github account_
* _Create a project directory on your computer_
* _Have Node.js installed on your computer_
* _In your terminal type (without quotation marks) the following commands in order: "npm install", "bower install", "gulp build", "gulp_serve"_
* _A local web server should automatically open in your browser with the website loaded if you have a browser open_

## Setup API Requirements

* _Anyone who uses the app will need their own key in a local file with the same filename and location._

* _Create a file in the top level of your project directory called .env (hidden file) to hold our API key. This is a common file extension for a configuration file used to set up environmental variables. Paste your API key in your .env file that you just created and store it in an exported property named apiKey._

* _API key .env file example:_
**exports.apiKey = "YOUR-API-KEY-GOES-HERE";**

* _In your .js file (JavaScript file) that gets access to the API key, add the following requirement to the top of the file:_
**var apiKey = require('./../.env').apiKey;**

## Known Bugs

_NONE_

## Support and contact details

_If a bug is found, please let me know via Github. Feel free to contact me with questions or suggestions and contribute to the code._

## Technologies Used

* _Git_
* _Github_
* _Atom text editor_
* _JavaScript_
* _Node.js - including npm, bower, and sass_

### License

*This software is licensed under the MIT license*

Copyright (c) 2016 **_Nick Lyman_**
