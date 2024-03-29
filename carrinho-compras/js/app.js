const listaDeProdutos = document.getElementById("lista-produtos");
const elementoQuantidade = document.getElementById("quantidade");
let total = document.querySelector(".carrinho__total");
let preco = 0;

atualizarPreco();
limparLista();
function atualizarPreco() {
    total.innerHTML = `
        Total: <span class="texto-azul" id="valor-total">R$${preco}</span>
    `
}

function limparLista() {
    listaDeProdutos.innerHTML = "";
    elementoQuantidade.innerHTML = "";
}

function adicionar() {
    let produto = document.getElementById("produto").value;
    let quantidade = elementoQuantidade.value;
    let nomeProduto = produto.split("-")[0];
    let precoProduto = parseInt(produto.split("R$")[1]);
    let totalProduto = precoProduto * quantidade;

    if (quantidade > 0 ) {
        listaDeProdutos.innerHTML += `
            <section class="carrinho__produtos__produto">
                <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${precoProduto}</span>
            </section>
        `
    }else {
        alert("A quantidade prescisa ser maior que 0");
    }

    preco += totalProduto;
    atualizarPreco();
} 

function limpar() {
    preco = 0;
    limparLista()
    atualizarPreco();
}