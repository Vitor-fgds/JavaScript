const usuarios = [];
let contador = 0

class CriaUsuario{
    constructor(nome, idade,email){
    contador += 1;
    this.nome = nome;
    this.idade = idade;
    this.id = contador;
    this.email = email
}
}

function adicionarUsuario(usuario){
    usuarios.push(usuario)
}

function removerUsuario(id){
    const usuario = usuarios.findIndex(u => u.id === id);
    usuarios.splice(usuario, 1) // Deleta um usuario a partir do indice passado, ou seja, o próprio usuário
}

function listarUsuarios(){
    for (usuario of usuarios){
        console.log(`Nome : ${usuario.nome} || ID: ${usuario.id} || Idade: ${usuario.idade} || Email: ${usuario.email}`)
    }
}


const usuario1 = new CriaUsuario("Alice", 25, "alice@email.com");
const usuario2 = new CriaUsuario("Bob", 30, "bob@email.com");
const usuario3 = new CriaUsuario("Charlie", 22, "charlie@email.com");

adicionarUsuario(usuario1);
adicionarUsuario(usuario2);
adicionarUsuario(usuario3);

console.log("Usuários cadastrados:");
listarUsuarios();

console.log("\nRemovendo o usuário com ID 2...");
removerUsuario(2);

console.log("\nUsuários após remoção:");
listarUsuarios();