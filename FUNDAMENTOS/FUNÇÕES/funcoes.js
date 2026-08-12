//Aprendendo sobre Funções
//Função é um bloco de código que executa um conjunto de instruções.
//Reutilização de código -- Modularidade -- Abstração -- Depuração


function mostrarNome(){
    console.log("Olá seja bem vindo ao mundo do JavaScript");
    console.log("Você é capaz de aprender sobre o mundo da programação?");
}

mostrarNome(); 
//Executando a função monstrarNome "Chamando" a função

function gerarNumeroAleatorio(){
    return Math.random();
    console.log("O número gerado é: " + Math.random);

}

var numeroAleatorio = gerarNumeroAleatorio();
console.log("O número gerado é: " + numeroAleatorio);

//Função gerarNumeroAleatorio() retorna um número aleatório
//Função gerarNumeroAleatorio() retorna o valor da função Math.random()
//Função gerarNumeroAleatorio() retorna o valor da variável numeroAleatorio
