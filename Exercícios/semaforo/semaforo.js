const semaforo = document.querySelector("#semaforo")
const btnVerde = document.querySelector("#verde")
const btnAmarelo = document.querySelector("#amarelo")
const btnVermelho = document.querySelector("#vermelho")
const btnAutomatico = document.querySelector("#automatico")


let intervalo;
let index = 0

btnVerde.addEventListener("click", () => {
    clearInterval(intervalo);
    verde()
})

btnAmarelo.addEventListener("click", () => {
    clearInterval(intervalo);
    amarelo()
})

btnVermelho.addEventListener("click", () => {
    clearInterval(intervalo);
    vermelho()
})
btnAutomatico.addEventListener("click", automatico)

function verde(){
    semaforo.removeAttribute("src");
    semaforo.setAttribute("src", "img/verde.png");
    index = 2
}

function amarelo(){
    semaforo.removeAttribute("src");
    semaforo.setAttribute("src", "img/amarelo.png");
    index = 1

}

function vermelho(){
    semaforo.removeAttribute("src");
    semaforo.setAttribute("src", "img/vermelho.png");
    index = 0

}

function automatico(){
    clearInterval(intervalo)
    const imagens = ["img/vermelho.png", "img/amarelo.png", "img/verde.png"]
    semaforo.src = imagens[index];
    
    intervalo = setInterval(() => {
        index = index < 2 ? ++index : 0;
        semaforo.src = imagens[index];
    }, 5000)
        
}