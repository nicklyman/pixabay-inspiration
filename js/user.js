

exports.getMultipleTags = function(){
    var tag = "portland";
    $.get('https://api.instagram.com/v1/tags/' + tag +'/media/recent?access_token=f6300ff872354a96a933ecf47cbee0fe').then(function(repsonse){
      console.log(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
}
