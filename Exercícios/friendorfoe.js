function friendOrfoe(lista){
    let amigos = [];
    for (pessoa of lista){
        if (pessoa.length === 4){
            amigos.push(pessoa);
        }
    }

    return amigos
}

console.log(friendOrfoe(["Ryan", "Kieran", "Jason", "Yous"]))


