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
	}
	
	/*function MouseOverBoundary(){
		var boundaries = document.querySelectorAll("div.boundary");
		for (var i=0; i<boundaries.length; i++){
			boundaries[i].classList.add("youlose");
		}
	}*/
	
	//exercise 3 
	/*var winner = true;
	document.getElementById("start").addEventListener("mouseover",MouseOverS);
	document.getElementById("end").addEventListener("mouseover",MouseOverE);	
	
	function MouseOverBoundary(){
		winner=true; 
		var boundaries = document.querySelectorAll("div.boundary");
		for (var i=0; i<boundaries.length; i++){
			boundaries[i].classList.add("youlose");
		}
	}
	
	function MouseOverS(){
		winner = false;
		var boundaries = document.querySelectorAll("div.boundary");
		for(var i=0; i<boundaries.length; i++){
			boundaries[i].classList.remove("youlose");
		
		}
	}
	
	function MouseOverE(){
		if(winner){
			alert("Awwww, you lost. Try again!");
		}else{
			alert("You won! Awesome");
		}
		
	}*/
	
	//exercise 4 
	var winner = true;
	document.getElementById("start").addEventListener("click",mouseClick);
	document.getElementById("end").addEventListener("mouseover",MouseOverE);	
	
	function MouseOverBoundary(){
		winner=true; 
		var boundaries = document.querySelectorAll("div.boundary");
		for (var i=0; i<boundaries.length; i++){
			boundaries[i].classList.add("youlose");
		}
	}
	
	 function mouseClick(){
		 winner=false;
		var boundaries = document.querySelectorAll("div.boundary");
		for(var i=0; i<boundaries.length; i++){
			boundaries[i].classList.remove("youlose");
		}
	 }
	 
	function MouseOverE(){
		if(winner){
			alert("Awwww, you lost. Try again!");
		}else{
			alert("You won! Awesome");
		}
	}
	
	
	
};
