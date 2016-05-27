var GitHubUser = require('./../js/githubAPI.js').GitHubUser;

$(document).ready(function(){

  var requestedGitUserName = new GitHubUser();

  $('#enteredUserName').submit(function(event){
    event.preventDefault();
    var username = $('#userInput').val();
    $('#userInput').val("");

    var functionCurrentUser = function(response) {
      $('.showUserName').text("Your requested GitHub user is: " + username);
    };

    // var functionCurrentUserRepos = function(response) {
    //   $('.showRepoNamesDescriptions').empty();
    //   $('.showRepoNamesDescriptions').append("The public GitHub repositories for " + username + "are: ");
    //   for (var i = 0; i < userRepos.length; i++) {
    //     $('.showRepoNamesDescriptions').append("<li>" + "GitHub Repository Name: " + )
    //   }
    // };

    requestedGitUserName.getUserName(username, functionCurrentUser);
    // requestedGitUserName.getUserRepos(username, functionCurrentUserRepos);
  });
});
