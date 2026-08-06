//Apredendo sobre operadores de comparação

//Igualdade (==) - Compara se os valores são iguais, sem considerar o tipo de dado

var numero1 = 100;
var numero2 = 200;
console.log(numero1 == numero2); // false

var numero3 = 100; // Number
var numero4 = "100"; // String
console.log(numero3 == numero4);// true - O valor é igual, mesmo sendo tipos diferentes (Number e String)

//Estritamente Igual (===) - Compara se os valores são iguais e do mesmo tipo de dados

var numero5 = 100; // Number
var numero6 = "100"; // String
console.log(numero5 === numero6); // false - O valor é igual, mas os tipos são diferentes (Number e String)

var numero7 = 100; // Number
var numero8 = 100; // Number
console.log(numero7 === numero8); // true - O valor e o tipo são iguais (Number e Number)

// Diferente (!=) - Compara se os valores são diferentes, sem considerar o tipo de dado.

var numero9 = 100; // Number
var numero10 = 200; // Number
console.log(numero9 != numero10); // true - O valor é diferente, mesmo sendo do mesmo tipo (Number e Number)
 var numero11 = 100; // Number
var numero12 = "100"; // String
console.log(numero11 != numero12); // false - O valor é igual, mesmo sendo tipos diferentes (Number e String)

// Estritamente Diferente (!==) - Compara se os valores são diferentes e do mesmo tipo de dados.
var numero13 = 100; // Number
var numero14 = "100"; // String
console.log(numero13 !== numero14); // true - O valor é igual, mas os tipos são diferentes (Number e String)

var numero15 = 100; // Number
var numero16 = 100; // Number
console.log(numero15 !== numero16); // false - O valor e o tipo são iguais (Number e Number)

