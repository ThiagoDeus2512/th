class Pessoa {

    name;
    peso;
    alt;

    constructor(name, peso, alt) {
        this.name = name;
        this.peso = peso;
        this.alt = alt;
    }
    CalcImc() {

        return this.peso / (this.alt * this.alt);
    }
    AplicarImc() {

        const imc = this.CalcImc();

        if (imc < 18.5) {

            console.log(`Você ${this.name} está com peso: ${this.peso} altura de: ${this.alt} com o peso baixo Imc: ${imc}`);

        } else if (imc >= 18.5 && imc <= 21.5) {

            console.log(`Você ${this.name} está com peso: ${this.peso} altura de: ${this.alt} com o peso normal Imc: ${imc}`);

        } else if (imc > 21.5 && imc <= 30) {

            console.log(`Você ${this.name} está com peso: ${this.peso} altura de: ${this.alt} com o peso acima Imc: ${imc}`);

        } else {
            console.log(`Você ${this.name} está com peso: ${this.peso} altura de: ${this.alt} Obeso Imc: ${imc}`);

        }


    }

}

const thiago = new Pessoa("Lucas", 50, 1.82);
console.log(thiago.AplicarImc());