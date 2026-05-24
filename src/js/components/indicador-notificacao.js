export function indicarProdutosNoCarrinhoEFavoritos(){
    const indicadorFavorito = document.querySelectorAll(".indicador-favoritos");
    const indicadorCarrinho = document.querySelector(".indicador-carrinho");
    
    const produtosFavoritos = JSON.parse(localStorage.getItem("meusFavoritos")) || [];
    const produtosCarrinho = JSON.parse(localStorage.getItem("produtosCarrinho")) || [];
    
    if (produtosFavoritos.length < 1) {
        if (indicadorFavorito) {
            indicadorFavorito.forEach(ponto => {
                ponto.style.display = "none";
            });   
        }
    } else {
        if (indicadorFavorito) {
            indicadorFavorito.forEach(ponto => {
                ponto.style.display = "flex";
            });  
        }
    }

    if (produtosCarrinho.length < 1) {
        if (indicadorCarrinho) {
            indicadorCarrinho.style.display = "none";
        }
    } else {
        if (indicadorCarrinho) {
            indicadorCarrinho.style.display = "flex"; 
        }
    }
}