var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#enteredUserName').submit(function(event) {
    event.preventDefault();
    var inputtedUserName = $('#userInput').val();
    $('#userInput').val("");
    $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response) {
      $('.showUserName').text("The user name is " + inputtedUserName + " and the repo name is: " + response.name + ".");
    }).fail(function(error) {
      $('.showUserName').text(error.responseJSON.message);
    });
  });
});
