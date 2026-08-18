//DESAFIO: Criar um array de objetos que simule um carrinho de compras online.
//Criar uma lista de produtos e seus respectivos preços.
//Ao final calcular o total do carrinho.

const produtos =[
    {nome: "Tênis adidas", preco: 100},
    {nome: "Boné New Era", preco: 200},
    {nome: "Oculos Oakley", preco: 300},
]

let = totalCarrinho = 0;
 produtos.forEach((produtos) => {
    totalCarrinho += produtos.preco  
    
})

console.log(`Total do carrinho: ${totalCarrinho}`);