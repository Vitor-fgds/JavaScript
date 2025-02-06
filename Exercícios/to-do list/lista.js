const listaTarefas = document.querySelector(".lista-tarefas")
const inputTarefas = document.querySelector(".input-tarefa")
const btnAdicionarTarefa = document.querySelector(".btn-adicionar-tarefa")


restaurar()
btnAdicionarTarefa.addEventListener("click", () => adicionaTarefa(inputTarefas.value))

document.addEventListener("keypress", (evento) =>{
    if(evento.code === "Enter"){
        adicionaTarefa(inputTarefas.value)
    }
})

document.addEventListener("click", (evento) => {
    el = evento.target
    if (el.classList.contains("btn-apagar")){
        el.parentElement.remove()
        salvarTarefa()
    }
})

function criaLi(){
    const li = document.createElement("li");
    return li;
}

function criaBotaoApagar(){
    const botaoApagar = document.createElement("button");
    botaoApagar.innerText = "Apagar"
    botaoApagar.classList.add("btn-apagar");
    return botaoApagar
}

function adicionaTarefa(tarefa){
    const li = criaLi();
    li.innerText = `${tarefa}`;
    const botaoApagar = criaBotaoApagar();
    li.appendChild(botaoApagar);
    listaTarefas.appendChild(li);
    inputTarefas.value = ""
    inputTarefas.focus()
    salvarTarefa()
}

function salvarTarefa(){
    const listali = listaTarefas.querySelectorAll("li");
    const listaDeTarefas = [];
    for (li of listali){
        let textoli = li.innerText;
        textoli = textoli.replace("Apagar", "").trim();
        listaDeTarefas.push(textoli);
    }
    const stringJason = JSON.stringify(listaDeTarefas);
    localStorage.setItem("tarefas", stringJason);
}

function restaurar(){
    const tarefas = localStorage.getItem("tarefas")
    const listaDeTarefas = JSON.parse(tarefas);
    for (tarefa of listaDeTarefas){
        adicionaTarefa(tarefa)
    }
}