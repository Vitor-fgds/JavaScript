class Tarefa{
    constructor(nome, descricao, status="Não feito"){
        this.nome = nome;
        this.descricao = descricao;
        this.status = status;
    }
}

class GerenciadorDeTarefas{
    constructor(){
        this.tarefas = [];
    }

    adicionarTarefa(nome,descricao){
        const tarefa = new Tarefa(nome, descricao);
        this.tarefas.push(tarefa)
    }

    removerTarefa(nomeTarefa){
        const index = this.tarefas.findIndex(t => t.nome === nomeTarefa);
        if (index === -1){
            console.log("Tarefa não encontrada!")
        }

        this.tarefas.splice(index, 1);
    }

    listaTarefas(){
        this.tarefas.forEach((tarefa) => {
            console.log(`Tarefa: ${tarefa.nome} || Status: ${tarefa.status}`)
        })
    }

    filtrarTarefas(filtro){
        this.tarefas.forEach((tarefa) => {
            if (tarefa.status === filtro){
                console.log(`Tarefa: ${tarefa.nome} || Status: ${tarefa.status}`)
            }
        })
    }

    alterarStatus(nomeTarefa, status){
        const tarefa = this.tarefas.find(t => t.nome === nomeTarefa);
        if (!tarefa){
            console.log("Tarefa não encontrada!")
        }
        tarefa.status = status;
    }
}

async function fazendoTarefa(nomeTarefa, gerenciador){
    await new Promise((resolve) => {setTimeout(resolve, 3000)});
    gerenciador.alterarStatus(nomeTarefa, "Feito");
    console.log("Tarefa realizada!")
}

const gerenciador = new GerenciadorDeTarefas();
gerenciador.adicionarTarefa("Estudar JavaScript", "Revisar conceitos básicos");
gerenciador.adicionarTarefa("Fazer Compras", "Comprar leite, pão e ovos");

gerenciador.listaTarefas();
console.log("==========================================")
gerenciador.removerTarefa("Fazer Compras")
await fazendoTarefa("Estudar JavaScript", gerenciador);
gerenciador.listaTarefas()


