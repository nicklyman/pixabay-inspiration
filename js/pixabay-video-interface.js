$(document).ready(function(){
  $("#button").click(function(){
    console.log("clicked");
    var variable = "urban";
    var vidPreviewSize = "_200x150.jpg";
    var vidPrefix = "https://i.vimeocdn.com/video/"

    $.get('https://pixabay.com/api/videos/?key=2801588-27810ab4dfe172ad8ddb203f5&q=' + variable).then(function(response){
        console.log(response.hits);
          for (var i = 0; i < response.hits.length; i++) {
            $("#video-list").append('<a href="' + response.hits[i].videos.small.url + '"><div class="photo" style="display:inline-block"><img src=' + vidPrefix +  response.hits[i].picture_id + vidPreviewSize + '>' + '</a>');
          }
        }).fail(function(error){
        console.log(error.responseJSON.message);
        });
      });
    });
