"use strict";
window.onload = function (){
	var body = document.getElementsByTagName("body");
	console.log(body);
	
	document.getElementById("boundary1").addEventListener("mouseover",mouseOver);
	//document.getElementById("boundary1").addEventListener("mouseout", mouseOut);
		
	function mouseOver(){
		document.getElementById("boundary1").classList.add("youlose");
	}
	
	
};