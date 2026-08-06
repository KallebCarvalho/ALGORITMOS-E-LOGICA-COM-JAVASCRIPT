//Apredendo sobre operadores de comparação

// Diferente (!=) - Compara se os valores são diferentes, sem considerar o tipo de dado.

var numero9 = 100; // Number
var numero10 = 200; // Number
console.log(numero9 != numero10); 
// true - O valor é diferente, mesmo sendo do mesmo tipo (Number e Number)
var numero11 = 100; // Number
var numero12 = "100"; // String
console.log(numero11 != numero12); 
// false - O valor é igual, mesmo sendo tipos diferentes (Number e String)

// Estritamente Diferente (!==) - Compara se os valores são diferentes e do mesmo tipo de dados.
var numero13 = 100; // Number
var numero14 = "100"; // String
console.log(numero13 !== numero14); 
// true - O valor é igual, mas os tipos são diferentes (Number e String)

var numero15 = 100; // Number
var numero16 = 100; // Number
console.log(numero15 !== numero16); 
// false - O valor e o tipo são iguais (Number e Number)