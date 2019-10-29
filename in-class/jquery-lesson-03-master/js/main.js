var students = ["Lina", "Karlo", "Sophia", "Adrienne", "Yasmin", "Katherine", "Oleg", "Jaywhy", "Mikayla", "Siwoo", "Justine", "Andrea", "Kyle", "Alleesa", "Oanh", "Sabrina", "Jillian", "Allison", "Cole", "Christine"]
var rS = Math.floor(Math.random()*students.length)
// console.log(students[rS])

console.log (randomColor ())


var i = 0;
while (i < students.length) {
	// console.log(students[i])
	$("<div class ='greeting'></div>")
		.attr("id",students [i])
		.text("Hello, "+students[i]+"!")
		.appendTo("body")
		.css ({
			"background":randomColor()
		})
		.draggable()
		.click(function(){
			moveRandomly($(this).attr("id"))
			$(this).css("background",randomColor())
		})


	i = i+1;

}

// $(document).click(function(){

// moveRandomly()

// })




$(document).keydown(function(eventInfo){
	if(eventInfo.keyCode == 74) {
		alert("you pressed j")
	}
	else if (eventInfo.keyCode == 13) {
		$("body").empty()
	}
})


function moveRandomly (studentID){
	var randomX = Math.floor(Math.random()* $(window).width())
	var randomY = Math.floor(Math.random()* $(window).height())


	// console.log(randomX)
	// console.log(randomY)

$("#"+studentID).css({
	"position":"fixed",
	"top":randomY,
	"left":randomX,
})

}


function randomColor (){


	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	// console.log(r)
	// console.log(g)
	// console.log(b)

	var rgb = "rgb("+r+","+b+","+g+")";

	return rgb;
}















