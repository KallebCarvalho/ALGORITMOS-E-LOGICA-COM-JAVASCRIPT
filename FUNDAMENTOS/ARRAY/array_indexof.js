//indexOf é uma função que retorna o índice do primeiro elemento que corresponde ao valor informado.
//Join é uma função que junta os elementos de um array em uma string.

const nomes = ["João", "Maria", "Pedro", "José", "Carlos", "Ana"];
console.log(nomes);

// APLICANDO JOIN
console.log(nomes.join(", "));

/* O join serve para unir os elementos de uma lista.
Pega cada item de um array.Transforma a lista em um texto só.
Usa o caractere que você colocar nos parênteses para separar os itens. 
Se você não colocar nada, usa a vírgula por padrão
*/


//INDEXOF
const listaNomes = nomes.indexOf("José");
console.log(listaNomes); 

//O que faz o indexOf?
//O indexOf serve para buscar um valor.Procura o item do primeiro ao último.
//Retorna o número do índice (a posição) do item.
//Retorna -1 se o item não estiver lá.
//Funciona em listas (arrays) e em textos (strings).
 
//Exemplo com lista:
frutas = ["maçã", "banana", "uva"];
console.log(frutas.indexOf("banana")); // Mostra: 1
console.log(frutas.indexOf("pera"));   // Mostra: -1 pois não existe