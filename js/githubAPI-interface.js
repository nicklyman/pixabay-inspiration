var GitHubAPI = require('./../js/githubAPI.js').GitHubAPI;

$(document).ready(function(){
  $('#printInput').submit(function(event){
    event.preventDefault();
    var printField = $('#userInput').val();

    var newGitHubAPI = new GitHubAPI(printField);
    console.log(newGitHubAPI.print());
  });
});
