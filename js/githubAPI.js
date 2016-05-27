var apiKey = require('./../.env').apiKey;

exports.GitHubUser = function() {
  this.userRepos = [];
};

exports.GitHubUser.prototype.getUserName = function(username, showFunction) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response) {
    console.log(response);
    showFunction(username, response.login);
  }).fail(function(error) {
    $('.showUserName').text(error.responseJSON.message);
  });
};

exports.GitHubUser.prototype.getUserRepos = function(username, showFunction) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response) {
    console.log(response);
    console.log(response[0].name);
    showFunction(username, response[0].name);
  }).fail(function(error) {
    $('.showRepoNamesDescriptions').text(error.responseJSON.message);
  });
};


// this.userRepos[0] = response.name;
// this.userRepos[1] = response.description;
// return this.userRepos;
