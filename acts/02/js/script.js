
$(".startButton").hover(function(){
  $(this).css("background-color", "blue");
  }
  , function(){
  $(this).css("background-color", "transparent");
})
// www.w3schools.com/jquery/event_hover.asp
// changing element when hovered over
//the comma does both mouseenter and mouseleave events



$(".startButton").click(function(){
	$(this).remove();
//www.w3schools.com/jquery/jquery_dom_remove.asp
//remove element

	$("body")
			.css("background-color", "blue")
			// .css("cursor", "none")
//www.w3schools.com/cssref/pr_class_cursor.asp
//cursor properties
	
	$("#point")
			.css("border-top-color", "orange")
	
})


$(document).mousemove(function(e){
	$("#point").css({
		left:(e.pageX),
		top:(e.pageY)
	})

})
//www.youtube.com/watch?v=r3I04RXsvYA
//follow mouse around
	
$(".dot-one").hover(function() {
	$(document).mousemove(function(e){
		$(".dot-one").css({
		left:(e.pageX),
		top:(e.pageY)
		})
		.css("background-color", "white")
	})
})

$(".dot-two").hover(function() {
	$(document).mousemove(function(e){
		$(".dot-two").css({
		left:(e.pageX),
		top:(e.pageY)
		})
		.css("background-color", "white")
	})
})

$(".dot-three").hover(function() {
	$(document).mousemove(function(e){
		$(".dot-three").css({
		left:(e.pageX),
		top:(e.pageY)
		})
		.css("background-color", "white")
	})
})

$(".dot-four").hover(function() {
	$(document).mousemove(function(e){
		$(".dot-four").css({
		left:(e.pageX),
		top:(e.pageY)
		})
		.css("background-color", "white")
	})
})























