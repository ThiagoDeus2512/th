
/*

class Pessoa {
    nome;
    peso;
    alt;

    constructor(nome, peso, alt) {
        this.nome = nome;
        this.peso = peso;
        this.alt = alt;

    }
    calcularImc() {
        return this.peso / (this.alt * this.alt);
    }
    ClassificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return ("Abaixo de Peso");

        } else if (imc >= 18.5 && imc < 25) {
            return ("Peso Normal");

        } else {
            return ("gordo");
        }
    }
}

const jose = new Pessoa("Jose", 76, 1.82);
console.log(jose.ClassificarImc());
const lucas = new Pessoa("lucas", 80, 1.82);
console.log(lucas.ClassificarImc());


torrarPao("Pao de formar", "Thiago");
torrarPao("Pao integral", "Diana");


function torrarPao(pao, nome) {

    console.log(" Adoro comer " + pao);
    console.log(" Meu nome " + nome);
}
torrarPao("Pao integral", "Thiago", 10.90);


function torrarPao(pao, nome = "Cliente", valor) {

    console.log(` Pedido ${pao}`);
    console.log(` Cliente ${nome}`);
    console.log(` Valor R$ ${valor}`);
    }



let totalDaSoma = somarNumeros(5, 10);
console.log("O resultado total da soma " + totalDaSoma);

function somarNumeros(N1, N2) {

    return N1 + N2;
}*/


let userName = getFirstName("Thiago de Deus Jacom");
console.log("Bem Vindo " + userName);

function getFirstName(name) {

    let firtsName = name.split(" ")[3];
    return firtsName;


}


