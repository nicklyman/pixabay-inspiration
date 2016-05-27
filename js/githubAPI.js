var apiKey = require('./../.env').apiKey;

exports.GitHubUser = function() {
  this.userRepos = [];
};

exports.GitHubUser.prototype.getUserName = function(username, showFunction) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response) {
    showFunction(username, response.login);
  }).fail(function(error) {
    $('.showUserName').text(error.responseJSON.message);
  });
};
