mousePointer()

$("p,a").hide()
//www.w3schools.com/jquery/sel_multiple_sel.asp
//select multiple things at once

//www.w3schools.com/jquery/jquery_hide_show.asp
//hide and show elements

 $("h1")
 	.click(function(){
 		$("#one").show()
 	})

 $("#one")
 	.click(function(){
 		$("#two").show()
 	})

 $("#two")
 	.click(function(){
 		$("#three").show()
 	})

 $("#three")
 	.click(function(){
 		$("#four").show()
 	})

 $("#four")
 	.click(function(){
 		$("#five").show()
 	})

 $("#five")
 	.click(function(){
 		$("#six").show()
 	})

$("#six")
 	.click(function(){
 		$("#seven").show()
 	})

$("#seven")
 	.click(function(){
 		$("#eight").show()
 	})
  
 $("#eight")
 	.click(function(){
 		$("a").show()
 	})




function mousePointer (){

$("h1, p, a")
	.mouseenter(function(){
	 	$("body")
	 		.css("cursor", "pointer")
	 	})
 	.mouseleave(function(){
	 	$("body")
	 		.css("cursor", "default")
	 	})

}




