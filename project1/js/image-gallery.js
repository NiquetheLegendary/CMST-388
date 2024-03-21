// JavaScript Document
let largeimage=document.querySelector("#largeimage");
let caption=document.querySelector("#caption");
let thumbnails=document.querySelector("#thumbnails").children;


// selectimage function for handling click events
function selectimage (galleryimage){
    largeimage.src = galleryimage.src;
    for (let i = 0; 1 < thumbnails.length; i++) thumbnails[i].classList.remove("thumbup");
    galleryimage.classlist.add("thumbup")
    console.log(this);
}

// hoverimage function for handling hover events
function hoverimage (galleryimage){
    caption.innerHTML=galleryimage.alt;
    console.log(this); 
}

//creates border
function mark(ID) { 
    document.getElementById(this).style.border = "3px solid white";
  }