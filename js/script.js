let corazon1 = document.getElementById("corazon1");
let corazon2 = document.getElementById("corazon2");
let corazon3 = document.getElementById("corazon3");

console.log()

function quitarVida1(){
    corazon1.src = "img/liveDown.png";
}
function quitarVida2(){
  corazon2.src = "img/liveDown.png";
}
function quitarVida3(){
  corazon3.src = "img/liveDown.png";
}

corazon1.addEventListener("click", quitarVida1);
corazon2.addEventListener("click", quitarVida2);
corazon3.addEventListener("click", quitarVida3);
