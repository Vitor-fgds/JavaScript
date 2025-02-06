const botao = document.querySelector(".botao");
const container = document.querySelector(".container");

function criaParagrafo(){
    return document.createElement("p")
}

function conectaParagrafo(mensagem){
    const paragrafo = criaParagrafo();
    container.appendChild(paragrafo);
    paragrafo.innerHTML = mensagem;
}

function soma(num1, num2){
    return num1 + num2;
}

botao.addEventListener("click", function(){
    let num1 = prompt("Digite o primeiro numero:");
    num1 = parseFloat(num1);
    let num2 = prompt("Digite o segundo numero: ")
    num2 = parseFloat(num2);
    const somatorio = soma(num1, num2);
    const mensagem = `${num1} + ${num2} = ${somatorio} `;
    conectaParagrafo(mensagem);
    
})