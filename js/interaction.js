//menu variables
var burgermenu = document.querySelector("#burgermenu"); 
var sidenav = document.querySelector(".sidenav"); 
var closeBtn = document.querySelector(".closebtn"); 

//about me page - video variables
var hamburgVid = document.querySelector("#eastereggHamburg"); 
var educationVid = document.querySelector("#eastereggEducation"); 
var workVid = document.querySelector("#eastereggWork"); 
var hobbiesVid = document.querySelector("#eastereggHobbies"); 

//menu methods
burgermenu.addEventListener("click", openNav); 
function openNav() {
    sidenav.style.width = "100%";
}

closeBtn.addEventListener("click", closeNav);
function closeNav(){
  sidenav.style.width = "0%";
}

//video methods
hamburgVid.addEventListener("mouseover", startEasteregg1); 
function startEasteregg1(){
  hamburgVid.play(); 
}

educationVid.addEventListener("mouseover", startEasteregg2);
function startEasteregg2(){
  educationVid.play(); 
}

workVid.addEventListener("mouseover", startEasteregg3); 
function startEasteregg3(){
  workVid.play();
}

hobbiesVid.addEventListener("mouseover", startEasteregg4); 
function startEasteregg4(){
  hobbiesVid.play(); 
}
