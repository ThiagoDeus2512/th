/*const precoGasolina = 5.79;
const kmPorLitros = 32;
const distanciaTotal = 230;
const litrosConsumidos = distanciaTotal / kmPorLitros;
const gastosTotal = litrosConsumidos * precoGasolina;

console.log(litrosConsumidos.toFixed(2));
console.log(gastosTotal.toFixed(2));

const numeroPar = 44;

const restoDivisao = numeroPar % 2;
console.log(restoDivisao);
if (restoDivisao === 0) {
    console.log("Numero Par")
} else {
    console.log("Impar");

}


const precoGasolina = 5.79;
const precoEtanol = 3.80;
const kmPorLitros = 23;
const distanciaTotal = 230;
const tipoCombustivel = "etanol";

const litrosConsumidos = distanciaTotal / kmPorLitros;

if (tipoCombustivel === "etano") {
    const gastosTotal = litrosConsumidos * precoEtanol;
    console.log(gastosTotal.toFixed(2));
} else {
    const gastosTotal = litrosConsumidos * precoGasolina;
    console.log(gastosTotal.toFixed(2));
}

let media1 = 6.5;
let media2 = 7.5;
let media3 = 4.0;
let mediaTotal = (media1 + media2 + media3) / 3;


if (mediaTotal < 5) {
    console.log("Reprovado");
    console.log(mediaTotal.toFixed(2));

} else if (mediaTotal >= 5 <= 7) {
    console.log("Recuperaçao");
    console.log(mediaTotal.toFixed(2));
} else {
    console.log("Aprovado");
    console.log(mediaTotal.toFixed(2));
}
let peso = 250;
let alt = 1.70;

let imc = peso / Math.pow(alt, 2);

if (imc < 18.5) {
    console.log("Imc: " + imc, "Alt: " + alt, "Peso: " + peso, "Abaixo do peso");
}
else if (imc > 18.5 <= 25) {
    console.log("Imc: " + imc, "Alt: " + alt, "Peso: " + peso, "Peso normal");
}
else if (imc > 25 <= 30) {
    console.log("Imc: " + imc, "Alt: " + alt, "Peso: " + peso, "Acima do peso");
}
else if (imc > 30 >= 40) {
    console.log("Imc: " + imc, "Alt: " + alt, "Peso: " + peso, "Obeso");
}


else {
    console.log("Imc: " + imc, "Alt: " + alt, "Peso: " + peso, "Obesidade");
}

const precoProduto = 40;
const formPagamento = 4;

if (formPagamento === 1) {

    const valor = (precoProduto - (precoProduto * 0.1));
    console.log("Valor Desc R$ " + valor.toFixed(2));
}
else if (formPagamento === 2) {

    const valor = (precoProduto - (precoProduto * 0.15));
    console.log("Valor Desc R$ " + valor.toFixed(2));
}
else if (formPagamento === 3) {

    const valor = precoProduto;
    console.log("Valor R$ " + valor.toFixed(2));
}
else {
    console.log(precoProduto + (precoProduto * 0.1));
}*/
function quadrado(valor) {
    return valor * valor;

}
const quadradoDez = quadrado(10);
console.log(quadradoDez);