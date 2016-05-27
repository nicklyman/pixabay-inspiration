var GitHubUser = require('./../js/githubAPI.js').GitHubUser;

$(document).ready(function(){

  var requestedGitUserName = new GitHubUser();

  $('#enteredUserName').submit(function(event){
    event.preventDefault();
    var username = $('#userInput').val();
    $('#userInput').val("");

    var getCurrentUserRepos = function(response) {
      $('.showRepoNamesDescriptions').empty();
      $('.showRepoNamesDescriptions').append("The public GitHub repositories for " + response[0].owner.login + " are: ");
      for (var i = 0; i < response.length; i++) {
        $('.showRepoNamesDescriptions').append("<li>" + "Name: " + response[i].name + "<br>" + " Description: " + response[i].description + "</li>");
      }
    };

    requestedGitUserName.getUserRepos(username, getCurrentUserRepos);
  });
});
