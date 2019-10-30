
$(document).mousemove(function(e){ //makes the pointer follow the mouse
	$("#pointer").css({
		left:(e.pageX),
		top:(e.pageY)
	})
	//www.youtube.com/watch?v=r3I04RXsvYA
	//follow mouse around

	turnCursor () //function is placed inside the mousemove event, so it happens everytime the mouse moves


})


moveRenegadeDot() //calls function
	

$(".renegade-dot").mouseenter(function() { //when mouse hovers over dot, the following functions are activated
	
	moveRenegadeDot()
	addDot()
	$(document).mousemove(function(e){ //dot follows mouse

		$(".follower-dot")
		.css({ //selects the dot, then assigns coordinates to it's css (that follow the mouse)
		left:(e.pageX),
		top:(e.pageY)
		})
		.css("background-color", "white")
		
	})
})


function moveRenegadeDot (){ //creating a function that randomizes dot position
	var randomX = Math.floor(Math.random()* $(window).width()) //creates random number for an X coordinate
	var randomY = Math.floor(Math.random()* $(window).height()) //creates random number for a Ycoordinate

	$(".renegade-dot").css({ 
		"left":randomX, //defines the random X coordinate of dot
		"top":randomY //defines the random Y coordinate of dot
	})

}




function addDot (id,marginLeft, marginTop, rTransition){
	var marginLeft =  (Math.floor(Math.random()* 20)+1) *5; //creates random number for an X coordinate
	var marginTop =  (Math.floor(Math.random()* 20)+1) *5; //creates random number for an Y coordinate
	var rTransition = (Math.random() + "s") //creates random number between 0 and 1 for a transition length
	
	//www.w3schools.com/js/js_random.asp

	//stackoverflow.com/questions/49849299/jquery-letters-fade-in-randomly
	// how to define the number as seconds: + "s"


	$("<div></div>") //creates a new div
	.addClass("follower-dot") //adds class to the div
	.attr("id",id)
	.css({
		"margin-left":marginLeft,
		"margin-top":marginTop,
		"transition":rTransition
		
	})
	.appendTo("body") //adds div to the page
	}
	


function turnCursor(){ //function created between location of dot and cursor coordinate

	//location of dot, refers to random coordinates defined above in $(".dot").css({
	var dX= parseInt( $(".renegade-dot").css("left")) //the X coordinate of the dot, parseInt makes numbers
	var dY= parseInt( $(".renegade-dot").css("top")) //the Y coordinate of the dot, parseInt makes numbers

	// console.log("X:"+dX+" "+"Y:"+dY)

	//location of cursor, refers to the coordinates of the cursor as the mouse moves
	var pX = parseInt( $("#pointer").css("left")) //the X coordinate of the cursor, parseInt makes numbers
	var pY = parseInt( $("#pointer").css("top")) //the Y coordinate of the cursor, parseInt makes numbers

	// console.log("X:"+pX+" "+"Y:"+pY)

	var angle = Math.atan2 (dX-pX, pY-dY)*(180/Math.PI) //calculates the angle between dot and cursor
	

	$("#pointer").css({ //puts the variable in action, cursor rotates according to calculated angle
		"transform": "rotate("+angle+"deg)"

	})

	//stackoverflow.com/questions/15653801/rotating-object-to-face-mouse-pointer-on-mousemove/15654454
	//formula for the turning angle
}













































