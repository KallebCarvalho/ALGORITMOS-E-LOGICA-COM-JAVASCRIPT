//Neste desafio vamos trocar os valores de duas variáveis, utilizando uma variável auxiliar para armazenar temporariamente um dos valores.

var a = 10; // Number
var b = 20; // Number

a = a + b; // A = 30
b = a - b; // B = 10 (30 - 20)
a = a - b; // A = 20 (30 - 10)

console.log(`variavel a: ${a}`); // Exibindo o valor da variável a
console.log(`variavel b: ${b}`); // Exibindo o valor da variável b
