"use strict";

var mouseX = 0;
var mouseclick = false;

var pages = 	["accueil",	"projets",	"musique",	"apropos",	"contact"];
var pagesCooX = [0, 		-100/4, 	-200/4, 	-300/4, 	-300/4];
var pagesCooY = [0, 		0, 			0, 			0, 			-100];
var oldPage = 0;
var currentPage = 0;
var value = 0;

var toggleVideo = false;

var videos = [	"//www.youtube.com/embed/XJg-pZTHPwQ",
				"//www.youtube.com/embed/VTzBPLVKt-Y",
				"//www.youtube.com/embed/xxbOrjFJpE0"];
var videosTitles = ["Black Cab Society - Steve Mc Queen",
					"Black Cab Society - Get Together",
					"Black Cab Society - In the City"]
var currentVideo = 0;

///////////////////////////////////////////CHANGER PAGE///////////////////////////////////// 


function toPage(index){

	if(index < 0) index = 0;
	if(index > 4) index = 4;

	oldPage = currentPage;
	currentPage = index;

	var wrap = document.getElementById("horizon");

	if(oldPage == currentPage){
		var transform = 'translate('+pagesCooX[currentPage]+'%,'+pagesCooY[currentPage]+'%)';
		wrap.style.MozTransform = transform;
		wrap.style.WebkitTransform = transform;
		wrap.style.OTransform = transform;
		wrap.style.msTransform = transform;
		wrap.style.transform = transform;
		return;
	}

	if(oldPage != 4 || currentPage != 4){
		var transform = 'translateX('+pagesCooX[currentPage]+'%)';
		wrap.style.MozTransform = transform;
		wrap.style.WebkitTransform = transform;
		wrap.style.OTransform = transform;
		wrap.style.msTransform = transform;
		wrap.style.transform = transform;
	}

	if(currentPage == 4){
		var transform = 'translateX('+pagesCooX[currentPage]+'%)';
		wrap.style.MozTransform = transform;
		wrap.style.WebkitTransform = transform;
		wrap.style.OTransform = transform;
		wrap.style.msTransform = transform;
		wrap.style.transform = transform;

		setTimeout(function(){
			var transform = 'translate('+pagesCooX[currentPage]+'%,'+pagesCooY[currentPage]+'%)';
			wrap.style.MozTransform = transform;
			wrap.style.WebkitTransform = transform;
			wrap.style.OTransform = transform;
			wrap.style.msTransform = transform;
			wrap.style.transform = transform;
		}, 500);
	}
	else if(oldPage == 4){
		var transform = 'translate('+pagesCooX[3]+'%,'+pagesCooY[currentPage]+'%)';
		wrap.style.MozTransform = transform;
		wrap.style.WebkitTransform = transform;
		wrap.style.OTransform = transform;
		wrap.style.msTransform = transform;
		wrap.style.transform = transform;

		setTimeout(function(){
			var transform = 'translateX('+pagesCooX[currentPage]+'%)';
			wrap.style.MozTransform = transform;
			wrap.style.WebkitTransform = transform;
			wrap.style.OTransform = transform;
			wrap.style.msTransform = transform;
			wrap.style.transform = transform;
		}, 500);
	}
	moveMenu();
	allowArrows();
}

function changePage(how){
	toPage(currentPage+how);
}

function allowArrows(){
	if(currentPage == 0){
		document.getElementById('flecheL').style.display = "none";
	}

	else if(currentPage == 4){
		document.getElementById('flecheL').style.display = "none";
		document.getElementById('flecheR').style.display = "none";
	}
	else{
		document.getElementById('flecheL').style.display = "block";
		document.getElementById('flecheR').style.display = "block";
	}

/*	if(currentPage == 2 || currentPage == 3 || currentPage == 4){
		document.getElementById('flecheL').backgroundImage = 'url("../img/flecheL2.png")';
		document.getElementById('flecheR').backgroundImage = 'url("../img/fleche2.png")';
	}
	else{
		document.getElementById('flecheL').backgroundImage = 'url("../img/flecheL.png")';
		document.getElementById('flecheR').backgroundImage = 'url("../img/fleche.png")';
	}*/

}

