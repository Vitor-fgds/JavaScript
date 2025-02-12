

const arrayID = []

function criaID(){
    const id = Math.floor(Math.random() * (3000 - 1) + 1)
    if (!(arrayID.includes(id))){
        arrayID.push(id);
        return id
    }
    else{
        criaID()
    }
}

const _id = Symbol("id")
class Pedido{
    constructor(cliente,itens){
        this[_id] = criaID();
        this.cliente = cliente;
        this.itens = itens;
        this.status = "pendente"
    }

    get id(){
        return this[_id]
    }
}

class Restaurante{
    constructor(){
        this.pedidos = []
    }

    adicionarPedido(cliente,itens){
        const pedido = new Pedido(cliente, itens);
        this.pedidos.push(pedido);
    }

    removerPedido(id){
        const index = this.pedidos.findIndex(p => p.id === id) // Retorna -1 se o item não for encontrado
        if (index === -1){
            return `O id: ${id} não corresponde a nenhum pedido!`
        }

        this.pedidos.splice(index, 1) // Vai até o index encontrado e elimina um elemento
    }

    atualizarStatus(id, status){
        const pedido = this.pedidos.find(p => p.id === id);
        if (pedido){
        pedido.status = status;
        return `Status alterado!`
        }
        return "Pedido não encontrado!"
    }

    listarPedidos(){
        this.pedidos.forEach((pedido) => {
            console.log(`
Detalhes do pedido:
ID : ${pedido.id};
Cliente: ${pedido.cliente}
Itens: ${pedido.itens}
Status: ${pedido.status}
`);
                
        })
    }
}

async function simularPreparacao(id,restaurante){
    await new Promise(resolve => setTimeout(resolve, 3000));
    restaurante.atualizarStatus(id, "Pronto");
    return;

}

const apocalipse = new Restaurante();
apocalipse.adicionarPedido("Vitor", ["Coca - Cola", " Pizza"])
apocalipse.adicionarPedido("Isabella", ["Guaraná", " Hamburguer"])
apocalipse.listarPedidos()
const pedidoVitor = apocalipse.pedidos.find(p => p.cliente === "Vitor")
const pedidoIsabella = apocalipse.pedidos.find(p => p.cliente === "Isabella")
apocalipse.removerPedido(pedidoVitor.id)
console.log("==========================================================")
apocalipse.listarPedidos()
await simularPreparacao(pedidoIsabella.id, apocalipse)
console.log("==========================================================")
apocalipse.listarPedidos()


