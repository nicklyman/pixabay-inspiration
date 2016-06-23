
$(document).ready(function(){
  $("#button").click(function(){
    console.log("clicked");
    var variable = "urban";

    $.get('https://pixabay.com/api/?key=2801588-27810ab4dfe172ad8ddb203f5&q=' + variable + '&image_type=photo').then(function(response){
        console.log(response);
          for (var i = 0; i < response.hits.length; i++) {
            $("#list").append('<a href="' + response.hits[i].pageURL + '"><div class="photo" style="display:inline-block"><img src=' + response.hits[i].webformatURL + '>' + '</a>');
          }
        }).fail(function(error){
        console.log(error.responseJSON.message);
        });
      });
    });
