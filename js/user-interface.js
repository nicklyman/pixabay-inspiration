
var getMultipleTags = require('./../js/user.js').getMultipleTags;

$(document).ready(function(){
  $("#user-input").click(function(event){
    event.preventDefault();
    console.log("clicked");
    getMultipleTags();
  })
});
