
function validadorCpf(cpf){
let numerosCpf = cpf.replace(/\D+/g, "");
 if (numerosCpf.length !== 11) {return false};
 if (numerosCpf === numerosCpf[0].repeat(numerosCpf.length)) {return false}
 const cpfParcial = numerosCpf.slice(0, -2)
 let cpfArray = cpfParcial.split("");

const primeiroDigito = criaDigito(cpfArray);
cpfArray.push(primeiroDigito)
const segundoDigito = criaDigito(cpfArray);

if (primeiroDigito + segundoDigito === numerosCpf.slice(-2)){
    return true;
}
else{
    return false;
}
}

function criaDigito(array){
    let somaTotal = 0;
    for (let i = 0, j = (array.length + 1); i < array.length; i++, j--){
        somaTotal += j * Number(array[i])
    }

    let digito = 11 - (somaTotal % 11);
    return digito > 9 ? "0" : String(digito)

}

