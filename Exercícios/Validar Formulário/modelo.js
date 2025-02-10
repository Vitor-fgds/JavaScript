const btnEnviar = document.querySelector(".botao-form")
const nome = document.querySelector("#nome")
const sobrenome = document.querySelector("#sobrenome")
const cpf = document.querySelector("#cpf")
const usuario = document.querySelector("#usuario")
const senha = document.querySelector("#senha")
const senharepetida = document.querySelector("#senharepetida")
const divNome = document.querySelector(".div-nome")
const divSobrenome = document.querySelector(".div-sobrenome")
const divCpf = document.querySelector(".div-cpf")
const divUsuario = document.querySelector(".div-usuario")
const divSenha = document.querySelector(".div-senha")
const divSenhaRepetida = document.querySelector(".div-senharepetida")
const pessoasCadastradas = []

function checkVazio(input, div, nome){
    if(input.value.trim() === ""){
        const paragrafo = document.createElement("p")
        paragrafo.innerText = `O campo ${nome} não pode estar vazio!`
        paragrafo.classList.add("erro")
        div.appendChild(paragrafo);
        return false;
    }

    return true;
}

function validadorCpf(cpf){
    let numerosCpf = cpf.replace(/\D+/g, "");
     if (numerosCpf.length !== 11) {return false};
     if (numerosCpf === numerosCpf[0].repeat(numerosCpf.length)) {
        const paragrafo = document.createElement("p");
        paragrafo.innerText = `CPF inválido!`
        paragrafo.classList.add("erro")
        divCpf.appendChild(paragrafo)
        return false
     }
     const cpfParcial = numerosCpf.slice(0, -2)
     let cpfArray = cpfParcial.split("");
    
    const primeiroDigito = criaDigito(cpfArray);
    cpfArray.push(primeiroDigito)
    const segundoDigito = criaDigito(cpfArray);
    
    if (primeiroDigito === numerosCpf[9] && segundoDigito === numerosCpf[10]){
        return true;
    }
    else{
        const paragrafo = document.createElement("p");
        paragrafo.innerText = `CPF inválido!`
        paragrafo.classList.add("erro")
        divCpf.appendChild(paragrafo)
        return false
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

function cpfRepetido(cpf){
    const repetido = pessoasCadastradas.find(pessoa => pessoa.cpf === cpf)
    if(repetido){
    const paragrafo = document.createElement("p");
    paragrafo.innerText = `CPF já cadastrado!`
    paragrafo.classList.add("erro")
    divCpf.appendChild(paragrafo)
    return false
    }
    return true

}

function tamanhoUsuario(usuario){
    if (usuario.length >= 3 && usuario.length <= 12){
        return true
    }

    const paragrafo = document.createElement("p");
    paragrafo.innerText = `O seu nome de usuário deve conter entre 3 a 12 caracteres!`
    paragrafo.classList.add("erro")
    divUsuario.appendChild(paragrafo)
    return false
}

function caracteresUsuario(usuario){
    const array = Array.from(usuario)
    const validade = array.every((char) => /[a-zA-Z0-9]/.test(char))
    if (validade){
        return true
    }

    const paragrafo = document.createElement("p");
    paragrafo.innerText = `O seu nome de usuário só pode conter letras e números!`
    paragrafo.classList.add("erro")
    divUsuario.appendChild(paragrafo)
    return false
    }

    function usuarioRepetido(usuario){
        const repetido = pessoasCadastradas.find(pessoa => pessoa.usuario === usuario)
        if(repetido){
        const paragrafo = document.createElement("p");
        paragrafo.innerText = `Usuário já cadastrado!`
        paragrafo.classList.add("erro")
        divUsuario.appendChild(paragrafo)
        return false
        }
        return true
    
    }

function tamanhoSenha(senha){
        if (senha.length >= 6 && senha.length <= 12){
            return true
        }
    
        const paragrafo = document.createElement("p");
        paragrafo.innerText = `A sua senha deve ter entre 6 e 12 caracteres!`
        paragrafo.classList.add("erro")
        divSenha.appendChild(paragrafo)
        return false
    }

    function igualdadeSenha(){
        if (senha.value === senharepetida.value) return true;
        const paragrafo = document.createElement("p");
        paragrafo.innerText = `O campo repetir senha deve ser igual a senha`
        paragrafo.classList.add("erro")
        divSenhaRepetida.appendChild(paragrafo)
        return false

    }
    

function checkNome(){
    divNome.querySelectorAll("p").forEach((paragrafo) => paragrafo.remove())
    return checkVazio(nome, divNome, "nome" )
}

function checkSobrenome(){
    divSobrenome.querySelectorAll("p").forEach((paragrafo) => paragrafo.remove())
    return checkVazio(sobrenome, divSobrenome, "sobrenome" )
}

function checkCpf(){
    divCpf.querySelectorAll("p").forEach((paragrafo) => paragrafo.remove())
    const vazio = checkVazio(cpf, divCpf, "cpf")
    const valido = validadorCpf(cpf.value)
    const repetido = cpfRepetido(cpf.value)

    if (vazio && valido && repetido) return true
    return false
}

function checkUsuario(){
    divUsuario.querySelectorAll("p").forEach((paragrafo) => paragrafo.remove())
    const vazio = checkVazio(usuario, divUsuario, "usuário")
    const tamanho = tamanhoUsuario(usuario.value)
    const caracteres = caracteresUsuario(usuario.value)
    const repetido = usuarioRepetido(usuario.value)

    if (vazio && tamanho && caracteres && repetido) return true
    return false
}

function checkSenha(){
    divSenha.querySelectorAll("p").forEach((paragrafo) => paragrafo.remove())
    const vazio = checkVazio(senha, divSenha, "senha")
    const tamanho = tamanhoSenha(senha.value)

    if (vazio && tamanho) return true
    return false
}

function checkSenhaRepetida(){
    divSenhaRepetida.querySelectorAll("p").forEach((paragrafo) => paragrafo.remove())
    const vazio = checkVazio(senharepetida, divSenhaRepetida, "repetir senha");
    const validade = igualdadeSenha();
    if (vazio && validade) return true
    return false
}

function limparCampos(){
    nome.value = ""
    sobrenome.value = ""
    cpf.value = ""
    usuario.value = ""
    senha.value = ""
    senharepetida.value = ""
}

class Pessoa{
    constructor(nome,sobrenome,cpf,usuario,senha,senharepetida){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.usuario = usuario;
        this.senha = senha;
        this.senharepetida = senharepetida
    }
}






btnEnviar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const nomeEnviado = checkNome()
    const sobrenomeEnviado = checkSobrenome()
    const cpfEnviado = checkCpf()
    const usuarioEnviado = checkUsuario()
    const senhaEnviada = checkSenha()
    const senhaRepetidaEnviada = checkSenhaRepetida()
    if (nomeEnviado && sobrenomeEnviado && cpfEnviado && usuarioEnviado && senhaEnviada && senhaRepetidaEnviada){
        const pessoa = new Pessoa(nome.value, sobrenome.value, cpf.value, usuario.value, senha.value, senharepetida.value)
        pessoasCadastradas.push(pessoa)
        limparCampos()
        alert("Pessoa cadastrada com sucesso")
        return true
    }

    return false
})