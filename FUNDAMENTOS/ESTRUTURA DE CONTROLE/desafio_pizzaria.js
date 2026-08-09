//Neste desafio vamos criar um programa que vai calcular o preço de uma pizzaria para pedidos de pizza.
//A ideia é calcular o valor da pizza e definir se o frete é gratis ou não.



//PIZZARIA PIZZA PLANET 
const sabores = ["Baiana", "Lombo ao Creme", "Portuguesa", "4 Queijos", "Carne Seca"];
const precos = [29.90, 58.90, 79.90, 129.90, 110.90];

// Exemplo: testando para o sabor "4 Queijos"
const saborSelecionado = "Baiana"; 
let freteGratis = true;

if (saborSelecionado === "Lombo ao Creme" || saborSelecionado === "4 Queijos" || saborSelecionado === "Carne Seca"){
    freteGratis = true;
    console.log(`Parabéns você ganhou frete grátis para a pizza ${saborSelecionado}`);
}else if (saborSelecionado === "Baiana" || saborSelecionado === "Portuguesa"){
    freteGratis = false;
    console.log(`Que pena não temos frete grátis para a pizza ${saborSelecionado}`);
}

