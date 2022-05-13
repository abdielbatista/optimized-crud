const express = require('express')

//recebendo a função de rotas
const routes = express.Router();

//requisição, reposta na rota
routes.get('/', (req, res) => {
    res.send('Olá mundo')
})

//exportando rotas
module.exports = routes;