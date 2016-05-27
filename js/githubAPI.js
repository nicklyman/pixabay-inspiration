var apiKey = require('./../.env').apiKey;

exports.GitHubUser = function() {
};

exports.GitHubUser.prototype.getUserName = function(username, showFunction) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response) {
    console.log(response);
    console.log(response[0].owner.login);
    showFunction(response);
  }).fail(function(error) {
    $('.showUserName').text(error.responseJSON.message);
  });
};

exports.GitHubUser.prototype.getUserRepos = function(username, showFunction) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response) {
    console.log(response[0].name);
    console.log(response[0].description);
    showFunction(response);
  }).fail(function(error) {
    $('.showRepoNamesDescriptions').text(error.responseJSON.message);
  });
};
