//Switch(Casos)
//Switch é usado quando você precisa executar um bloco de código diferente de acordo com o valor de uma variável.

//Exemplo 1:
let numero = 1;
switch (numero) {
    case 1:
        console.log("1 é igual a 1");
        break;
    case 2:
        console.log("2 é igual a 2");
        break;
    case 3:
        console.log("3 é igual a 3");
        break;// Break encerra o bloco de código
    default:
        console.log("Número não encontrado");
}

//Switch é usado quando existe muitos encadeamentos de ifs
 