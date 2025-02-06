const input = require("prompt-sync")();

const entrada = input();
const array_entrada = entrada.split(" ");
const abas_iniciais = parseFloat(array_entrada[0])
const acoes = parseFloat(array_entrada[1])

let abasAbertas = abas_iniciais;

for (let i = 0; i < acoes; i++){
    let acao = input();
    if (acao === "fechou"){
        abasAbertas += 1;
    }
    else if (acao === "clicou"){
        abasAbertas -= 1;
    }

}

console.log(abasAbertas)