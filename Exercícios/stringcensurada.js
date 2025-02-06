
const input = require("prompt-sync")();

let string = input();

function maskify(string){
  let censurado = string.slice(0, -4)
  let legivel = string.slice(-4)
  let hashtags = ""
  for (let i = 0; i < censurado.length; i++){
    hashtags += "#"
  }
  const palavraFinal = hashtags+legivel;
  return palavraFinal
}

console.log(maskify(string));