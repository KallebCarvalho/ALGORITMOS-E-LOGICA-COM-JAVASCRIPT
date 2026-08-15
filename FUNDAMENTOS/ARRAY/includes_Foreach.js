// INCLUDES verifica se existe  o item  no array e devolve verdadeiro ou falso.

//const nomes = ["Joao", "Maria", "Pedro", "Carlos", "Ana"];

//const verificaNome = nomes.includes("Joao");

//console.log(verificaNome);


//FOREACH uma maneira mais simples e rápida de percorrer um array

//const nomes = ["Joao", "Maria", "Pedro", "Carlos", "Ana"];

//nomes.forEach((nome) => {
    //console.log("Passou aqui..." + nome);
//})

const valores = [100, 200, 300, 400, 500];
valores.forEach((valor) => { //isso se chama de callback function
    const conta = valor + 100;
    console.log("O valor ajustado é: " + conta);
})