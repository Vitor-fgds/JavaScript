class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(){
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos!`
    }
}

const _salario = Symbol("salario");
const _cargo = Symbol("cargo")
class Funcionario extends Pessoa {
    constructor(nome,idade,cargo,salario){
        super(nome,idade);
        this[_cargo] = cargo;
        this[_salario] = salario;
    }

    get salario(){
        return this[_salario];
    }

    set salario(valor){
        if (valor <= 0){
            console.log(`O salário deve possuir um valor positivo!`)
            return;
        }

        else{
            this[_salario] = valor;
        }
    }

    get cargo(){
        return this[_cargo];
    }

    promover(novoCargo, aumento){
        if (typeof novoCargo === "string"){
        this[_cargo] = novoCargo}
        else{
            console.log(`Este cargo não existe!`);
            return
        }

        if (typeof aumento === "number" && aumento >= 0){
            this[_salario] = this[_salario] + aumento
        }
    }
}

class Gerente extends Funcionario{
    constructor(nome,idade,cargo,salario,bonus = 0.1){
        super(nome,idade,cargo,salario);
        this.bonus = bonus;
    }

    calcularSalarioTotal(){
        return this.salario + this.salario * this.bonus  //this.salario retorna o salario por causa do getter
    }
}


const gerenteTi = new Gerente("Guilherme Bastos", 19, "Gerente de TI", 15000, 0.3)
console.log(gerenteTi.apresentar())
console.log(gerenteTi.salario)
gerenteTi.salario = 20000
console.log(gerenteTi.salario)
console.log(gerenteTi.cargo)
gerenteTi.cargo = "Gerente Financeiro"
console.log(gerenteTi.cargo)
gerenteTi.promover("CEO", 5000)
console.log(gerenteTi.cargo)
console.log(gerenteTi.calcularSalarioTotal())

const {nome, idade, salario} = gerenteTi
console.log(nome);
console.log(idade)
console.log(salario)