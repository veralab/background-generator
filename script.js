var css = document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var color3= document.querySelector(".color3");
var body = document.getElementById("gradient");


function inputColors(){
color1=css.textContent(body.style.background + ";");
}

function GradientSwitch() {
  body.style.background = 
  "linear-gradient(to right, " + color1.value + ", " + color2.value + "," + color3.value + ")";

  css.textContent = body.style.background + ";";
}; 

color1.addEventListener("input", GradientSwitch);
color2.addEventListener("input", GradientSwitch);
color3.addEventListener("input", GradientSwitch);

// linear-gradient(to right, rgb(122, 255, 253), rgb(145, 131, 136), rgb(255, 140, 118));