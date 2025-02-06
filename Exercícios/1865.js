const input = require("prompt-sync")();


const c = parseFloat(input());
for (let i = 0; i < c; i++){
    const entrada = input();
    const array = entrada.split(" ");
    const power = parseFloat(array[1]);
    const nome = array[0];
    if (nome === "Thor"){
        console.log("Y")
    }
    else{
        console.log("N")
    }
}

