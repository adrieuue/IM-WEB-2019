
$(document).mousemove(function(e){
	$("#point").css({
		left:(e.pageX),
		top:(e.pageY)
	})

})
//www.youtube.com/watch?v=r3I04RXsvYA
//follow mouse around

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
			.css("cursor", "none")
//www.w3schools.com/cssref/pr_class_cursor.asp
//cursor properties
	
	$("#point")
			.css("border-color", "cyan")
			.css("border-top-color", "white")

	addDotOne()
	addDotTwo()
	addDotThree()
	addDotFour()
	
})


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










function addDotOne (){
	var randomX = Math.floor(Math.random()* $(window).width())
	var randomY = Math.floor(Math.random()* $(window).height())

	$(".dot-one").css({
		"top":randomX,
		"left":randomY
	})

}

function addDotTwo (){
	var randomX = Math.floor(Math.random()* $(window).width())
	var randomY = Math.floor(Math.random()* $(window).height())

	$(".dot-two").css({
		"top":randomX,
		"left":randomY
	})

}

function addDotThree (){
	var randomX = Math.floor(Math.random()* $(window).width())
	var randomY = Math.floor(Math.random()* $(window).height())

	$(".dot-three").css({
		"top":randomX,
		"left":randomY
	})

}

function addDotFour (){
	var randomX = Math.floor(Math.random()* $(window).width())
	var randomY = Math.floor(Math.random()* $(window).height())

	$(".dot-four").css({
		"top":randomX,
		"left":randomY
	})

}































	


















