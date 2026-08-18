//Conhecendo Array de Objetos

const funcionarios = [
    {
        nome: "João",
        idade: 25,
        cargo: "Desenvolvedor Junior",
    },
    {
        nome: "Mariana",
        idade: 30,
        cargo: "desenvolvedora plelo"

    },
    {
        nome: "Pedro",
        idade: 35,
        cargo: "Desenvolvedor Senior"
    }
]
console.log(funcionarios[0]);

funcionarios.forEach ((funcionarios) => {
    console.log(`Nome do funcionario: ${funcionarios.nome}`);
    console.log(`Idade do funcionario: ${funcionarios.idade}`);
    console.log(`Cargo do funcionario: ${funcionarios.cargo}`);
})
