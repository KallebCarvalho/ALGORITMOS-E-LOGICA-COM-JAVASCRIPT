// DESAFIO 03
// Crie um array com esses numeros: [5, 10, 15, 20, 25, 30]
// Você deve devolver qual é a soma de todos esses numeros usando foreach

const numeros = [5, 10, 15, 20, 25, 30];
let soma = 0;
numeros.forEach((numero)=> {
    soma = soma + numero
//ForEach percorre cada elemento presente na lista(Array). 
})

console.log(`A soma total da lista é: ${soma}`);