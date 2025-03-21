function ValidaCPF(cpfEnviado){

    Object.defineProperty(this, "cpfLimpo", {
        get: function(){
            return cpfEnviado.replace(/\D+/g, "")
        }
    })
    
}

ValidaCPF.prototype.valida = function(){
    if (typeof this.cpfLimpo === "undefined") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if((this.isSequencia()) === true) return false;
    const cpfParcial = this.cpfLimpo.slice(0,-2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial+ digito1)
    const novoCpf = cpfParcial + digito1 + digito2
    return novoCpf === this.cpfLimpo;

}

ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((acumulador, valor) => {
        acumulador += (regressivo * Number(valor));
        regressivo--;
        return acumulador
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? "0": String(digito);

}

ValidaCPF.prototype.isSequencia = function() {
    return this.cpfLimpo === this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    
}

const cpf = new ValidaCPF("705.484.450-52")
console.log(cpf.valida())
