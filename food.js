document.body.style.backgroundColor = prompt('background color?', 'green');

var mytext = "A Free Page To Help You With Healthy Food ";
var	p = 0;

 window.onload = function(){
	'use strict';
	var thetext = setInterval(function(){

	document.getElementById('move').innerHTML +=(mytext[p]);
		p = p + 1
		if(p > mytext.length - 1){
			clearInterval(thetext);
		}
		
	},100);
};
/************************************************************************************/
//Get slider items (Array.from) [ES6 feature] this will give an array better than do array and push things inside
let sliderimages = Array.from(document.querySelectorAll('.slider img'));
//Get Number of slides
let slidescount = sliderimages.length;
// slide that display first(current slide)
let currentslide = 1;
//slide number element
let slidenumelement = document.getElementById('slidenum');
//prev and next button
var prevbutton = document.getElementById('prev');
var nextbutton = document.getElementById('next');

//handle click on prev or next
prevbutton.onclick = prevslide;
nextbutton.onclick = nextslide;

//create ul element
var indicatorselement = document.createElement('ul');
//set id on ul element 
indicatorselement.setAttribute('id', 'indicators-ul');
//create li based on slidercount
for(var m = 1; m <= slidescount; m++ ){
	//create li
	var indicatorsitem = document.createElement('li');
	//set custom attr
	indicatorsitem.setAttribute('data-index', m);
	//set item content
	indicatorsitem.appendChild(document.createTextNode(m));
   //append li to ul
    indicatorselement.appendChild(indicatorsitem);
}
//add the the ul in my page
var myindicators = document.getElementById('indicators');
myindicators.appendChild(indicatorselement);
//get the new created ul
var createdul = document.getElementById('indicators-ul');
//get the indecators items
var indecatorsitemli = Array.from(document.querySelectorAll('#indicators-ul li'));
for(var i= 0; i<indecatorsitemli.length; i++){
	indecatorsitemli[i].onclick = function(){
		currentslide = this.getAttribute('data-index');
		thechecker();
	}
}
//start the checker function
thechecker();
//prev slide function
function prevslide() {
	if(prevbutton.classList.contains('disabled')){
		//nothing
	}else{
currentslide --;
thechecker();
	}}
//next slide function
 function nextslide() {
	if(nextbutton.classList.contains('disabled')){
		//nothing
	}else{
currentslide ++;
thechecker();
	}

 }


//create the checker function
function thechecker(){
	//set the slide num
	slidenumelement.textContent= 'slide '+ (currentslide)+' of '+ (slidescount);
	//remove all active classes
	removeallactive();

	//set active class on current slide
	sliderimages[currentslide -1].classList.add('active');

	//set active class on indicators item
	createdul.children[currentslide -1].classList.add('active');

	//check if current slide is the first
	if(currentslide == 1){
		// add disabled class on previous button
		prevbutton.classList.add('disabled');
	}else{
		prevbutton.classList.remove('disabled');
	}

//check if current slide is the last
   if(currentslide == slidescount){
	// add disabled class on next button
	nextbutton.classList.add('disabled');
}else{
	nextbutton.classList.remove('disabled');
}
}
//remove active classes from img and indicators
function removeallactive(){
sliderimages.forEach( function(img) {
	img.classList.remove('active');
	
});

indecatorsitemli.forEach( function(indict) {
	indict.classList.remove('active');	
});
}
/********************************************************************************/
// make images div change the img every 1500s
var theimages = document.querySelector('.images');
let imgarray = ["1.JPG", "2.JPG" ,"3.jpg", "4.jpg" ,"5.jpg"];
//change the url background
setInterval (() =>{
//get random img
let randomimg = Math.floor(Math.random()* imgarray.length);
theimages.style.backgroundImage = 'url('+ imgarray[randomimg]+')';
}, 1500);
//setting menu
var settingbutton = document.querySelector(".setting");
var themenu = document.querySelector(".menu");
settingbutton.onclick = function(){
	if(themenu.style.opacity == 0){
themenu.style.opacity =1;
	}else{
		themenu.style.opacity =0;
	}

}
/********************************************************************/
//setting color in menu
const colors = document.querySelectorAll('.firstset li');
let themain= document.querySelector('#move');
console.log(themain);
colors.forEach(li =>{
li.addEventListener("click", (e)=>{
 themain.style.setProperty('color', e.target.dataset.color)
});
});
//*******************************************************************/

let listimg = document.querySelector('#thebut');
let thismain = document.querySelector('.main_img');
let arrayofimg = ["1.JPG", "d.webp" ,"dd.webp", "3.jpg", "4.jpg", "5.jpg"];
listimg.addEventListener('click', (e)=>{
let randomi = Math.floor(Math.random() * arrayofimg.length);
thismain.style.backgroundImage = 'url('+ arrayofimg[randomi]+')';
}); 

//*******************************************************************/
var parent = document.querySelector(".model-parent");
var learnbutton = document.querySelector(".learn");
var xclick = document.querySelector(".x");

learnbutton.addEventListener('click', ()=>{
parent.style.display = "block"
});
xclick.addEventListener("click", ()=>{
parent.style.display = "none";
//all.style.filter = "blur(0px)"; 
});
parent.addEventListener("click", ()=>{
	parent.style.display = "none";
});

