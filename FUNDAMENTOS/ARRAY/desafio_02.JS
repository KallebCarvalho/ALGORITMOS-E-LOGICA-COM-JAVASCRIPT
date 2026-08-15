// DESAFIO 02
//Crie um array com os nomes abaixo:["Alice", "Lucas", "Carol", "David"];
//Você está procurando por um nome chamado Henrique caso o nome esteja na lista mostre no console
//qual a posição em que esse nome está na sua lista.
//Caso não encontre esse nome mostre no console o nome procurado e fale que não foi encontrado na lista.



// 1 - Montar a minha lista (array) de nomes
const nomes = ["Alice", "Lucas", "Carol", "David"];
console.log(nomes);

// 2 - Encontrar o nome "Henrique" na lista de nomes
const encontrarNome = nomes.indexOf("Henrique");
console.log(encontrarNome); // -1 pois o nome não está na lista


// 3 - Caso o nome esteja na lista mostre no console qual a posição em que esse nome está na sua lista.
if (encontrarNome !== -1){
//Se (if) encontrarNome for diferente(!==) de -1 então o nome está na lista
    console.log("O nome está na lista na posição:", encontrarNome);
}else{
    console.log("O nome Henrique não está presente nesta lista");
}

// 4 - Caso não encontre esse nome mostre no console o nome procurado e fale que não foi encontrado na lista. 


