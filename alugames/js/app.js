function alterarStatus(id) {
    const botao = document.querySelector(`#game-${id} a`);
    const imgBotao = document.querySelector(`#game-${id} .dashboard__item__img`);
    const classesDoBotao = botao.classList;


    if(classesDoBotao.contains("dashboard__item__button--return") && imgBotao.classList.contains("dashboard__item__img--rented")) {
        botao.classList.remove("dashboard__item__button--return");
        imgBotao.classList.remove("dashboard__item__img--rented")
        botao.textContent = "Alugar";
    } else {
        botao.classList.add("dashboard__item__button--return");
        imgBotao.classList.add("dashboard__item__img--rented");
        botao.textContent = "Devolver";
    }
}