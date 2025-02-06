const display = document.querySelector(".display")


function numParaDisplay(botao){
    display.value += botao.innerText;
}

function clearDisplay(){
    display.value = ""

}

function finalizarCalculo(){
    try{
    display.value = eval(display.value);}
    catch(erro){
        display.value = "Cálculo Inválido!"
    }
}

function clearChar(){
    display.value = display.value.slice(0, display.value.length - 1)
}


document.addEventListener("click", (evento) => {
    const el = evento.target;
    if (el.classList.contains("btn-num")){
        numParaDisplay(el);
    }

    else if (el.classList.contains("btn-clear")){
        clearDisplay();
    }

    else if (el.classList.contains("btn-igual")){
        finalizarCalculo();
    }

    else if (el.classList.contains("btn-deletar")){
        clearChar()
    }
})

document.addEventListener("keypress", (evento) => {
    if (evento.code === "Enter"){
        display.focus();
        finalizarCalculo();
    }
})
