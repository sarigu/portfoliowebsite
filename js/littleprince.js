//menu variables
var burgermenu = document.querySelector("#burgermenu"); 
var sidenav = document.querySelector(".sidenav"); 
var closeBtn = document.querySelector(".closebtn");

//song variables
let littleprinceSong = document.querySelector("#littleprinceSong"); 
let hendrixSong = document.querySelector("#hendrixSong");

//video variables
let interaction1 = document.querySelector("#littleprinceInteraction1");
let interaction2 = document.querySelector("#littleprinceInteraction2");
let interaction3 = document.querySelector("#littleprinceInteraction3");
let interaction4 = document.querySelector("#littleprinceInteraction4");
let interaction5 = document.querySelector("#littleprinceInteraction5");


//menu methods
burgermenu.addEventListener("click", openNav); 
function openNav() {
    sidenav.style.width = "100%";
}

closeBtn.addEventListener("click", closeNav);
function closeNav(){
  sidenav.style.width = "0%";
}


//little prince page - song method
littleprinceSong.addEventListener("click", playSong);
function playSong(){
  hendrixSong.play(); 
}

//little prince page - inetraction videos methods
interaction1.addEventListener("click", startInteraction1); 
function startInteraction1(){
  interaction1.play(); 
}


interaction2.addEventListener("click", startInteraction2); 
function startInteraction2(){
  interaction2.play(); 
}


interaction3.addEventListener("click", startInteraction3); 
function startInteraction3(){
  interaction3.play(); 
}

interaction4.addEventListener("click", startInteraction4); 
function startInteraction4(){
  interaction4.play(); 
}

interaction5.addEventListener("click", startInteraction5); 
function startInteraction5(){
  interaction5.play(); 
}