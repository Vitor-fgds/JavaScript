const pokemonName = document.querySelector(".pokemon-name");
const pokemonNumber = document.querySelector(".pokemon-number");
const pokemonImage = document.querySelector(".pokemon-image");
const inputSearch = document.querySelector(".input-search");
const form = document.querySelector(".form");
const buttonPrev = document.querySelector(".btn-prev")
const buttonNext = document.querySelector(".btn-next")

let searchPokemon = 1 /* Variavel global para usar os botaos previous e next */

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`); /* Buscando informações de determinado pokemon na api, mandamos o link base e completamos a ultima barra com o valor que a função é chamada, podendo este ser o nome ou o id de um pokemon, que terá suas informações retornadas em forma de objeto pela api */
    const data =  await APIResponse.json(); /* Extrai os dados da api para o formato json */
    return data;
}

const renderPokemon = async (pokemon) => {
    try{
    pokemonNumber.innerHTML = ""
    pokemonName.innerHTML = "Loading..." /* Aparece no lugar do nome enquanto a função não é concluida */
    const data = await fetchPokemon(pokemon); /* Utiliza a função fetchPokemon para buscar os dados do pokemon indicado */
    searchPokemon = data.id; /* Atualiza a variavel global */
    pokemonName.innerHTML = data.name; /* Pegamos o valor da chave name do objeto retornado pela api */
    pokemonNumber.innerHTML = data.id;/* Pegamos o valor da chave id do objeto retornado pela api */
    pokemonImage.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"];} /* Acessando o gif que desejamos dentro do objeto retornado pela API */
    catch(erro){
        pokemonName.innerHTML = "Not Found!";
        pokemonNumber.innerHTML = ""
    }
}

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    renderPokemon(inputSearch.value.toLowerCase());
    inputSearch.value = ""
})

buttonPrev.addEventListener("click", () => {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
})

/* Muda o valor da variavel global em +1 ou -1 e busca o poekmon correspondente */

buttonNext.addEventListener("click", () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon)
})


renderPokemon(searchPokemon) /* Para que a pessoa sempre entre na pokedex com o pokemon 1 aparecendo*/