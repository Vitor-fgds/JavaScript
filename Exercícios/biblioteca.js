class Livro{
    constructor(titulo, autor, ano, categoria){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.categoria = categoria;
    }
}

class Biblioteca{
    constructor(){
        this.livros = []
    }

    adicionarLivro(titulo, autor, ano, categoria){
        const livro = new Livro(titulo, autor, ano, categoria);
        this.livros.push(livro)
    }

    removerLivro(titulo){
        const index = this.livros.findIndex(l => l.titulo === titulo)
        if (index === -1){
            console.log("Livro não encontrado!")
            return
        }
        this.livros.splice(index, 1)
    }

    listarLivros(){
        this.livros.forEach((livro) => {
            console.log(`Livro: ${livro.titulo} || Autor: ${livro.autor} || Ano: ${livro.ano}`)
        })
    }

    listarCategoria(categoria){
        this.livros.forEach((livro) => {
            if (livro.categoria === categoria){
            console.log(`Livro: ${livro.titulo} || Autor: ${livro.autor} || Ano: ${livro.ano}`)
            }
        })
    }

    buscaLivro(titulo){
        const livro = this.livros.find(l => l.titulo === titulo);
        if(!livro){
            console.log("Livro não encontrado!")
        }
        console.log(`Livro: ${livro.titulo} || Autor: ${livro.autor} || Ano: ${livro.ano}`);
    }
}


const biblioteca = new Biblioteca();
biblioteca.adicionarLivro("O assassino maluco", "Jorge Guilherme", 2007, "Terror")
biblioteca.adicionarLivro("O assassino inteligente", "Guilherme Jorge", 20013, "Terror")
biblioteca.adicionarLivro("A volta dos que não foram", "Richard Souza", 1997, "Romance")
biblioteca.listarLivros()
console.log("==========================================")
biblioteca.listarCategoria("Terror")
console.log("==========================================")
biblioteca.removerLivro("O assassino inteligente")
biblioteca.listarLivros()