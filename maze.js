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
	/*var winner = true;
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
	}*/
	
	//exercise 5 
	/*var winner = true;
	document.getElementById("start").addEventListener("click",mouseClick);
	document.getElementById("end").addEventListener("mouseover",MouseOverE);
	
	
	function MouseOverBoundary(){
		winner=true; 
		document.getElementById("status").textContent ="Awwww, you lost. Try again!!";
		var boundaries = document.querySelectorAll("div.boundary");
		for (var i=0; i<boundaries.length; i++){
			boundaries[i].classList.add("youlose");
		}
	}
	
	function mouseClick(){
		winner=false;
		document.getElementById("status").textContent= "Continue to the end";
		var boundaries = document.querySelectorAll("div.boundary");
		for(var i=0; i<boundaries.length; i++){
			boundaries[i].classList.remove("youlose");
		}
	 }
	 
	function MouseOverE(){
		if(!winner){
			document.getElementById("status").textContent = ("You won! Awesome");
		}
	}*/
	
	// exercise 6 
	
	var winner = true;
	document.getElementById("start").addEventListener("click",mouseClick);
	document.getElementById("end").addEventListener("mouseover",MouseOverE);
	document.getElementById("maze").addEventListener("mouseleave",mouseLeave);
	
	function MouseOverBoundary(){
		winner=true; 
		document.getElementById("status").textContent ="Awwww, you lost. Try again!!";
		var boundaries = document.querySelectorAll("div.boundary");
		for (var i=0; i<boundaries.length; i++){
			boundaries[i].classList.add("youlose");
		}
	}
	
	function mouseClick(){
		winner=false;
		document.getElementById("status").textContent= "Continue to the end";
		var boundaries = document.querySelectorAll("div.boundary");
		for(var i=0; i<boundaries.length; i++){
			boundaries[i].classList.remove("youlose");
		}
	 }
	 
	function mouseLeave(){
		winner=true;
		document.getElementById("status").textContent="You are caught cheating, You lost!";
		var boundaries = document.querySelectorAll("div.boundary");
		for(var i=0; i<boundaries.length; i++){
			boundaries[i].classList.add("youlose");
		}
	}
	
	function MouseOverE(){
		if(!winner){
			document.getElementById("status").textContent = ("You won! Awesome");
		}
	}
	
};
