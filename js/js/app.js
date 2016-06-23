(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(function(){
  $("#user-input").click(function(){
    variable = ($('#input').val());
    var user_input = variable;
    $("#list").html('');

      $.get('https://pixabay.com/api/?key=2801588-27810ab4dfe172ad8ddb203f5&q=' + user_input + '&image_type=photo').then(function(response){
        for (var i = 0; i < response.hits.length; i++) {
          $("#list").append('<a href="' + response.hits[i].pageURL + '"><div class="photo" style="display:inline-block"><img src=' + response.hits[i].webformatURL + '>' + '</div></a>');
        }
        }).fail(function(error){
        console.log(error.responseJSON.message);
      });
    });
  });

$(document).ready(function(){
  $("#user-input").click(function(){
    variable = ($('#input').val());
    var user_input = variable;
    var vidPreviewSize = "_200x150.jpg";
    var vidPrefix = "https://i.vimeocdn.com/video/"
    $("#video-list").html('');

    $.get('https://pixabay.com/api/videos/?key=2801588-27810ab4dfe172ad8ddb203f5&q=' + user_input).then(function(response){
        for (var i = 0; i < response.hits.length; i++) {
          $("#video-list").append('<a href="' + response.hits[i].videos.small.url + '"><div class="photo" style="display:inline-block"><img src=' + vidPrefix +  response.hits[i].picture_id + vidPreviewSize + '>' + '</a>');
        }
      }).fail(function(error){
      console.log(error.responseJSON.message);
      });
    });
  });

},{}]},{},[1]);
