//https://developers.google.com/youtube/iframe_api_reference
//youtube player API

var songs = [
  'ee5mLjoJdsQ', // May Panahon (Awit Ng Peti B) 
  'CuYwsR5dq3o', // Babae 
  'BIkdVC_VSqQ', // Oy Utol, Buto’t Balat Ka Na’y Natutulog Ka Pa 
  'UTKHlDMKPxg', // Mutya
  '1wT90uqOSsc', // Halina
  '5D7rv6dEGas', // Balita
  'n6mcbqZfnPQ', // Aling Pag-Ibig Pa 
  
]

//created empty array
var pos = [];

//number of song
var s = 0;


var songID = "";

      
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: songs[s],         
          events: {
            'onReady': onPlayerReady,
            
           
          }
        });
      }


      function onPlayerReady(event) {
        
      }

//loads the player, and pauses it right away
setTimeout(function(){
  player.loadVideoById('ee5mLjoJdsQ');
      player.pauseVideo()
      console.log(player)

},2000)
    

    //gives each song div this function
    $(".song").each(function(){
        //retrieving the left position of each song div and putting it to the empty array above
        pos.push($(this).position().left);

      })
        


$(window).scroll(function(){
      //defines left scroll position
      l = $(window).scrollLeft(); 
      
        //defines songID
        songID = player.getVideoUrl().replace("https://www.youtube.com/watch?v=","")




  
      // 
      for (i=0;i<=songs.length;i++)   {
        //condition one: if left scroll position is greater than or equal to left div position,
        //AND if left scroll position is less than left div position of the next song div, then...
        if ((l >= pos[i]) && (l < pos[i+1])) {  
          //condition two: if the player isn't playing (1 is playerState for playing),
          //OR the songID isn't       
          if ((player.getPlayerState() != 1) || (songID != songs[i])) {
              player.loadVideoById(songs[i]);
          }
        }

        }




  

        // if ((l >= pos[1]) && (l < pos[2])) {        
        //   if ((player.getPlayerState() != 1) || (songID != songs[1])) {
        //       player.loadVideoById(songs[1]);
        //   }
        // }



      
      


});
   

// https://stackoverflow.com/questions/20791374/jquery-check-if-element-is-visible-in-viewport
// how to detect if a div is in the viewport (answer by ADB)
// changed top with left, and bottom with right; for horizontal scroll

// $(window).scroll(function() {
//     var left_of_element = $("#quote-one").offset().left;
//     var right_of_element = $("#quote-one").offset().left + $("#quote-one").outerWidth();
//     var right_of_screen = $(window).scrollLeft() + $(window).innerWidth();
//     var left_of_screen = $(window).scrollLeft();

//     if ((right_of_screen > left_of_element) && (left_of_screen < right_of_element)){
      
//       $("body").css ("background-color", "#1E1612")
      
//       } else {
        
//         $("body").css ("background-color", "#FFE5AB")
//     }
// });

// $(window).scroll(function() {
//     var left_of_element = $("#quote-two").offset().left;
//     var right_of_element = $("#quote-two").offset().left + $("#quote-two").outerWidth();
//     var right_of_screen = $(window).scrollLeft() + $(window).innerWidth();
//     var left_of_screen = $(window).scrollLeft();

//     if ((right_of_screen > left_of_element) && (left_of_screen < right_of_element)){
//       $("body").css ("background-color", "#1E1612")
      
//     }
// });

// $(window).scroll(function() {
//     var left_of_element = $("#song-one").offset().left;
//     var right_of_element = $("#song-one").offset().left + $("#song-one").outerWidth();
//     var right_of_screen = $(window).scrollLeft() + $(window).innerWidth();
//     var left_of_screen = $(window).scrollLeft();

//     if ((right_of_screen > left_of_element) && (left_of_screen < right_of_element)){
    	
//       $("body").css ("background-color", "#1E1612")

//     	s=0;


//       console.log(player)
//     	player.loadVideoById(songs[s]);

