var Photo = require('./../js/photo.js').Photo;

$(document).ready(function(){
  $("#user-input").click(function(){
    variable = ($('#input').val());
    var user_input = variable;
    var currentPhotoObject = new Photo();
    currentPhotoObject.getPhotos(user_input);
    $("#list").html('');
    });
  });
