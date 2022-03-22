let body = document.querySelector("body");
let divLamp=document.createElement("div");
let divInt=document.createElement("div");
let main = document.querySelector("main")
var audio = new Audio();
audio.src = "soundEffect/tik.mp3"

var interruptor=document.createElement('img');
interruptor.src="images/interruptor.png";
var lamp=document.createElement('img');
lamp.src="./images/off.png";

body.appendChild(main);
main.appendChild(divLamp);
main.appendChild(divInt);

divLamp.appendChild(lamp);
divLamp.setAttribute("id","divLamp")
lamp.setAttribute("id","lamp")
divInt.appendChild(interruptor);
divInt.setAttribute("id","interruptorDiv")
interruptor.setAttribute("id","interruptor")
document.getElementById("lamp").style.transform = "rotate(180deg)"; 

interruptor.onclick = function ligar(){
    if(lamp.src.match("off")){
    document.getElementById("interruptor").style.transform = "rotate(180deg)";    
    document.getElementById("lamp").src="images/on.png";
    audio.play();
    document.body.style.backgroundImage = "url(images/darkroom1.jpg)";
    }
    else {
        document.getElementById("lamp").src="images/off.png"
        document.getElementById("interruptor").style.transform = "rotate(360deg)"; 
        audio.play();
        document.body.style.backgroundImage = "url(images/darkroom.jpg)";
    }
}





// interruptor.onclick = function(){

//     if(interruptor.src.match("on")){
//         document.getElementById(interruptor.src="images/switchoff.png");
//         document.getElementById(lamp.src="images/lampadaoff.png");
//         document.body.style.backgroundColor = "white";
//     }else{
//         document.getElementById(lamp.src="images/lampadaon.png");
//         document.getElementById(interruptor.src="images/switchon.png");
//         document.body.style.backgroundColor = "yellow";
//     }
// }