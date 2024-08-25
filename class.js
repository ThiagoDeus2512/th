




class Pessoa {
    nome;
    idade;


    constructor(nome, idade) {

        this.nome = nome;
        this.idade = idade;
        this.nascimento = 2024 - idade;
    }
    descrever() {
        console.log(`Meu nome ${this.nome} minha idade ${this.idade}`);
    }
}


function compIdade(p1, p2) {

    if (p1.idade > p2.idade) {
        console.log(`O ${p1.nome} é mais velho, nascido em ${p1.nascimento}`);

    } else if (p2.idade > p1.idade) {
        console.log(`O ${p2.nome} é mais velho, nascido em ${p1.nascimento}`);
    } else {
        console.log(`O ${p1.nome} é ${p2.nome} são dá mesma idade `);
    }

}
const thiago = new Pessoa("Thiago", 42);
const Lucas = new Pessoa("Lucas", 40);

compIdade(thiago, Lucas);

