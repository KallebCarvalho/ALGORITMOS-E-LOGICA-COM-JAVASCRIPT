//Condicional Else (Senão) ou (Outro)
//Else sempre tem que estar ligado a um if, ou seja, não pode existir um else sozinho, 
// ele sempre vai depender de um if para ser executado.

var idade = 17;
if (idade >= 18){
    console.log("Você é maior de idade");
}else{ //Else não precisa de condição. Porque o Else vai apenas juntar com a condição do if.
    console.log("Você é menor de idade");// Sempre será um bloco de código que se junta com o if.
}
//Explicação do código acima:
// A idade é 17, então a condição do if é se ele for maior ou igual a 18.
// Como nesse caso ele não é, o bloco de código dentro do else será executado
// A mensagem "Você é menor de idade" será exibida no console.
// Observação: O Else não pode ser executado sozinho, ele sempre precisa de um if para ser executado.
