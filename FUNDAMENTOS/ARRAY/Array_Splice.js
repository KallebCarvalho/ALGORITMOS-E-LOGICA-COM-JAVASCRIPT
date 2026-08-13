//Splice é uma função que permite alterar o tamanho do array.
//INDEX (Indice) é o índice do elemento que será removido.
//QUANTIDADE: O numero de elementos que serão removidos a partir daquela posição.
//NOVOS ELEMENTOS: Elementos que serão adicionados na posição do INDEX.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros.splice(4, 4);
console.log(numeros);

//Splice é uma função que permite alterar o tamanho do array.

const nomes = ["João", "Maria", "Pedro", "José", "Carlos", "Ana"];
console.log(nomes);

nomes.splice(2, 2, "João");
console.log(nomes);