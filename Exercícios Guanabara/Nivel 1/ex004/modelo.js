const botao = document.querySelector(".botao");
const container = document.querySelector(".container")

function criaParagrafo(){
    return document.createElement("p")
}

function conectaParagrafo(mensagem){
    const paragrafo = criaParagrafo();
    container.appendChild(paragrafo);
    paragrafo.innerHTML = mensagem;
}

botao.addEventListener("click", function(){
    const mensagem = prompt("Digite o que você deseja escrever no parágrafo: ")
    conectaParagrafo(mensagem);
})