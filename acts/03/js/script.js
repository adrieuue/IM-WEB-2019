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

      $("#play-0").click(function(){
          s=0;
          player.loadVideoById(songs[s]);
      })

      $("#play-1").click(function(){
          s=1;
          player.loadVideoById(songs[s]);
      })

      $("#play-2").click(function(){
          s=2;
          player.loadVideoById(songs[s]);
      })

      $("#play-3").click(function(){
          s=3;
          player.loadVideoById(songs[s]);
      })

      $("#play-4").click(function(){
          s=4;
          player.loadVideoById(songs[s]);
      })

      $("#play-5").click(function(){
          s=5;
          player.loadVideoById(songs[s]);
      })

      $("#play-6").click(function(){
          s=6;
          player.loadVideoById(songs[s]);
      })

      $(".stop-song").click(function(){
        player.stopVideo()
      })


//scrollTo learned from an in-class tutorial

$("#button-0").click(function(){
  $("body").scrollTo("#song-0", 1000)
})

$("#button-1").click(function(){
  $("body").scrollTo("#song-1", 1000)
})


$("#button-2").click(function(){
  $("body").scrollTo("#song-2", 1000)
})


$("#button-3").click(function(){
  $("body").scrollTo("#song-3", 1000)
})


$("#button-4").click(function(){
  $("body").scrollTo("#song-4", 1000)
})


$("#button-5").click(function(){
  $("body").scrollTo("#song-5", 1000)
})

$("#button-6").click(function(){
  $("body").scrollTo("#song-6", 1000)
})






  

 
      
      



   



