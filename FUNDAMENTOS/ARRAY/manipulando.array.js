//push => adiciona um elemento ao final do array.
//pop => remove o último elemento do array.
//unshift =>  adiciona um elemento no início do array.
//shift => remove o primeiro elemento do array.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Const não permite modificar o valor do array.
//Não pode ser mudada após a declaração.
console.log(numeros);

numeros.pop();
console.log(numeros);

numeros.unshift(222);
console.log(numeros);

numeros.shift();
console.log(numeros);