const botao = document.querySelector(".botao");
const container = document.querySelector(".container");

botao.addEventListener("click", function(){
let paragrafo = document.createElement("p");
container.appendChild(paragrafo);
paragrafo = container.querySelector("p")
let num = prompt("Digite um número: ");
num = parseFloat(num);
paragrafo.innerHTML = `O número a ser analisado aqui será ${num} <hr>`
paragrafo.innerHTML += `O seu valor absoluto é ${Math.abs(num)} <br>`
paragrafo.innerHTML += `O valor inteiro mais próximo é ${Math.round(num)} <br>`
paragrafo.innerHTML += `A sua raiz quadrada é ${Math.sqrt(num)} <br>`
paragrafo.innerHTML += `A sua raiz cubica é ${num ** (1/3)} <br>`
paragrafo.innerHTML += `O valor de ${num}² é ${Math.pow(num, 2)} <br>`
paragrafo.innerHTML += `O valor de ${num}³ é ${Math.pow(num, 3)}<br>`})




