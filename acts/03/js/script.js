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

//number of song
var s = 0;



$("#player").hide()
      
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

   

// https://stackoverflow.com/questions/20791374/jquery-check-if-element-is-visible-in-viewport
// how to detect if a div is in the viewport (answer by ADB)
// changed top with left, and bottom with right; for horizontal scroll

$(window).scroll(function() {
    var left_of_element = $("#quote-one").offset().left;
    var right_of_element = $("#quote-one").offset().left + $("#quote-one").outerWidth();
    var right_of_screen = $(window).scrollLeft() + $(window).innerWidth();
    var left_of_screen = $(window).scrollLeft();

    if ((right_of_screen > left_of_element) && (left_of_screen < right_of_element)){
      
      $("body").css ("background-color", "#1E1C1C")
      
      } else {
        
        // $("body").css ("background-color", "#F1F1EF")
    }
});

$(window).scroll(function() {
    var left_of_element = $("#quote-two").offset().left;
    var right_of_element = $("#quote-two").offset().left + $("#quote-two").outerWidth();
    var right_of_screen = $(window).scrollLeft() + $(window).innerWidth();
    var left_of_screen = $(window).scrollLeft();

    if ((right_of_screen > left_of_element) && (left_of_screen < right_of_element)){
      $("body").css ("background-color", "#1E1C1C")
      
    }
});

$(window).scroll(function() {
    var left_of_element = $("#song-one").offset().left;
    var right_of_element = $("#song-one").offset().left + $("#song-one").outerWidth();
    var right_of_screen = $(window).scrollLeft() + $(window).innerWidth();
    var left_of_screen = $(window).scrollLeft();

    if ((right_of_screen > left_of_element) && (left_of_screen < right_of_element)){
    	
      $("body").css ("background-color", "#1E1C1C")

    	s=0;

    	player.loadVideoById(songs[s]);

    } else {

        player.stopVideo()
    }
});


$(window).scroll(function() {
    var left_of_element = $("#song-two").offset().left;
    var right_of_element = $("#song-two").offset().left + $("#song-two").outerWidth();
    var right_of_screen = $(window).scrollLeft() + $(window).innerWidth();
    var left_of_screen = $(window).scrollLeft();

    if ((right_of_screen > left_of_element) && (left_of_screen < right_of_element)){
    	$("body").css ("background-color", "#1E1C1C")

      s=1;

    	player.loadVideoById(songs[s]);
    } 
});


$(window).scroll(function() {
    var left_of_element = $("#song-three").offset().left;
    var right_of_element = $("#song-three").offset().left + $("#song-three").outerWidth();
    var right_of_screen = $(window).scrollLeft() + $(window).innerWidth();
    var left_of_screen = $(window).scrollLeft();

    if ((right_of_screen > left_of_element) && (left_of_screen < right_of_element)){
    	$("body").css ("background-color", "#1E1C1C")

      s=2;

    	player.loadVideoById(songs[s]);
    } 
});


$(window).scroll(function() {
    var left_of_element = $("#song-four").offset().left;
    var right_of_element = $("#song-four").offset().left + $("#song-four").outerWidth();
    var right_of_screen = $(window).scrollLeft() + $(window).innerWidth();
    var left_of_screen = $(window).scrollLeft();

    if ((right_of_screen > left_of_element) && (left_of_screen < right_of_element)){
    	$("body").css ("background-color", "#1E1C1C")

      s=3;

    	player.loadVideoById(songs[s]);
    } 
});


$(window).scroll(function() {
    var left_of_element = $("#song-five").offset().left;
    var right_of_element = $("#song-five").offset().left + $("#song-five").outerWidth();
    var right_of_screen = $(window).scrollLeft() + $(window).innerWidth();
    var left_of_screen = $(window).scrollLeft();

    if ((right_of_screen > left_of_element) && (left_of_screen < right_of_element)){
    	$("body").css ("background-color", "#1E1C1C")

      s=4;

    	player.loadVideoById(songs[s]);
    } 
});


$(window).scroll(function() {
    var left_of_element = $("#song-six").offset().left;
    var right_of_element = $("#song-six").offset().left + $("#song-six").outerWidth();
    var right_of_screen = $(window).scrollLeft() + $(window).innerWidth();
    var left_of_screen = $(window).scrollLeft();

    if ((right_of_screen > left_of_element) && (left_of_screen < right_of_element)){
    	$("body").css ("background-color", "#1E1C1C")

      s=5;

    	player.loadVideoById(songs[s]);
    } 
});


$(window).scroll(function() {
    var left_of_element = $("#song-seven").offset().left;
    var right_of_element = $("#song-seven").offset().left + $("#song-seven").outerWidth();
    var right_of_screen = $(window).scrollLeft() + $(window).innerWidth();
    var left_of_screen = $(window).scrollLeft();

    if ((right_of_screen > left_of_element) && (left_of_screen < right_of_element)){
    	$("body").css ("background-color", "#1E1C1C")

      s=6;

    	player.loadVideoById(songs[s]);
    } 
});




