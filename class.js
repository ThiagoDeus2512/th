




class Pessoa {
    nome;
    idade;


    constructor(nome, idade) {

        this.nome = nome;
        this.idade = idade;
    }
    descrever() {
        console.log(`Meu nome ${this.nome} minha idade ${this.idade}`);
    }
}

function compIdade(p1, p2) {

    if (p1.idade > p2.idade) {
        console.log(" P1 maior de ");

    } else if (p2.idade > p1.idade) {
        console.log("P2 maior de idade ");
    } else {
        console.log("Mesma idade ");
    }

}
const thiago = new Pessoa("Thiago", 40);
const Lucas = new Pessoa("Lucas", 40);

compIdade(thiago, Lucas);