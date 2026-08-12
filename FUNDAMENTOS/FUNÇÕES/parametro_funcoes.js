//Funções com parâmetros

nota1 = 10;
nota2 = 10;
nota3 = 7;
const nome = "João";
function calcularMedia(nota1, nota2, nota3){
    let media = (nota1 + nota2 + nota3) / 3;   
    return `O aluno ${nome} tem média ${media} nas suas avaliações de notas`;

}
console.log(calcularMedia(nota1, nota2, nota3));

