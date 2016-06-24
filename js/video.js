var apiKey = require('./../.env').apiKey;

exports.Video = function(){
};

exports.Video.prototype.getObject = function() {
  console.log("Hi! I'm an object.");
};

exports.Video.prototype.getVideos = function(user_input) {

$.get('https://pixabay.com/api/videos/?key=' + apiKey + '&q=' + user_input).then(function(response){
    var vidPrefix = "https://i.vimeocdn.com/video/";
    var vidPreviewSize = "_200x150.jpg";
    for (var i = 0; i < response.hits.length; i++) {
      $("#video-list").append('<a href="' + response.hits[i].videos.small.url + '"><div class="photo" style="display:inline-block"><img src=' + vidPrefix +  response.hits[i].picture_id + vidPreviewSize + '>' + '</a>');
    }
  }).fail(function(error){
  console.log(error.responseJSON.message);
  });
};
