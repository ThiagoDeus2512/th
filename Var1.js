class Pessoa {

    Nome;
    Peso;
    Alt;

    constructor(Nome, Peso, Alt) {

        this.Nome = Nome;
        this.Peso = Peso;
        this.Alt = Alt;

    }


    CalcImc() {

        return this.Peso / (this.Alt * this.Alt);

    }

    AplicarImc() {

        const imc = this.CalcImc();

        if (imc <= 18.5) {
            return ("Abaixo do Peso");

        } else {
            return ("Peso Normal");

        }

    }
}
const thiago = new Pessoa("Thiago", 50, 1.90);
console.log(thiago.AplicarImc());
