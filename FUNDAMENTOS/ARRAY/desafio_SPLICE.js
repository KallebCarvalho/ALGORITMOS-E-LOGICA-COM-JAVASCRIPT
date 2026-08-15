//DESAFIO 01
//Neste desafio crie um array com alguns cargos de uma empresa (por exemplo, "fullstack", "frontend", "backend", "mobile") 
//Você precisa remover o cargo "backend" da lista de cargos pois esse cargo não está mais disponivel na empresa.


// 1 - Montar a minha lista (array) de cargos
// 2 - Remover o cargo "Backend" da lista de cargos

const cargos = ["Fullstack", "Frontend", "Backend", "Mobile", "Dados"];
console.log(cargos);

const posicaoCargo = cargos.indexOf("Backend"); //Encontrar o cargo "Backend" na lista de cargos
console.log(posicaoCargo);
cargos.splice(2, 1); //Remover o cargo "Backend" da lista de cargos posição 2 (indice 2) quantidade de elementos 1
console.log(cargos);

//Explicação: 
//Foi removido o cargo "Backend" da lista de cargos usando o método splice() da array.
//O primeiro parâmetro é o índice do elemento que será removido ou seja (2), 
//O segundo parâmetro é o número de elementos que serão removidos a partir daquela posição.

//SLPICE é uma função que permite alterar o tamanho do array.
//INDEX (Indice) é o índice do elemento que será removido.

