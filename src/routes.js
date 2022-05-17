const express = require('express')

//recebendo a função
const routes = express.Router();

//requisição, resposta
routes.get('/', (req, res) => {
    res.send('Olá mundo')
})

//exportando rotas
module.exports = routes;
