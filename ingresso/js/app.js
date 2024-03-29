let pista = 100;
let superior = 200;
let inferior = 400;

const quantidadePista = document.getElementById("qtd-pista");
const quantidadeSuperior = document.getElementById("qtd-superior");
const quantidadeInferior = document.getElementById("qtd-inferior");

quantidadePista.textContent = pista;
quantidadeInferior.textContent = inferior;
quantidadeSuperior.textContent = superior;

function comprar() {
    let tipoDoIngresso = document.getElementById("tipo-ingresso").value;
    let quantidade = parseInt(document.getElementById("qtd").value);

    const elementoIngresso = document.getElementById(`qtd-${tipoDoIngresso}`);

    if (quantidade > elementoIngresso.textContent) {
        alert("quantidade não permitida");
    }else {
        let ingressosComprados = elementoIngresso.textContent - quantidade;
        elementoIngresso.textContent = ingressosComprados;
    }

    document.getElementById("qtd").value = "";
}