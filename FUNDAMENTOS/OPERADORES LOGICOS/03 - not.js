// Operador NOT (!)
// Retorna true se o valor for false, caso contrário retorna false
// O operador NOT é usado para inverter o valor lógico de uma expressão.
// Ele faz a negação do valor booleano
// ou seja, se o valor for true, ele se torna false, e se for false, ele se torna true.

var valor1 = true;
console.log(!valor1);
// Saída: false - O valor original é true, então o operador NOT inverte para false

var valor2 = false;
console.log(!valor2);
// Saída: true - O valor original é false, então o operador NOT inverte para true

//Dupla negação - usado para converter um valor para booleano
var valor3 = 0;
console.log(!!valor3);
// Saída: false - O valor 0 é considerado falso, então a dupla negação retorna false

var valor4 = "Hello";
console.log(!!valor4);
// Saída: true - A string não vazia é considerada verdadeira, então a dupla negação retorna true