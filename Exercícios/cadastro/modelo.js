const pessoas_cadastradas = [];
const btnCadastrar = document.querySelector(".botao-form")
const telefone = document.querySelector("#telefone")
const cpf = document.querySelector("#cpf")
const nome = document.querySelector("#nome")
const form = document.querySelector(".form")

function validadorCpf(cpf){
    let numerosCpf = cpf.replace(/\D+/g, "");
     if (numerosCpf.length !== 11) {return false};
     if (numerosCpf === numerosCpf[0].repeat(numerosCpf.length)) {return false}
     const cpfParcial = numerosCpf.slice(0, -2)
     let cpfArray = cpfParcial.split("");
    
    const primeiroDigito = criaDigito(cpfArray);
    cpfArray.push(primeiroDigito)
    const segundoDigito = criaDigito(cpfArray);
    
    if (primeiroDigito === numerosCpf[9] && segundoDigito === numerosCpf[10]){
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
    

class Pessoas {
    constructor(nome, telefone, cpf){
        this.nome = nome;
        this.telefone = telefone;
        this.cpf = cpf
    }
}

btnCadastrar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const pessoa = new Pessoas(nome.value, telefone.value, cpf.value);
    const cpf_pessoa = pessoa.cpf;
    if (validadorCpf(cpf_pessoa) === false){
        cpfInvalido()
        return
    }

    const cpf_repetido = pessoas_cadastradas.find(p => p.cpf === pessoa.cpf);
    if (cpf_repetido){
        cpfRepetido()
        return;
    }

    removeErros()
    pessoas_cadastradas.push(pessoa);
    limpaForm()
})


function cpfInvalido(){
    removeErros()
   const paragrafo = document.createElement("p");
   paragrafo.innerHTML = "Digite um CPF válido!";
   paragrafo.classList.add("cpfInvalido");
   form.appendChild(paragrafo);
}

function cpfRepetido(){
    removeErros()
   const paragrafo = document.createElement("p");
   paragrafo.innerHTML = "Esse CPF já está cadastrado!";
   paragrafo.classList.add("cpfRepetido");
   form.appendChild(paragrafo);

}

function limpaForm(){
    telefone.value = "";
    cpf.value = "";
    nome.value = "";
}

function removeErros(){
    document.querySelectorAll(".cpfInvalido, .cpfRepetido").forEach((msg) => msg.remove()); // msg se refere a cada um dos páragrafos selecionados para a node list

    

}

