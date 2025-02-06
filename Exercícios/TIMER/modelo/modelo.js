const timer = document.querySelector(".timer");
const inicio = document.querySelector("#iniciar");
const pausa = document.querySelector("#pausar");
const zera = document.querySelector("#zerar");
const relogio = new Date(1,0,1,0,0,0);

inicio.addEventListener("click", iniciar)
pausa.addEventListener("click", pausar)
zera.addEventListener("click", zerar)

let intervalo;

function iniciar(){
    timer.style.color = "black" // Define a cor para preto
    clearInterval(intervalo) // Limpa o intervalo antigo toda vez que o usuário clica em iniciar
   intervalo = setInterval(function(){
        relogio.setSeconds(relogio.getSeconds() + 1);
        timer.innerHTML = relogio.toLocaleTimeString()

    }, 1000)
}

function pausar(){
    clearInterval(intervalo) // Para a continuação do intervalo
    timer.innerHTML = relogio.toLocaleTimeString() // Printa o horário atual do relógio
    timer.style.color = "red"; // Muda a cor para vermelho
}

function zerar(){  // Reinicia os valores do timer para 00:00:00
    timer.style.color = "black"
    relogio.setHours(0);
    relogio.setMinutes(0);
    relogio.setSeconds(0);
    clearInterval(intervalo)
    timer.innerHTML = relogio.toLocaleTimeString();
}