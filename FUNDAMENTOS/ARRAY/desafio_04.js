// DESAFIO 04
// Crie um array com esses numeros: [6, 12, 5, 9, 14, 27]
// Você deve devolver um array com todos os numeros que são multiplos de 3


// Passo 01 - Criar um array com os números

const numeros = [6, 12, 5, 9, 14, 27];
console.log(numeros);

// Passo 02 - Criar um array vazio
let numerosMultiplosde3 = [];

// Passo 03 - Percorrer cada elemento do array e verificar se ele é multiplo de 3

numeros.forEach((numeros) => { 
    if (numeros % 3 === 0){
    //Se o numero for multiplo de 3 e estritamente igual a 0 então ele é multiplo de 3.
        numerosMultiplosde3.push(numeros);
        //Push coloco um elemento dentro de um array.
      
    }

})
  console.log(`Lista de números que são multiplos de 3: ${numerosMultiplosde3}`);