//     } else {

//         player.stopVideo()
//     }
// });


// $(window).scroll(function() {
//     var left_of_element = $("#song-two").offset().left;
//     var right_of_element = $("#song-two").offset().left + $("#song-two").outerWidth();
//     var right_of_screen = $(window).scrollLeft() + $(window).innerWidth();
//     var left_of_screen = $(window).scrollLeft();

//     if ((right_of_screen > left_of_element) && (left_of_screen < right_of_element)){
//     	$("body").css ("background-color", "#1E1612")

//       s=1;

//     	player.loadVideoById(songs[s]);
//     } 
// });


// $(window).scroll(function() {
//     var left_of_element = $("#song-three").offset().left;
//     var right_of_element = $("#song-three").offset().left + $("#song-three").outerWidth();
//     var right_of_screen = $(window).scrollLeft() + $(window).innerWidth();
//     var left_of_screen = $(window).scrollLeft();

//     if ((right_of_screen > left_of_element) && (left_of_screen < right_of_element)){
//     	$("body").css ("background-color", "#1E1612")

//       s=2;

//     	player.loadVideoById(songs[s]);
//     } 
// });


// $(window).scroll(function() {
//     var left_of_element = $("#song-four").offset().left;
//     var right_of_element = $("#song-four").offset().left + $("#song-four").outerWidth();
//     var right_of_screen = $(window).scrollLeft() + $(window).innerWidth();
//     var left_of_screen = $(window).scrollLeft();

//     if ((right_of_screen > left_of_element) && (left_of_screen < right_of_element)){
//     	$("body").css ("background-color", "#1E1612")

//       s=3;

//     	player.loadVideoById(songs[s]);
//     } 
// });


// $(window).scroll(function() {
//     var left_of_element = $("#song-five").offset().left;
//     var right_of_element = $("#song-five").offset().left + $("#song-five").outerWidth();
//     var right_of_screen = $(window).scrollLeft() + $(window).innerWidth();
//     var left_of_screen = $(window).scrollLeft();

//     if ((right_of_screen > left_of_element) && (left_of_screen < right_of_element)){
//     	$("body").css ("background-color", "#1E1612")

//       s=4;

//     	player.loadVideoById(songs[s]);
//     } 
// });


// $(window).scroll(function() {
//     var left_of_element = $("#song-six").offset().left;
//     var right_of_element = $("#song-six").offset().left + $("#song-six").outerWidth();
//     var right_of_screen = $(window).scrollLeft() + $(window).innerWidth();
//     var left_of_screen = $(window).scrollLeft();

//     if ((right_of_screen > left_of_element) && (left_of_screen < right_of_element)){
//     	$("body").css ("background-color", "#1E1612")

//       s=5;

//     	player.loadVideoById(songs[s]);
//     } 
// });


// $(window).scroll(function() {
//     var left_of_element = $("#song-seven").offset().left;
//     var right_of_element = $("#song-seven").offset().left + $("#song-seven").outerWidth();
//     var right_of_screen = $(window).scrollLeft() + $(window).innerWidth();
//     var left_of_screen = $(window).scrollLeft();

//     if ((right_of_screen > left_of_element) && (left_of_screen < right_of_element)){
//     	$("body").css ("background-color", "#1E1612")

//       s=6;

//     	player.loadVideoById(songs[s]);
//     } 
// });


// $(window).scroll(function() {
//     var left_of_element = $("#end-card").offset().left;
//     var right_of_element = $("#end-card").offset().left + $("#end-card").outerWidth();
//     var right_of_screen = $(window).scrollLeft() + $(window).innerWidth();
//     var left_of_screen = $(window).scrollLeft();

//     if ((right_of_screen > left_of_element) && (left_of_screen < right_of_element)){
      
//       $("body").css ("background-color", "#FFE5AB")
      
//       } else {
        
//         // $("body").css ("background-color", "#F1F1EF")
//     }
// });




