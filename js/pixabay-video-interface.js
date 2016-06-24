var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $("#user-input").click(function(){
    variable = ($('#input').val());
    var user_input = variable;
    var vidPreviewSize = "_200x150.jpg";
    var vidPrefix = "https://i.vimeocdn.com/video/"
    $("#video-list").html('');

    $.get('https://pixabay.com/api/videos/?key=' + apiKey + '&q=' + user_input).then(function(response){
        for (var i = 0; i < response.hits.length; i++) {
          $("#video-list").append('<a href="' + response.hits[i].videos.small.url + '"><div class="photo" style="display:inline-block"><img src=' + vidPrefix +  response.hits[i].picture_id + vidPreviewSize + '>' + '</a>');
        }
      }).fail(function(error){
      console.log(error.responseJSON.message);
      });
    });
  });
