//Neste desafio trata-se de calcular a média de um aluno e saber se ele está aprovado ou de exame.
//Realizar o desafio usando os operadores de condição.

var nota1 = 5.0; var nota2 = 7.0; var nota3 = 8.0
var notaFinal = (nota1 + nota2 + nota3) / 3;
console.log(notaFinal);

if(notaFinal >= 7){
console.log(`Parabéns está aprovado`);
}else if (notaFinal < 7){
    console.log("Que pena você está de exame");

}