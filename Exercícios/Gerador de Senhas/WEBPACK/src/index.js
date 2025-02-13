import "./assets/modelo.css";

const qtdCaracteres = document.querySelector("#qtd-caracteres");

function geraNumero(){
    const numero = Math.floor(Math.random() * (9-0) + 0)
    return String(numero)
}

function geraMaiuscula(){
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const indice = Math.floor(Math.random() * alfabeto.length) // Math.random não retorna 1 exato, apenas números muita proximos, arredondando sempre para um numero abaixo
    return String(alfabeto[indice])
}

function geraMinuscula(){
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const indice = Math.floor(Math.random() * alfabeto.length) // Math.random não retorna 1 exato, apenas números muita proximos, arredondando sempre para um numero abaixo
    return String(alfabeto[indice].toLowerCase())
}

function geraSimbolo(){
    const alfabeto_simbolos = "!@#$%&*";
    const indice = Math.floor(Math.random() * alfabeto_simbolos.length);
    return String(alfabeto_simbolos[indice])}

let i = 0;
let senha = ""

const addNumeros = document.querySelector("#add-num");
const addMaiusculas = document.querySelector("#add-maiusculas");
const addMinusculas = document.querySelector("#add-minusculas");
const addSimbolos = document.querySelector("#add-simbolos");
const btnSenha = document.querySelector(".gerar-senha")
const senhaGerada = document.querySelector(".senha-gerada")

btnSenha.addEventListener("click", (evento) => {
    evento.preventDefault()
    i = 0
    senha = ""
    while (i < Number(qtdCaracteres.value)){  //qtdCaracteres.value é uma string
        if (addNumeros.checked){
            senha += geraNumero();
            i++
            if (i === Number(qtdCaracteres.value)){
                break;
            }
        }

        if (addMaiusculas.checked){
            senha += geraMaiuscula();
            i++
            if (i === Number(qtdCaracteres.value)){
                break;
            }
        }

        if (addMinusculas.checked){
            senha += geraMinuscula();
            i++
            if (i === Number(qtdCaracteres.value)){
                break;
            }
        }

        if (addSimbolos.checked){
            senha += geraSimbolo();
            i++
            if (i === Number(qtdCaracteres.value)){
                break;
            }
        }
    }

    senhaGerada.innerText = senha
})





