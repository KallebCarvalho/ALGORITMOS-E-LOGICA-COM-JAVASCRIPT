//Aprendendo a usar metodos com objetos
//Objetos
const aluno = {
    nome: "João",
    idade: 20,
    salario: 1000,
    carreira: "Engenheiro",
    saudacao: function () {
        console.log("Olá eu sou o João");
    }
}

console.log(aluno);
aluno.saudacao();

//COMANDOS 
// this é um comando que retorna o objeto atual
// console.log(this);
// console.log(this.nome);
// console.log(this.idade);
// console.log(this.salario);
// console.log(this.carreira);

// this.nome = "João";
// this.idade = 20;
// this.salario = 1000;
// this.carreira = "Engenheiro";

// console.log(this);
// console.log(this.nome);
// console.log(this.idade);
// console.log(this.salario);
// console.log(this.carreira);

//Métodos
aluno.saudacao = function () {