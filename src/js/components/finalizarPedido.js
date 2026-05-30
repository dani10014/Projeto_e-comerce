export function ouvinteFinalizarPedido(){
    const botaoFinalizarCompra = document.querySelector(".botao-carrinho");
    const menuFinalizacaoPagamento = document.querySelector("#container-finalizar");
    const fundoBorrado = document.querySelector(".backdrop-glass");
    const containerBotaoFinaizar = document.querySelector(".botao-finalizar-compra");

    if(botaoFinalizarCompra){
        /**Botão abrir menu */
            botaoFinalizarCompra.addEventListener("click", function(){

            const btnProsseguir = document.querySelector("#btn-prosseguir-pagamento");
                menuFinalizacaoPagamento.style.display = "block"
            setTimeout(function(){
                menuFinalizacaoPagamento.classList.add("menu-ativo");
            },200)
                fundoBorrado.style.display = "flex";
                containerBotaoFinaizar.style.transform = "translateY(120%)";
            setTimeout(function(){
                containerBotaoFinaizar.style.display = "none";
            },200)
        })
    }
         /**Jquery para mascarar os campos */
        $("#cep").mask("00000-000");
        
            let espacoCep = document.querySelector("#cep");
            let btnBuscarCep = document.querySelector("#btn-buscar-cep");
            let espacoCidade = document.querySelector("#cidade");
            let espacoNumeroCasa = document.querySelector("#numero");
            let espacoComplemento = document.querySelector("#complemento");
            let espacoUf = document.querySelector("#uf");
            let btnProsseguir = document.querySelector("#btn-prosseguir-pagamento");
            
            espacoUf.readOnly = true
            espacoCidade.readOnly = true

            /*APi Viacepbr e preenchimento de campos */
            btnBuscarCep.addEventListener("click",function(){

                if(espacoCep.value.trim() === ""){
                    alert("Nada presente nos campos de cep");
                    return
                }

                const xht = new XMLHttpRequest();
                
                const endPoint = `https://viacep.com.br/ws/${espacoCep.value.trim()}/json/`;

                xht.open("GET",endPoint);

                xht.onload = function(){
                    if(xht.status === 200){
                        const resposta = JSON.parse(xht.responseText)

                    if (resposta.erro) {
                        alert("CEP não encontrado!");
                        return;
                    }
                        espacoCidade.value = resposta.localidade;
                        espacoUf.value = resposta.uf;

                    }else{
                        alert("Erro ao conectar com o serviço de CEP.");
                    }
                }
                xht.send()
            })

            /** Coleta de selecão de forma pagamento**/
            const formasPagamento = document.querySelectorAll(".botao-opcao-pagamento");
            formasPagamento.forEach(forma => {
                forma.addEventListener("click",function(){

                    formasPagamento.forEach(botao => botao.classList.remove("botao-ativo-pagamento"))

                    forma.classList.add("botao-ativo-pagamento")
                })
            })
            

            btnProsseguir.addEventListener("click",function(event){
                event.preventDefault();
                if(espacoCep.value === "" || espacoCidade.value === "" || espacoComplemento.value === "" || espacoNumeroCasa.value === ""){
                    alert("Preencha todos os campos")
                    return;
                }
                
                    
            })
            const botaoFecharMenu = document.querySelector(".btn.btn-close");

            botaoFecharMenu.addEventListener("click",function(){
                menuFinalizacaoPagamento.classList.remove("menu-ativo");
                espacoCep.value = "";
                espacoComplemento.value = "";
                espacoCidade.value = "";
                espacoNumeroCasa.value = "";
                espacoUf.value = "";
                fundoBorrado.style.display = "none";
                containerBotaoFinaizar.style.display = "flex";
                formasPagamento.forEach(botao => botao.classList.remove("botao-ativo-pagamento"))
            setTimeout(function(){
                menuFinalizacaoPagamento.style.display = "none";
                containerBotaoFinaizar.style.transform = "translateY(0)";
            },200)

            })
    }