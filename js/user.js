
// 
// function GetURLParameter(sParam){
//   var sPageURL = window.location.search.substring(1);
//   var sURLVariables = sPageURL.split('=');
//   var token = sURLVariables[1];
//   return token;
// }
//
// var token = GetURLParameter("code");
// userid = 1362124742, // User ID - get it in source HTML of your Instagram profile or look at the next example :)
// num_photos = 4;
//
// // $.get('https://www.instagram.com/oauth/authorize/?client_id='+ token +'&redirect_uri=http://localhost:3000&response_type=code').then(function(response){
// //   console.log(response);
// // });
//
// $.ajax({
// 	url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
// 	dataType: 'jsonp',
// 	type: 'GET',
// 	data: {access_token: token, count: num_photos},
// 	success: function(data){
//  		console.log(data);
// 		for( x in data.data ){
// 			$('ul').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>'); // data.data[x].images.low_resolution.url - URL of image, 306х306
// 			// data.data[x].images.thumbnail.url - URL of image 150х150
// 			// data.data[x].images.standard_resolution.url - URL of image 612х612
// 			// data.data[x].link - Instagram post URL
// 		}
// 	},
// 	error: function(data){
// 		console.log(data); // send the error notifications to console
//     console.log(token);
// 	}
// });
