//Neste desafio vamos criar um programs que vai calcular o preço do frete de uma loja online.
//A ideia é calculas o valor do frete junto com o valor da compra.

//LOJA ONLINE 
const precoFrete = 15.00; // O preço do frete é fixo.
const produtosLoja = ["Tenis Adidas", "Tenis Nike", "Tenis Puma", "Tenis New Balance", "Boné New Era"];
const precosProdutosloja = [100.00, 125.00, 89.90, 112.00, 150.00];

//Aqui vamos inserir o produto escolhido pelo usuário da loja

var produtoSelecionado = "Tenis Adidas";
var freteGratis = false;
//Agora precisamos fazer o calculo do valor do frete e do valor da compra

if (produtoSelecionado === "Tenis Adidas" || produtoSelecionado === "Tenis Nike" || produtoSelecionado === "Tenis Puma"){
    freteGratis = false;
    console.log(`Que pena não temos cupom de frete grátis disponível para o produto ${produtoSelecionado}`);
}else if(produtoSelecionado === "Tenis New Balance" || produtoSelecionado === "Boné New Era"){
    freteGratis = true;
    console.log(`Parabéns você acaba de ganhar um cupom de frete grátis para o produto ${produtoSelecionado}`);
}

