const lampada = document.querySelector("#lampada")
const btnLigar = document.querySelector("#ligar")
const btnDesligar = document.querySelector("#desligar")
const div = document.querySelector(".imagem")

let quebrada = false

btnLigar.addEventListener("click", ligar)
btnDesligar.addEventListener("click", desligar)
lampada.addEventListener("mouseover", ligar);
lampada.addEventListener("mouseout", desligar);
div.addEventListener("dblclick", quebrar)

function ligar(){
    if (quebrada === true){return}
    lampada.removeAttribute("src");
    lampada.setAttribute("src", "img/ligada.jpg")
}

function desligar(){
    if (quebrada === true){return}
    lampada.removeAttribute("src");
    lampada.setAttribute("src", "img/desligada.jpg")
}

function quebrar(){
    quebrada = true;
    lampada.removeAttribute("src");
    lampada.setAttribute("src", "img/quebrada.jpg")
}