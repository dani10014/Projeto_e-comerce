export function ouvinteFinalizarPedido(){
    const botaoFinalizarCompra = document.querySelector(".botao-carrinho");
    const menuFinalizacaoPagamento = document.querySelector("#container-finalizar");
    const fundoBorrado = document.querySelector(".backdrop-glass");
    const containerBotaoFinaizar = document.querySelector(".botao-finalizar-compra");

    if(botaoFinalizarCompra){
        botaoFinalizarCompra.addEventListener("click", function(){
            menuFinalizacaoPagamento.classList.add("menu-ativo");
            fundoBorrado.style.display = "flex";
            containerBotaoFinaizar.style.transform = "translateY(120%)";
            setTimeout(function(){
                containerBotaoFinaizar.style.display = "none";
            },200)

            const botaoFecharMenu = document.querySelector(".btn.btn-close");
            botaoFecharMenu.addEventListener("click",function(){
                menuFinalizacaoPagamento.classList.remove("menu-ativo");
                fundoBorrado.style.display = "none";
                containerBotaoFinaizar.style.display = "flex";
            setTimeout(function(){
                containerBotaoFinaizar.style.transform = "translateY(0)";
            },200)
            })

    })
}
}