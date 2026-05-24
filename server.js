import { MercadoPagoConfig, Payment } from "mercadopago";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Carrega as variáveis do arquivo .env
dotenv.config();

const app = express();

// Configurações do Servidor
app.use(express.json()); // Permite que o servidor entenda JSON enviado pelo site
app.use(cors());         // Libera o acesso para o seu Front-End se conectar aqui

// Inicializa o Mercado Pago com seu Token do arquivo .env
const client = new MercadoPagoConfig({
    accessToken: process.env.ACCESS_TOKEN,
    options: { timeout: 5000 }
});
const payment = new Payment(client);

// ROTA PRINCIPAL: O seu site vai disparar os dados para cá
app.post("/criar-pagamento", (req, res) => {
    // Pegamos o valor que o seu Front-End vai mandar do carrinho
    const { precoTotal } = req.body; 

    // Criamos o corpo do Pix usando o preço real vindo do site
    const body = {
        transaction_amount: Number(precoTotal), // O valor do carrinho se torna o valor do Pix
        description: "Compra na loja EchoModa",
        payment_method_id: "pix",
        payer: {
            email: "comprador_teste@email.com",
            first_name: "João",
            last_name: "Silva",
            identification: {
                type: "CPF",
                number: "12345678909"
            }
        }
    };

    // Dispara para o Mercado Pago
    payment.create({ body })
        .then((resultado) => {
            // Se der certo, respondemos para o seu site com os dados do Pix
            res.json({
                sucesso: true,
                copiaECola: resultado.point_of_interaction.transaction_data.qr_code,
                qrCodeLink: resultado.point_of_interaction.transaction_data.ticket_url
            });
        })
        .catch((erro) => {
            console.error("Erro no Mercado Pago:", erro);
            res.status(500).json({ sucesso: false, erro: erro.message });
        });
});

// Liga o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor do EchoModa rodando liso na porta ${PORT}!`);
    console.log(`Aguardando conexões do site...`);
});