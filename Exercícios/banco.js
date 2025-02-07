function Banco(nome){
    this.nome = nome;
    this.clientes = [];
    this.contas = []
    this.nClientes = 0;
    this.nContas = 0;

}

Banco.prototype.addCliente = function(nomeCliente, endereco, telefone, cpf){
    this.nClientes += 1;
    const cliente = {
        nome: nomeCliente,
        endereco: endereco,
        telefone: telefone,
        cpf: cpf,
        id: this.nClientes,
    }

    this.clientes.push(cliente)
    return cliente
}

Banco.prototype.criaConta = function(idCliente, saldoInicial){
    const cliente = this.clientes.find(c => c.id === idCliente);

    if (!cliente){
        return "Cliente não encontrado!"
    }

    this.nContas += 1;

    const conta = {
        proprietario: cliente.nome,
        cpfProprietario: cliente.cpf,
        saldo: saldoInicial,
        numeroConta: this.nContas,
    }

    this.contas.push(conta);
    return conta;

}

Banco.prototype.saque = function(numeroConta, valor){
    const conta = this.contas.find(c => c.numeroConta === numeroConta);
    if (!conta){
        return `Conta ${numeroConta} não encontrada!`
    }

    if (conta.saldo >= valor){
        conta.saldo -= valor;
        return conta.saldo
    }
    else{
        return "Saldo insuficiente"
    }

}

Banco.prototype.deposito = function(numeroConta, valor){
    const conta = this.contas.find(c => c.numeroConta === numeroConta);
    if (!conta){
        return `Conta ${numeroConta} não encontrada!`
    }

   conta.saldo += valor;
   return conta.saldo;
}

Banco.prototype.transferencia = function(contaTransfere, contaRecebe, valor){
    const transferidor = this.contas.find(c => c.numeroConta === contaTransfere);
    const recebedor = this.contas.find(c => c.numeroConta === contaRecebe);
    if (!(transferidor && recebedor)){
        return "Uma das contas digitadas não existe!"
    }
    
    if (transferidor.saldo >= valor){
    transferidor.saldo -= valor;
    recebedor.saldo += valor;
    return "Transferência Realizada!"
}
    else{
        return "Saldo insuficiente para realizar transferência!"
    }
}

Banco.prototype.getSaldo = function(numeroConta){
    const conta = this.contas.find(c => c.numeroConta === numeroConta);
    if (!conta){
        return "Conta não encontrada!"
    }

    return `O saldo de ${conta.proprietario} é de R$${conta.saldo.toFixed(2)}`

}

Banco.prototype.getId = function(cpf){
    const cliente = this.clientes.find(c => c.cpf === cpf);
    if (!cliente) return;
    return cliente.id;

}

Banco.prototype.getNumeroConta = function(cpf){
    const conta = this.contas.find(c => c.cpfProprietario === cpf);
    if (!conta) return;
    return conta.numeroConta;

}

const bradesco = new Banco("Bradesco");
bradesco.addCliente("José Figueiredo", "Rua Brasil, nº 409", "(31)99876-5435", "962.295.243-76")
bradesco.addCliente("Aparecida Magalhães", "Rua Brasil, nº 420", "(31)996543-3554", "173.127.496-31")
bradesco.criaConta(bradesco.getId("962.295.243-76"), 1500)
bradesco.criaConta(bradesco.getId("173.127.496-31"), 1500)
console.log(bradesco.getNumeroConta("962.295.243-76"))
console.log(bradesco.getNumeroConta("173.127.496-31"))
console.log(bradesco.getSaldo(bradesco.getNumeroConta("962.295.243-76")));
console.log(bradesco.getSaldo(bradesco.getNumeroConta("173.127.496-31")));
console.log(bradesco.transferencia(1, 2, 400))
console.log(bradesco.getSaldo(bradesco.getNumeroConta("962.295.243-76")));
console.log(bradesco.getSaldo(bradesco.getNumeroConta("173.127.496-31")));
