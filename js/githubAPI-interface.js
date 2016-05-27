var apiKey = require('./../.env').apiKey;
var GitHubUser = require('./../js/githubAPI.js').GitHubUser;

$(document).ready(function(){

  var requestedGitUserName = new GitHubUser();

  $('#enteredUserName').submit(function(event){
    event.preventDefault();
    var username = $('#userInput').val();
    $('#userInput').val("");

    var getCurrentUser = function(response) {
      $('.showUserName').text("Your requested GitHub user is: " + username);
    };

    var getCurrentUserRepos = function(response) {
      $('.showRepoNamesDescriptions').empty();
      $('.showRepoNamesDescriptions').append("The public GitHub repositories for " + username + " are: ");

      $('.showRepoNamesDescriptions').append("<li>" + "GitHub Repository Name: " + response[0].name + "</li>");
    };

    requestedGitUserName.getUserName(username, getCurrentUser);
    requestedGitUserName.getUserRepos(username, getCurrentUserRepos);
  });
});
