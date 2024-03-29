const elementoResultado = document.querySelector("#resultado .texto__paragrafo");
const inputQuantidadeDeNumeros = document.getElementById("quantidade");
const inputNumeroMinimo = document.getElementById("de");
const inputNumeroMaximo = document.getElementById("ate");
elementoResultado.innerHTML = "Números sorteados:  nenhum até agora";

function alternarBotao() {
    const botaoDesabilitado = document.getElementById("btn-reiniciar");
    let classeDoBotao = botaoDesabilitado.classList;
    let alternarClasse = classeDoBotao[0] === "container__botao-desabilitado" ? "container__botao" : "container__botao-desabilitado";
    
    botaoDesabilitado.classList.value = alternarClasse;
}

function limparFormulario() {
    inputQuantidadeDeNumeros.value = ""
    inputNumeroMaximo.value = ""
    inputNumeroMinimo.value = ""
}

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo;
}

function sortear() {
    const quantidadeDeNumeros = parseInt(inputQuantidadeDeNumeros.value);
    const numeroMinimo = parseInt(inputNumeroMinimo.value);
    const numeroMaximo = parseInt(inputNumeroMaximo.value);

    let numerosGerados = [];

    while (numerosGerados.length < quantidadeDeNumeros) {
        const numeroGerado = Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo;

        if(!numerosGerados.includes(numeroGerado)) {
            numerosGerados.push(numeroGerado);
        }
    }

    elementoResultado.innerHTML = `Numeros sorteados: ${numerosGerados}`;
    alternarBotao();
}


function reiniciar() {
    alternarBotao();
    limparFormulario();
    elementoResultado.innerHTML = "Números sorteados:  nenhum até agora";
}