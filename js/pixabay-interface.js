var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $("#user-input").click(function(){
    variable = ($('#input').val());
    var user_input = variable;
    $("#list").html('');

      $.get('https://pixabay.com/api/?key=' + apiKey + '&q=' + user_input + '&image_type=photo').then(function(response){
        for (var i = 0; i < response.hits.length; i++) {
          $("#list").append('<a href="' + response.hits[i].pageURL + '"><div class="photo" style="display:inline-block"><img src=' + response.hits[i].webformatURL + '>' + '</div></a>');
        }
        }).fail(function(error){
        console.log(error.responseJSON.message);
      });
    });
  });
