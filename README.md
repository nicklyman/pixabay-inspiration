# **Image and Video Content Generator**

#### A web app that allows a user to enter a key term in which the application will return both photos and videos. The photos and videos can be used for design, exploration, and simple inspiration for their own web applications. June 24, 2016

#### By **Connor Cummings, Ming Wen, Ned Faulhaber, and Nick Lyman**

## Description

A resource for developers to find image and video content to include in their applications or to help in their development process.

## Setup/Installation Requirements

* Link to repository: https://github.com/nicklyman/trending_instagram.git
* Clone or download this repository to your Github account
* Create a project directory on your computer
* Have Node.js installed on your computer
* In your terminal type (without quotation marks) the following commands in order: "npm install", "bower install", "gulp build", "gulp serve"
* A local web server should automatically open in your browser with the website loaded if you have a browser open

## Setup API Requirements

* Anyone who uses the app will need their own key in a local file with the same filename and location.
* Create a file in the top level of your project directory called .env (hidden file) to hold our API key. This is a common file extension for a configuration file used to set up environmental variables. Paste your API key in your .env file that you just created and store it in an exported property named apiKey.
* API key can be obtained at: https://pixabay.com/api/docs/
* _API key .env file example:_
**exports.apiKey = "YOUR-API-KEY-GOES-HERE";**
* In your .js file (JavaScript file) that gets access to the API key, add the following requirement to the top of the file:
**var apiKey = require('./../.env').apiKey;**

## Known Bugs

NONE

## Support and contact details

If a bug is found, please let us know via Github. Feel free to contact us with questions or suggestions and contribute to the code.

## Technologies Used

* Git
* Github
* Atom text editor
* JavaScript
* Node.js - including npm, gulp, bower, and sass
* Pixabay API


### License

*This software is licensed under the MIT license*

Copyright (c) 2016 **Connor Cummings, Ming Wen, Ned Faulhaber, and Nick Lyman**
