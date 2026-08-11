//Condicional Else if (Senão se)
//Else if é usado quando queremos verificar mais de uma condição

//Neste exemplo vou usar o else if para verificar a classificação de idade filmes.

const idade = 9;
if (idade >= 14 && idade < 16){
    console.log(`Este filme é indicado para maiores de 14 anos, contém cenas de violência`);
}else if( idade>= 16 && idade < 18  &&  idade >= 25) {
    //Else If precisa de uma condição, então o else if é usado quando queremos verificar mais de uma condição
    console.log(`Este filme é indicado para maiores de 16 anos, contém cenas de violência e drogas`);
}else (idade <= 10 );{
    console.log(`Este filme é indicado para todos os públicos, contém classificação livre de cenas de violência, sexo e drogas`);
}

//Explicação do código acima:
// A idade é 9, então a condição do if é se ele for maior ou igual a 14 e menor que 16.
// Como nesse caso ele não é, o bloco de código dentro do else if será verificado.
// A condição do else if é se ele for maior ou igual a 16 e menor que 18 e maior ou igual a 25.
// Como nesse caso ele não é, o bloco de código dentro do else será executado.
// A mensagem "Este filme é indicado para todos os públicos, contém classificação livre de cenas de violência, sexo e drogas" será exibida no console.
// Observação: O Else if é usado quando queremos verificar mais de uma condição, e o Else é usado quando nenhuma das condições anteriores foram atendidas
// Foram usados os operadores logicos And. 
