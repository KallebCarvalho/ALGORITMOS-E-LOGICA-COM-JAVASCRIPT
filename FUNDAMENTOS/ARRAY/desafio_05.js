//DESAFIO 05

//Filtrar Palavras com Mais de 5 Letras usando foreach
//const palavras = ["gato", "cachorro", "elefante", "peixe", "leão"];
//Você deve devolver um array com todas palavras que possuem mais de 5 letras

//Passo 01 - Criar um array com as palavras
const palavras = ["gato", "cachorro", "elefante", "peixe", "leão", "Kalleb", "Luana","Benjamin"];
//Passo 02 - Criar uma lista(array) vazia
var palavrasMais5Letras = [];
// Passo 03 - Percorrer cada elemento presete na lista(array) e verificar se ele tem mais de 5 letras
palavras.forEach((palavra) => {
    if (palavra.length > 5){
    //Se a palavra tem mais de 5 letras então adicionar a lista (array).
     palavrasMais5Letras.push(palavra);
    }
})

console.log(`Estas são as palavras com mais de 5 letras: ${palavrasMais5Letras}, legal né?`);