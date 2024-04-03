// JavaScript Document


let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");

let imageCaption = document.getElementById("caption");

let lrgImg = document.getElementById("largeImage");

function changeImg(){
    var imgSrc = this.getAttribute("src");
    var imgCaption = this.getAttribute("alt");
    lrgImg.setAttribute("src", imgSrc);
    imageCaption.innerHTML = imgCaption;
};

function showCaption(){
    var imgCaption = this.getAttribute("alt");
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "newDiv");
    newDiv.innerHTML = imgCaption;  
    this.after(newDiv);
};

function hideCaption(){
    var newDiv = document.querySelector(".newDiv");
    newDiv.remove();
};

function addBorder(){
    for (i = 1; i < 6; i++){
        var currentImg = document.getElementById("img" + i);
        currentImg.setAttribute("class", "thumb");
    } 
    this.setAttribute("class", "active-image");
};

for (i = 1; i < 6; i++){
    var currentImg = document.getElementById("img" + i);
    currentImg.addEventListener("click", changeImg);
    currentImg.addEventListener("click", addBorder);
    currentImg.addEventListener("mouseover", showCaption);
    currentImg.addEventListener("mouseout", hideCaption);
}
    

