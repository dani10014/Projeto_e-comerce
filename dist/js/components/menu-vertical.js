import{indicarProdutosNoCarrinhoEFavoritos}from"./indicador-notificacao.js";function IniciarMenuVertical(){var e=document.querySelectorAll(".card"),o=document.querySelectorAll(".botao-favoritos i"),a=document.querySelectorAll(".carousel-control-prev, .carousel-control-next");a&&a.forEach(e=>{e.addEventListener("click",e=>{e.stopPropagation()})}),o&&o.forEach(e=>{e.addEventListener("click",e=>{e.stopPropagation()})}),e.forEach(d=>{d.addEventListener("click",async e=>{let o=document.querySelector(".menu-vertical");var a=d.dataset.id,t=d.querySelector(".card-body h3").innerText;console.log(a),console.log(t),o.style.display="block",o.style.maxHeight="100vh",o.style.overflowY="auto",document.body.style.overflow="hidden",setTimeout(function(){o.style.transform="translateX(0)"},500);let r=await(async e=>{try{var a=await(await fetch("./../produtos.json")).json();let o=Number(String(e).replace(/\D/g,""));return a.find(e=>Number(e.id)===o)}catch(e){console.error("Erro ao filtrar dados:",e)}})(a);r&&console.log("Descrição vindo do JSON:",r.descricao),o.innerHTML=`
            <div class='container py-4'>
                <div class='menu-vertical__cabecalho'>
                    <button class='btn-close' id='menu-vertical-fechar'></button>
                    <h5 class='menu-vertical__cabecalho__nome-loja'>Echo Moda</h5>
                </div>

                <div class='menu-vertical__imagens-produto'>
                    <div id="carouselExampleCaptions" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="${r.imagem}" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-block d-md-block">
                                <h5>${r.caption}</h5>
                                <p>${r.preco}</p>
                            </div>
                    </div>
                    <div class="carousel-item">
                            <img src="${r.imagem2}" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-block d-md-block">
                                <h5>${r.caption2}</h5>
                                <p>${r.preco}</p>
                            </div>
                    </div>
                    <div class="carousel-item">
                            <img src="${r.imagem3}" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-block d-md-block">
                                <h5>${r.caption3}</h5>
                                <p>${r.preco}</p>
                            </div>
                    </div>
                    </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div class='menu-vertical__corpo-produto'>
                    <div class='container'>
                        <p class="marca-produto">
                            ${d.querySelector(".card-body .card-title")?.innerText||"Marca"}
                        </p>
                        <h2 class="nome-produto">${r.nome}</h2>
                        <h2 class="valor-produto">R$ ${r.preco}</h2>

                        <div class="texto-cor">
                            <div class="container-cor">Cor</div>
                            <div class="container-tamanho">Tamanho</div>
                        </div>

                        <div class="selecao-de-cor-e-tamanho" style="display: flex; justify-content: space-between; gap: 2rem;">
                            <div class="selecao-de-cor">
                                <button class="botoes-selecao-cores" id="cor-1"></button>
                                <button class="botoes-selecao-cores" id="cor-2"></button>
                                <button class="botoes-selecao-cores" id="cor-3"></button>
                                <button class="botoes-selecao-cores" id="cor-4"></button>
                            </div>
                            <div class="selecao-de-tamanho">
                                <button class="botoes-selecao-tamanho" id="tam-1">P</button>
                                <button class="botoes-selecao-tamanho" id="tam-2">M</button>
                                <button class="botoes-selecao-tamanho" id="tam-3">G</button>
                                <button class="botoes-selecao-tamanho" id="tam-4">GG</button>
                            </div>
                        </div>

                        <h5 class="menu-vertical__texto-descricao-produto">Descrição do produto</h5>
                    </div>
                </div>
            </div>

            <div class="botao-adicionar-carrinho">
                <div class="botao-mais-e-menos">
                    <i class="fa-solid fa-minus"></i>
                    <span class="quantidade">1</span>
                    <i class="fa-solid fa-plus"></i>
                </div>
                <div class="botao-carrinho">Adicionar ao carrinho</div>
            </div>`;var t=o.querySelector("#cor-1"),a=o.querySelector("#cor-2"),s=o.querySelector("#cor-3"),c=o.querySelector("#cor-4");t.style.backgroundColor=r.cor1,a.style.backgroundColor=r.cor2,s.style.backgroundColor=r.cor3,c.style.backgroundColor=r.cor4;let l=o.querySelectorAll(".botoes-selecao-cores"),i=(l.forEach(o=>{o.addEventListener("click",e=>{l.forEach(e=>e.classList.remove("active")),o.classList.add("active")})}),o.querySelectorAll(".botoes-selecao-tamanho"));i.forEach(o=>{o.addEventListener("click",e=>{i.forEach(e=>e.classList.remove("active")),o.classList.add("active")})});t=o.querySelector(".fa-plus"),a=o.querySelector(".fa-minus");let n=o.querySelector(".quantidade");t.addEventListener("click",()=>{var e=parseInt(n.innerText);e++,n.innerText=e}),a.addEventListener("click",()=>{var e=parseInt(n.innerText);e--,(n.innerText=e)<1&&(n.innerText=1)}),document.querySelector(".botao-carrinho").addEventListener("click",()=>{var o=JSON.parse(localStorage.getItem("produtosCarrinho"))||[],a=d.dataset.id,t=document.querySelector(".botoes-selecao-cores.active"),s=document.querySelector(".botoes-selecao-tamanho.active"),c=parseInt(n.innerText);if(null!==t&&null!==s){a={id:a,nome:r.nome,cor:t.style.backgroundColor,tamanho:s.innerText,valor:r.preco,imagem:r.imagem,quantidade:c};o.push(a),localStorage.setItem("produtosCarrinho",JSON.stringify(o)),indicarProdutosNoCarrinhoEFavoritos();let e=document.querySelector(".confirmacao-adicao-carrinho");e.style.display="flex",setTimeout(function(){e.querySelector(".container").style.transform="translateY(0)"},200),setTimeout(function(){e.querySelector(".container").style.transform="translateY(130%)",setTimeout(function(){e.style.display="none"},600)},1e3)}}),document.querySelector("#menu-vertical-fechar").addEventListener("click",()=>{o.style.transform="translateY(100%)",document.body.style.overflow="auto",document.body.style.height="",setTimeout(function(){o.style.display="none"},500)})})})}export{IniciarMenuVertical};