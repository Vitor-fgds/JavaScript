const botao = document.querySelector(".botao");
const container = document.querySelector(".container");

function criaParagrafo(){
    return document.createElement("p")
}

function adicionaParagrafo(){
    const paragrafo = criaParagrafo();
    container.appendChild(paragrafo);
}

function selecionaParagrafo(){
    return container.querySelector("p");
}

function adicionaMensagem(mensagem){
    const paragrafo = selecionaParagrafo();
    paragrafo.innerHTML = mensagem;
}

botao.addEventListener("click", function(){
    adicionaParagrafo();
    const nome = prompt("Qual o nome do aluno?");
    let nota1 = prompt(`Qual a nota de ${nome} na prova 1:`)
    nota1 = parseFloat(nota1);
    let nota2 = prompt(`Qual a nota de ${nome} na prova 2:`)
    nota2 = parseFloat(nota2)
    mensagem = `Calculando a média final de ${nome} <br> As notas obtidas foram ${nota1} e ${nota2} <br> A média final será ${(nota1+ nota2) / 2}`
    adicionaMensagem(mensagem);
})