//FILTER AN FIND - Filtrar e Encontrar
// Filtrar é uma função que permite filtrar um array.
// FIND é uma função que permite encontrar um elemento dentro de um array.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const numerosFiltrados = numeros.filter((numero) => {
    if (numero % 2 === 0){
        return numero;
    }
});
console.log(numerosFiltrados);

const numero = numeros.find((numero) => {
    if (numero % 2 === 0){
        return numero;
    }
});
console.log(numero);

// FIND é uma função que permite encontrar um elemento dentro de um array.

const nomes = ["João", "Maria", "Pedro", "José", "Carlos", "Ana"];
console.log(nomes);

const nome = nomes.find((nome) => {
    if (nome === "Pedro"){
        return nome;
    }
});
console.log(nome);

//Filtrar é uma função que permite filtrar um array.

const nomesFiltrados = nomes.filter((nome) => {
    if (nome === "Pedro"){
        return nome;
    }
});
console.log(nomesFiltrados);