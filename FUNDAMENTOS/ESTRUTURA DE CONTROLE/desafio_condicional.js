//Neste desafio trata-se de calcular a média de um aluno e saber se ele está aprovado ou de exame.
//Realizar o desafio usando os operadores de condição.

var nota1 = 5.0; var nota2 = 7.0; var nota3 = 8.0
var notaFinal = (nota1 + nota2 + nota3) / 3;
//A variavel notaFinal vai fazer o calculo da média dos três valores e armazenar o resultado em uma variavel.
//Primeiro vai calcular as notas dentro dos parenteses e depois vai dividir a soma pelo número de notas.

console.log(notaFinal.toFixed(1));

if(notaFinal >= 7){
console.log(`Parabéns está aprovado`);
}else if (notaFinal < 7){
    console.log("Que pena você está de exame");

}

//Explicação do código
//Como a divisão por 3 gera uma dízima periódica (6.66666...), o número exibido no console fica muito longo. 
//Você pode usar o método .toFixed(1) para limitar o resultado a uma casa decimal:

// Exibe a nota formatada como "6.7"
// console.log(notaFinal.toFixed(1));
// Observação: a nota de exame não é de 7 pontos, então não há necessidade de usar o método .toFixed(1)