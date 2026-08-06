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

