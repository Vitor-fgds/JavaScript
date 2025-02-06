const botao1 = document.querySelector(".botao1");
const botao2 = document.querySelector(".botao2");
const botao3 = document.querySelector(".botao3");
const botao4 = document.querySelector(".botao4");
const container = document.querySelector(".container");

let paragrafo;

paragrafo = document.createElement("p");
container.appendChild(paragrafo);
paragrafo = container.querySelector("p");

botao1.addEventListener("click", function(){
    const mensagem = `Você clicou no botão 1 <br>`;
    paragrafo.innerHTML += mensagem;
})

botao2.addEventListener("click", function(){
    const mensagem = `Você clicou no botão 2 <br>`;
    paragrafo.innerHTML += mensagem;
})

botao3.addEventListener("click", function(){
    const mensagem = `Você clicou no botão 3 <br>`;
    paragrafo.innerHTML += mensagem;
})

botao4.addEventListener("click", function(){
    const mensagem = `Você clicou no botão 4 <br>`;
    paragrafo.innerHTML += mensagem;
})