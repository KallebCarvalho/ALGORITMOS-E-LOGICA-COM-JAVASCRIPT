//Neste desafio vamos criar uma calculadore de juros com funções.
//Vamos criar uma função que recebe o valor do capital e o taxa de juros e retorna o valor final.

//(J = P * i * n) - 
// Fórmula de juros simples, onde:
// J = juros, 
// P = Valor principal, 
// i = taxa de juros 
// n = tempo em meses.

var valorPrincipal = 2000; // Number
var taxaJuros = 0.03; // Number //Igual a 3% de juros, que é 0.03 em decimal
var tempoMeses = 12; // Number
var jurosSimples = valorPrincipal * taxaJuros * tempoMeses; // Number
console.log(`O valor dos juros simples é: ${jurosSimples}`);

function calcularJuros(valorPrincipal, taxaJuros, tempoMeses){
    let juros = valorPrincipal * taxaJuros * tempoMeses;
    return juros;
    console.log("O valor da taxa de juros é de:" + taxaJuros);
}