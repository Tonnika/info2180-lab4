"use strict";
window.onload = function (){
	var body = document.getElementsByTagName("body");
	console.log(body);
	//exercise 1 
	/*document.getElementById("boundary1").addEventListener("mouseover",mouseOver);
		
	function mouseOver(){
		document.getElementById("boundary1").classList.add("youlose");
	}*/
	
	
	// exercise 2 
	
	var boundaries = document.querySelectorAll("div.boundary");
	for(var i=0; i<boundaries.length; i++){
		boundaries[i].addEventListener("mouseover",MouseOverBoundary);
		//boundaries[i].classList.add("youlose");
		//function MouseOverBoundary(){
			//this.classList.add("youlose");
		
	}
	
	function MouseOverBoundary(){
		var boundaries = document.querySelectorAll("div.boundary");
		for (var i=0; i<boundaries.length; i++){
			boundaries[i].classList.add("youlose");
		}
	}
	
	

	
};