function moveMenu(){
	if(currentPage < oldPage){
		var newPos = document.getElementById(pages[currentPage]).offsetLeft;
		
		var newWidth = document.getElementById(pages[currentPage]).offsetWidth;

		var lineWidth = ((document.getElementById(pages[oldPage]).offsetLeft + document.getElementById(pages[oldPage]).offsetWidth) - newPos);

		var border = document.getElementById('border');
		border.style.width = lineWidth+'px';
		var transform = 'translateX('+newPos+'px)';
		border.style.MozTransform = transform;
		border.style.WebkitTransform = transform;
		border.style.OTransform = transform;
		border.style.msTransform = transform;
		border.style.transform = transform;
		setTimeout(function(){
			border.style.width = newWidth+'px';
		},500);
	}
	else if(currentPage > oldPage){
		var newPos = document.getElementById(pages[currentPage]).offsetLeft;
		var newWidth = document.getElementById(pages[currentPage]).offsetWidth;
		var lineWidth = newPos - document.getElementById(pages[oldPage]).offsetLeft + newWidth;

		var border = document.getElementById('border');
		border.style.width = lineWidth+'px';
		setTimeout(function(){
			var transform = 'translateX('+newPos+'px)';
			border.style.MozTransform = transform;
			border.style.WebkitTransform = transform;
			border.style.OTransform = transform;
			border.style.msTransform = transform;
			border.style.transform = transform;

			border.style.width = newWidth+'px';
		},500);
	}
}


/////////////////////////////////////////////DRAG POUR DÉPLACER///////////////////////////////////////////
window.onmousemove = function(event){
	if(mouseclick){
		value = pagesCooX[currentPage] - ((mouseX - event.pageX)*20/window.innerWidth);
		var wrap = document.getElementById("horizon");
		var transform = 'translate('+value+'%,0)';
		wrap.style.MozTransform = transform;
		wrap.style.WebkitTransform = transform;
		wrap.style.OTransform = transform;
		wrap.style.msTransform = transform;
		wrap.style.transform = transform;
	}
}

window.onmousedown = function(event){
	mouseX = event.pageX;
	mouseclick = true;
	var wrap = document.getElementById("horizon");
	wrap.style.transition="all 0";
	value = pagesCooX[currentPage];
}

window.onmouseup = function(event){
	var wrap = document.getElementById("horizon");
	wrap.style.transition="all 0.5s ease-in-out";
	mouseclick = false;
	
	if(value - pagesCooX[currentPage] < -3){	
		toPage(currentPage+1);
	}
	else if(value - pagesCooX[currentPage] > 3){
		toPage(currentPage-1);
	}
	else{
		toPage(currentPage);
	}
	value = pagesCooX[currentPage];
}

////////////////////////////////////////////////NAVIGATION CLAVIER//////////////////////////////////////

document.onkeydown = function(evt) {
    evt = evt || window.event;
    switch (evt.keyCode) {
        case 37:
        case 38:
          	toPage(currentPage-1);
        break;
        case 39:
        case 40:
        	toPage(currentPage+1);
        break;
    }
}

///////////////////////////////////////////////////////PROJETS///////////////////////////////////////////



/////////////////////////////////////////////////////MUSIQUE/////////////////////////////////////////////////

function audioVideo(){
	toggleVideo = !toggleVideo;

	if(toggleVideo){
		document.getElementById('mvideo').style.display = 'none';
		document.getElementById('maudio').style.display = 'block';
	}
	else{
		document.getElementById('mvideo').style.display = 'block';
		document.getElementById('maudio').style.display = 'none';
	}
}


function videoManager(value){
	currentVideo += value;
	if(currentVideo < 0)
		currentVideo = 2;
	else if(currentVideo > 2)
		currentVideo = 0;

	$('#mvideo h3').text(videosTitles[currentVideo]);
	document.getElementById('movie').src = videos[currentVideo];
}