var apiKey = require('./../.env').apiKey;

exports.Photo = function(){
};

exports.Photo.prototype.getPhotos = function(user_input) {

$.get('https://pixabay.com/api/?key=' + apiKey + '&q=' + user_input + '&image_type=photo').then(function(response){
  for (var i = 0; i < response.hits.length; i++) {
    $("#list").append('<a href="' + response.hits[i].pageURL + '"><div class="photo" style="display:inline-block"><img src=' + response.hits[i].webformatURL + '>' + '</div></a>');
  }
  }).fail(function(error){
  console.log(error.responseJSON.message);
});
};
