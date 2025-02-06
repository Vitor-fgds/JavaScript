const input = require("prompt-sync")();

const numeros = parseFloat(input());
const entrada = input();
const array = entrada.split(" ");
let array_numeros = [];
for (let i = 0; i < numeros; i++){
    array_numeros.push(parseFloat(array[i]))
}

let m2 = 0, m3 = 0, m4 = 0, m5 = 0;

for (valor of array_numeros){
    if (valor%2 === 0){
        m2 +=1;
    }
    if (valor%3 === 0){
        m3 +=1;
    }
    if (valor%4 === 0){
        m4 +=1;
    }
    if (valor%5 === 0){
        m5 +=1;
    }
}

console.log(`${m2} Multiplos (s) de 2`);
console.log(`${m3} Multiplos (s) de 3`);
console.log(`${m4} Multiplos (s) de 4`);
console.log(`${m5} Multiplos (s) de 5`);