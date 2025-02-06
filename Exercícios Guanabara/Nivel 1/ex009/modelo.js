const contador = document.querySelector(".contador")
const zerador = document.querySelector(".zerador")
const container = document.querySelector(".container")

let clicks = 0;

let paragrafo = document.createElement("p");
container.appendChild(paragrafo)
paragrafo = container.querySelector("p")



contador.addEventListener("click", function(){
    clicks += 1;
    paragrafo.innerHTML = `O número de clicks é: ${clicks}`

})

zerador.addEventListener("click", function(){
    clicks = 0;
    paragrafo.innerHTML = ``;
})