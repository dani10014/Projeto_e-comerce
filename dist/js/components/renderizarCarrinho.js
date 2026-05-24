function inicarRenderizacaoProdutosCarrinhos(){var e=document.querySelector(".valor-total");let n=JSON.parse(localStorage.getItem("produtosCarrinho"))||[],a=document.querySelector(".base-cards-carrinho"),t=document.querySelector(".botao-finalizar-compra");if(a.innerHTML="",n.length<1)a.innerHTML='<p class="text-center text-light mb-0">Nada no carrinho</p>',e.innerText="R$ 0",t.style.transform="translateY(120%)",setTimeout(function(){t.style.display="none"},200);else{t.style.display="flex",setTimeout(function(){t.style.transform="translateY(0)"},200),n.forEach(e=>{var t=document.createElement("div");t.innerHTML=`
            <div class='card' data-id="${e.id}">
                <img src='${e.imagem}'>
                <div class='card-body'>
                    <h5 class='card-title'>${e.nome}</h5>
                    <h3 class="valor">${e.valor}</h3>
                    <h5 class="mb-0 mt-3">Tamanho:</h5>
                    <h4 class="tamanho">${e.tamanho}</h4>
                    <h5 class="mb-0 mt-3">Cor:</h5>
                    <h4 class="cor">${e.cor}</h4>
                    <h5 class="mb-0 mt-3">Quantidade:</h5>
                    <h4 class="quantidade">${e.quantidade}</h4>
                </div>
                <div class="botao-remover">
                    <button class="botao-remover__botao">
                        Remover
                    </button>
                </div>
            </div>`,a.appendChild(t)});var o=document.querySelectorAll(".card");let r=0;o.forEach(e=>{var t=e.querySelector(".card-body h3").innerText,e=e.querySelector(".card-body .quantidade").innerText,t=parseFloat(t.replace("R$ ","")),e=parseFloat(e),t=t*parseInt(e);r+=t}),e.innerText="R$ "+r.toFixed(2).replace(".",","),document.querySelectorAll(".botao-remover__botao").forEach(t=>{t&&t.addEventListener("click",e=>{e.stopPropagation();let o=t.closest(".card");o.style.transition="opacity 0.5s ease",o.style.opacity="0",setTimeout(function(){let t=o.querySelector(".card-body .cor").innerText,r=o.querySelector(".card-body .tamanho").innerText,a=o.dataset.id;var e=n.filter(e=>!(String(e.id)===String(a)&&String(e.tamanho)===String(r)&&String(e.cor)===String(t)));n=e,localStorage.setItem("produtosCarrinho",JSON.stringify(n)),inicarRenderizacaoProdutosCarrinhos()},500)})})}}export{inicarRenderizacaoProdutosCarrinhos};