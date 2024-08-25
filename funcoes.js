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


