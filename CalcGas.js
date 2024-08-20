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
}
function quadrado(valor) {
    return valor * valor;

}
const quadradoDez = quadrado(10);
console.log(quadradoDez);


function Juros(valor, juros) {
    acrescimos = (valor / 100) * juros;
    return valor + acrescimos;
}

console.log(Juros(100, 10));

function calculoImc(peso, alt) {
    return peso / Math.pow(alt, 2);

}

function classificarImc(imc) {

    if (imc < 18.5) {
        return ("abaixo do peso");
    }
    else if (imc >= 18.5 && imc < 25) {
        return ("Peso normal");
    }
    else if (imc >= 25 && imc < 30) {
        return ("Acima do peso");

    }
    else if (imc >= 30 && imc < 40) {
        return ("Obeso");
    }
    else {
        return ("Obsedidade grave");
    }

}

(function () {

    const alt = 1.82;
    const peso = 145;
    const imc = calculoImc(peso, alt);

    console.log(classificarImc(imc));
})();


(function (){

})();

function escrevaNome(nome) {
    console.log("Meu nome:" + nome);
}
escrevaNome("Thiago de Deus Jacom");
escrevaNome("Lucas Jacom");


function maiorIdade(idade) {
    if (idade >= 18) {
        console.log("Maior de idade");

    } else {
        console.log("menor de idade");
    }
}
maiorIdade(17);*/



function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));

}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));



}
if (formPagamento === 1) {
    return (precoProd - (precoProd * desconto));
}


else if (formPagamento === 2) {
    return (precoProd - (precoProd * desconto));
}
else if (formPagamento === 3) {
    return (precoProd);
} else {
    return (precoProd + (precoProd * desconto));

}

}   