function escopo(){
    // Parar envio do formulário - Capturar evento submit
    const container = document.querySelector(".container");
    const formulario = container.querySelector(".formulario");


    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();
        const peso = evento.target.querySelector("#peso"); // Seleciona o elemento que sofre o evento (nesse caso, o form)
        const altura = evento.target.querySelector("#altura");

        const valor_peso = Number(peso.value);
        const valor_altura = Number(altura.value);

        if (!valor_peso){ // NaN é um falsy value, portanto o if só ocorrera caso o valor_peso seja um number que retorna false (NaN)
            setResultado("Peso inválido!", false);
            return;
        }
        if (!valor_altura){ // NaN é um falsy value, portanto o if só ocorrera caso o valor_peso seja um number que retorna false (NaN)
            setResultado("Altura inválida!", false);
            return;
        }

        const imc = getImc(valor_peso, valor_altura)
        
        function getImc(peso, altura){
            return (peso / altura ** 2).toFixed(2)
        }

        const nivelImc = getNivelImc(imc);

        mensagem = `Seu IMC é ${imc} - ${nivelImc}`;

        setResultado(mensagem, true)
    });

    function getNivelImc(imc){
        const nivel = ["Abaixo do peso", "Peso normal", "Sobrepeso","Obesidade Grau 1","Obesidade Grau 2", "Obesidade Grau 3"]
        if (imc > 40){
            return nivel[5]}

        else if (imc > 35){
            return nivel[4]
        }

        else if (imc > 30){
            return nivel[3]
        }

        else if(imc > 25 ){
            return nivel[2]
        }

        else if (imc > 18.5){
            return nivel[1]
        }

        else {
            return nivel[0]
        }

    }


    function criaP(){
        const paragrafo = document.createElement("p");
        return paragrafo;
    }

    function setResultado(mensagem, isValid){
        const resultado = document.querySelector(".resultado");
        resultado.innerHTML = ``;
        const paragrafo = criaP();
        if (isValid) {paragrafo.classList.add("paragrafo-resultado")}
        else { paragrafo.classList.add("error")};
        paragrafo.innerHTML = mensagem
        resultado.appendChild(paragrafo);

    }


}
escopo()