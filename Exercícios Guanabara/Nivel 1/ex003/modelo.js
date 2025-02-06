const botao = document.querySelector(".botao");
botao.addEventListener("click", function(){
    const nome = prompt("Digite o seu nome: ");
    alert(`Olá ${nome}, é um prazer te conhecer!`)
})