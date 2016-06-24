var Video = require('./../js/video.js').Video;

$(document).ready(function(){
  $("#user-input").click(function(){
    variable = ($('#input').val());
    var user_input = variable;
    var currentVideoObject = new Video();
    currentVideoObject.getVideos(user_input);
    $("#video-list").html('');
    });
  });
