(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "f7eaec6468e5e8ae52881f3a68f470c28c62b16c";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

exports.GitHubUser = function() {
};

exports.GitHubUser.prototype.getUserRepos = function(username, showFunction) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response) {
    showFunction(response);
  }).fail(function(error) {
    $('.showRepoNamesDescriptions').text(error.responseJSON.message);
  });
};

},{"./../.env":1}],3:[function(require,module,exports){
var GitHubUser = require('./../js/githubAPI.js').GitHubUser;

$(document).ready(function(){

  var requestedGitUserName = new GitHubUser();

  $('#enteredUserName').submit(function(event){
    event.preventDefault();
    var username = $('#userInput').val();
    $('#userInput').val("");

    var getCurrentUserRepos = function(response) {
      $('.showRepoNamesDescriptions').empty();
      $('#intro').text('The public GitHub repositories for ' + response[0].owner.login + ' are: ');
      for (var i = 0; i < response.length; i++) {
        $('.showRepoNamesDescriptions').append("<li>" + "Name: " + response[i].name + "<br>" + " Description: " + response[i].description + "</li>");
      }
    };

    requestedGitUserName.getUserRepos(username, getCurrentUserRepos);
  });
});

},{"./../js/githubAPI.js":2}]},{},[3]);
