const imagem = document.querySelector(".imagem")
const btnPrevious = document.querySelector("#previous")
const btnNext = document.querySelector("#next")
const imagens = ["img/imagem1.jpg", "img/imagem2.jpg", "img/imagem3.jpg", "img/imagem4.jpg" ];
let index = 0;
let intervalo;

function automatico(){
    clearInterval(intervalo)
    intervalo = setInterval(() => {
        index = index < 3 ? ++index : 0;
        imagem.src = imagens[index]
    }, 5000)
}

function previous(){
    clearInterval(intervalo)
    if (index > 0){
        imagem.src = imagens[--index];
    }
    else if (index === 0){
        index = 3;
        imagem.src = imagens[index];
    }
    automatico()
}

function next(){
    clearInterval(intervalo)
    if (index < 3){
        imagem.src = imagens[++index];
    }
    else if (index === 3){
        index = 0;
        imagem.src = imagens[index];
    }
    automatico()
}


btnPrevious.addEventListener("click", previous)
btnNext.addEventListener("click", next)



window.onload = automatico