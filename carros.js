class Carros {

    Marca;
    Cor;
    KmLitros;

    constructor(Marca, Cor, KmLitros) {

        this.Marca = Marca;
        this.Cor = Cor;
        this.KmLitros = KmLitros;
    }

    calcGatosTotal(distanciaTotal, precoGasolina) {

        return distanciaTotal * this.KmLitros * precoGasolina;
    }

}
const Uno = new Carros("Fiat", "Vermelho", 1 / 12);
const Gol = new Carros("volk", "Verde", 1 / 12);
const Onix = new Carros("Chevrolet", "Azul", 1 / 32);


console.log(Gol.calcGatosTotal(70, 5));