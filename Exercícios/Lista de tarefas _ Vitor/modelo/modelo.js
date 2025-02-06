const listaTarefas = document.querySelector(".tarefas");
const botaoAdicionarTarefa = document.querySelector(".btn-add-tarefa")
const inputTarefa = document.querySelector("#input-nova-tarefa")

function criaLi(){
    const li = document.createElement("li");
    return li;
}

function adicionaTarefa(tarefa){
    const li = criaLi();
    const botaoApagar = document.createElement("button");
    botaoApagar.innerHTML = "Apagar"
    botaoApagar.classList.add("apagar");
    li.innerHTML = `${tarefa}     `;
    li.appendChild(botaoApagar);
    listaTarefas.appendChild(li);
    salvarTarefa();
}

botaoAdicionarTarefa.addEventListener("click", function(){
    if (!inputTarefa.value) {return} //Uma string vazia retorna false, portanto !String Vazia retornaria true
    else{adicionaTarefa(inputTarefa.value);
        inputTarefa.value = "";
        inputTarefa.focus();
    }
})

inputTarefa.addEventListener("keypress", function(evento){
    if (evento.code == "Enter"){
        if (!inputTarefa.value) {return}
        else{
            adicionaTarefa(inputTarefa.value);
            inputTarefa.value = "";
            inputTarefa.focus();
        }
    }
})

document.addEventListener("click", function(evento){
    if (evento.target.classList.contains("apagar")){
        evento.target.parentElement.remove();
        salvarTarefa();
    }
})

function salvarTarefa(){
    const listaTarefas = document.querySelectorAll("li");
    let listaDeTarefas = [];
    for (let li of listaTarefas){ // Salvando o texto de cada li da listaTarefas em uma array (listaDeTarefas)
        let tarefaTexto = li.innerText;
        tarefaTexto = tarefaTexto.replace("Apagar", "").trim()
        listaDeTarefas.push(tarefaTexto);
    }
    //Salvando a array listaDeTarefas, que contém o texto de cada tarefa, no local storage do navegador
    const tarefasJSON = JSON.stringify(listaDeTarefas) // Transforma a array lista de tarefas em um string JSON
    localStorage.setItem("tarefas", tarefasJSON) // Salvando a string tarefasJSON no local storage do navegador com o nome "tarefas"

}

function carregarTarefasSalvas(){
    const tarefas = localStorage.getItem("tarefas") // Pegando a string tarefasJSON salva no local storage com "tarefas" e atribuindo a constante tarefas
    const listaDeTarefas = JSON.parse(tarefas) // Transformando a string tarefas em uma array
    for (let tarefa of listaDeTarefas){
        adicionaTarefa(tarefa);
    } //Pegando cada texto contido na array listaDeTarefas e criando uma tarefa com ela

}

carregarTarefasSalvas();
