//Neste desafio vamos criar uma calculadora de juros simples.
//A partir de um valor inicial, taxa de juros e tempo em meses.

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
console.log(`O valor dos juros simples é: ${jurosSimples}`); // Exibindo o resultado do cálculo de juros simples
