
$(document).ready(function(){
  $("#button").click(function(){
    console.log("clicked");
    var variable = "flower";

    $.get('https://pixabay.com/api/?key=2801588-27810ab4dfe172ad8ddb203f5&q=' + variable + '&image_type=photo').then(function(response){
        console.log(response);
        }).fail(function(error){
        console.log(error.responseJSON.message);
        });
      })
    })
