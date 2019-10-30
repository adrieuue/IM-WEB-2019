
$(document).mousemove(function(e){ //makes the pointer follow the mouse
	$("#pointer").css({
		left:(e.pageX),
		top:(e.pageY)
	})

	turnCursor () //function is placed inside the mousemove event, so it happens everytime the mouse moves



})
//www.youtube.com/watch?v=r3I04RXsvYA
//follow mouse around



	addDotOne() //calls function
	// addDotTwo()
	// addDotThree()
	// addDotFour()

$(".dot-one").hover(function() { //when mouse hovers over dot, the following functions are activated
	$(document).mousemove(function(e){ //dot follows mouse
		$(".dot-one").css({ //selects the dot, then assigns coordinates to it's css (that follow the mouse)
		left:(e.pageX),
		top:(e.pageY)
		})
		.css("background-color", "white") //changes dot's colour to white
		
	})
})


// $(".dot-two").hover(function() {
// 	$(document).mousemove(function(e){
// 		$(".dot-two").css({
// 		left:(e.pageX),
// 		top:(e.pageY)
// 		})
// 		.css("background-color", "white")
		
// 	})
// })

// $(".dot-three").hover(function() {
// 	$(document).mousemove(function(e){
// 		$(".dot-three").css({
// 		left:(e.pageX),
// 		top:(e.pageY)
// 		})
// 		.css("background-color", "white")
		
// 	})
// })

// $(".dot-four").hover(function() {
// 	$(document).mousemove(function(e){
// 		$(".dot-four").css({
// 		left:(e.pageX),
// 		top:(e.pageY)
// 		})
// 		.css("background-color", "white")

// 	})
// })



function addDotOne (){ //creating a function that randomizes dot position
	var randomX = Math.floor(Math.random()* $(window).width()) //creates random number for an X coordinate
	var randomY = Math.floor(Math.random()* $(window).height()) //creates random number for a Ycoordinate

	$(".dot-one").css({ 
		"left":randomX, //defines the random X coordinate of dot
		"top":randomY //defines the random Y coordinate of dot
	})

}



// function addDotTwo (){
// 	var randomX = Math.floor(Math.random()* $(window).width())
// 	var randomY = Math.floor(Math.random()* $(window).height())

// 	$(".dot-two").css({
// 		"top":randomX,
// 		"left":randomY
// 	})

// }

// function addDotThree (){
// 	var randomX = Math.floor(Math.random()* $(window).width())
// 	var randomY = Math.floor(Math.random()* $(window).height())

// 	$(".dot-three").css({
// 		"top":randomX,
// 		"left":randomY
// 	})

// }

// function addDotFour (){
// 	var randomX = Math.floor(Math.random()* $(window).width())
// 	var randomY = Math.floor(Math.random()* $(window).height())

// 	$(".dot-four").css({
// 		"top":randomX,
// 		"left":randomY
// 	})

// }



function turnCursor(){ //function created between location of dot and cursor coordinate

	//location of dot, refers to random coordinates defined above in $(".dot").css({
	var dX= parseInt( $(".dot-one").css("left")) //the X coordinate of the dot, parseInt makes numbers
	var dY= parseInt( $(".dot-one").css("top")) //the Y coordinate of the dot, parseInt makes numbers

	// console.log("X:"+dX+" "+"Y:"+dY)

	//location of cursor, refers to the coordinates of the cursor as the mouse moves
	var pX = parseInt( $("#pointer").css("left")) //the X coordinate of the cursor, parseInt makes numbers
	var pY = parseInt( $("#pointer").css("top")) //the Y coordinate of the cursor, parseInt makes numbers

	// console.log("X:"+pX+" "+"Y:"+pY)

	var angle = Math.atan2 (dX-pX, pY-dY)*(180/Math.PI) //calculates the angle between dot and cursor
	

	$("#pointer").css({ //puts the variable in action, cursor rotates according to calculated angle
		"transform": "rotate("+angle+"deg)"

	})
}











































