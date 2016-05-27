# **GitHub API Web Application**

#### A web app that allows a user to enter in a GitHub user's name and return a list their public repositories. May 27, 2016

#### By **Nick Lyman**

## Description

This web application allows a user to enter a GitHub user's username into a form and return a list of that user's public repositories - including repository names and descriptions (if available). The web app accesses the GitHub API to return the requested information.

## Setup/Installation Requirements

* Link to repository: https://github.com/nicklyman/0527_JS_GitHubAPI.git
* Clone or download this repository to your Github account
* Create a project directory on your computer
* Have Node.js installed on your computer
* In your terminal type (without quotation marks) the following commands in order: "npm install", "bower install", "gulp build", "gulp serve"
* A local web server should automatically open in your browser with the website loaded if you have a browser open

## Setup API Requirements

* Anyone who uses the app will need their own key in a local file with the same filename and location.
* Create a file in the top level of your project directory called .env (hidden file) to hold our API key. This is a common file extension for a configuration file used to set up environmental variables. Paste your API key in your .env file that you just created and store it in an exported property named apiKey.
* _API key .env file example:_
**exports.apiKey = "YOUR-API-KEY-GOES-HERE";**
* In your .js file (JavaScript file) that gets access to the API key, add the following requirement to the top of the file:
**var apiKey = require('./../.env').apiKey;**

## Known Bugs

NONE

## Support and contact details

If a bug is found, please let me know via Github. Feel free to contact me with questions or suggestions and contribute to the code.

## Technologies Used

* Git
* Github
* Atom text editor
* JavaScript
* Node.js - including npm, bower, and sass

### License

*This software is licensed under the MIT license*

Copyright (c) 2016 **Nick Lyman**
