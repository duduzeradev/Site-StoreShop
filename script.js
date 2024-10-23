// Simulação de um carrinho de compras
let carrinho = 0;

// Função para adicionar item ao carrinho
function adicionarAoCarrinho(produto) {
    carrinho++;
    alert(`${produto} foi adicionado ao carrinho!`);
    atualizarCarrinho();
}

// Função para atualizar o contador do carrinho
function atualizarCarrinho() {
    const contadorCarrinho = document.querySelector("#contador-carrinho");
    contadorCarrinho.innerText = carrinho;
}

// Funções para navegação dos botões do menu
function navegarPara(pagina) {
    alert(`Você clicou em ${pagina}!`);
}

// Seleciona todos os botões de compra e adiciona os eventos de clique
const botoesComprar = document.querySelectorAll(".produto button");

botoesComprar.forEach((botao) => {
    botao.addEventListener("click", (evento) => {
        const produto = evento.target.parentElement.querySelector("h3").innerText;
        adicionarAoCarrinho(produto);
    });
});

// Eventos de navegação no menu
const botoesMenu = document.querySelectorAll("nav ul li button");

botoesMenu.forEach((botao) => {
    botao.addEventListener("click", (evento) => {
        const pagina = evento.target.innerText;
        navegarPara(pagina);
    });
});
