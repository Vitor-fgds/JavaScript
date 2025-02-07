function cpfParcial(){
    let cpfParcial = "";
    for (let i = 0; i < 9; i++){
        let numero = (Math.round((Math.random() * (9-0)+ 0))).toString()
        cpfParcial += numero
    }

    return cpfParcial
}

function criaDigito(array){
    let somaTotal = 0;
    for (let i=0, j = array.length + 1; i<array.length; i++, j--){
        somaTotal += j * Number(array[i]);
    }

    let digito = 11 - (somaTotal % 11);
    return digito > 9 ? "0" : String(digito);
}

function formataCPF(cpf){
    return `${cpf.slice(0,3)}.${cpf.slice(3,6)}.${cpf.slice(6,9)}-${cpf.slice(-2)}`
}

function geraCPF(){
    let cpfIncompleto = cpfParcial();
    let cpfArray = cpfIncompleto.split("");
    const digito1 = criaDigito(cpfArray);
    cpfArray.push(digito1);
    const digito2 = criaDigito(cpfArray);
    const cpf = cpfIncompleto + digito1 + digito2;
    if (cpf === cpf[0].repeat(cpf.length)){
        geraCPF()
    }
    else{
        return formataCPF(cpf);
    }
}

console.log(geraCPF())

