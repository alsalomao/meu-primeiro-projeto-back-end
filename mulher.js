const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response){

        response.json(
        {
            nome: 'Mulher teste 1',
            imagem: 'htttps://github.com/simaraconceicao.png',
            minibio: 'Desenvolvedora e instrutura'
        })
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)