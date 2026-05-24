export function iniciarOuvinteMenuLateral(){
    const btnMenuHamburguer = document.querySelector("#menu-hamburguer");
    const menuLateral = document.querySelector(".menu-lateral");
    const botaoFechar = document.querySelector("#botao-fechar");
    const backdropFilter = document.querySelector(".backdrop-glass");

    btnMenuHamburguer.addEventListener("click",function(){
        menuLateral.style.display = "block";

        setTimeout(function(){
            backdropFilter.style.display = "flex";

            menuLateral.style.transform = "translateX(0)";
            menuLateral.style.backdropfilter = "blur(1px)"
        },100)
    })

    botaoFechar.addEventListener("click",function(){
        menuLateral.style.transform = "translateX(-120%)";
        backdropFilter.style.display = "none";
        
        setTimeout(function(){
            menuLateral.style.display = "none";
        },500)
    })

    document.addEventListener("click", function(event){
        if(event.target === backdropFilter){
            menuLateral.style.transform = "translateX(-120%)";
            
            setTimeout(function(){
            menuLateral.style.display = "none";
            backdropFilter.style.display = "none";
        },500)
    }
})
}