const input = require("prompt-sync")();

const entrada = input("Digite uma sequência de números: ");

function descendingOrder(n){
    let array = n.toString().split("")
    let numerosOrdenados = ""
    array = array.sort();
    array = array.reverse();
    for (let i = 0; i < array.length; i++){
        numerosOrdenados += array[i];
    }
    numerosOrdenados = parseFloat(numerosOrdenados)
    return numerosOrdenados;
}

console.log(descendingOrder(entrada))