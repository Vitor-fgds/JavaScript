const botao = document.querySelector(".botao");
const container = document.querySelector(".container");

document.addEventListener("onload", function(){
    alert("Seja bem vindo ao meu site!")
})


function criaParagrafo(){
    return document.createElement("p")
}

function conectaParagrafo(mensagem){
    const paragrafo = criaParagrafo();
    container.appendChild(paragrafo);
    paragrafo.innerHTML = mensagem;
}

botao.addEventListener("click", function(){
    let num1 = prompt("Digite o primeiro numero:");
    num1 = parseFloat(num1);
    mensagem = `Você digitou: ${num1}!<br>O dobro de ${num1} é ${num1 * 2}; <br>A metade de ${num1} é ${num1/2}.`
    conectaParagrafo(mensagem);
})