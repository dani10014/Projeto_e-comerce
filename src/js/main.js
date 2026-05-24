import { buscarProdutos} from './components/criacao-de-cards.js';
import { iniciarCarroselSlick} from './components/carrosel-slick.js';
import { iniciarOuvinteMenuLateral } from './components/menu-lateral.js';
import { IniciarMenuVertical } from './components/menu-vertical.js';
import { ouvinteBotaoFavoritar } from './components/botaoFavoritar.js';
import { criarCardFavoritos } from './components/criacao-de-card-favoritos.js';
import { iniciarTrocaImagenOferta } from './components/troca-de-imagens-oferta.js';
import { inicarRenderizacaoProdutosCarrinhos } from './components/renderizarCarrinho.js';
import { filtrarProdutos } from './components/botao-filtrar-produtos.js';
import { indicarProdutosNoCarrinhoEFavoritos } from './components/indicador-notificacao.js';

if(document.querySelector(".produtos-camisas .container-base-card")){
    await buscarProdutos();
}

if(document.querySelector(".produtos-camisas .container-base-card")){
    iniciarCarroselSlick();
}

if(document.querySelector("#menu-hamburguer")){
    iniciarOuvinteMenuLateral();
    indicarProdutosNoCarrinhoEFavoritos()
}

if(document.querySelector(".botao-favoritos i")){
    ouvinteBotaoFavoritar();
}

if(document.querySelector(".card")){
    IniciarMenuVertical();
}

if(document.querySelector("#seta-voltar-home")){
    criarCardFavoritos();
}

if(document.querySelector(".bloco-ofertas")){
    iniciarTrocaImagenOferta();
}

if(window.location.pathname.includes("carrinho.html")){
    inicarRenderizacaoProdutosCarrinhos();
}

if(document.querySelector(".pesquisa__botao-filtrar")){
    filtrarProdutos();
}