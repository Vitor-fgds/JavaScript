

function validadorCpf(cpf){
 if (cpf.length > 14) {return false};
let somaTotal = 0;
let numerosCpf = cpf.replace(/\D+/g, "");
 numerosCpf = numerosCpf.slice(0, -2)
 if (numerosCpf === numerosCpf[0].repeat(numerosCpf.length)) {return false}
 numerosCpf = numerosCpf.split("");

 for (let i = 0; i < numerosCpf.length; i++){
    numerosCpf[i] = parseInt(numerosCpf[i])
 }

for (let i = 0, j = 10; i < numerosCpf.length; i++, j--){
    somaTotal += j * numerosCpf[i]
}

let primeiroDigito = 11 - (somaTotal % 11)
if (primeiroDigito > 9){
    primeiroDigito = 0;
}
numerosCpf.push(primeiroDigito);
somaTotal = 0
for (let i = 0, j = 11; i < numerosCpf.length; i++, j--){
    somaTotal += j * numerosCpf[i]
}

let segundoDigito = 11 - (somaTotal % 11);
if (segundoDigito > 9){
    segundoDigito = 0
}

if (primeiroDigito.toString() + segundoDigito.toString() === cpf.slice(-2)){
    return true;
}
else{
    return false;
}
}


console.log(validadorCpf("705.484.450-52"))
console.log(validadorCpf("882.731.250-17"))
console.log(validadorCpf("044.092.450-23"))
console.log(validadorCpf("194.987.120-77"))
console.log(validadorCpf("246.315.940-55"))
console.log(validadorCpf("111.111.111-11"))
