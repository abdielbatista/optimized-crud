const express = require('express');
const UsuarioController = require('./controller/UsuarioController');

//recebendo a função
const routes = express.Router();

//requisição, resposta
routes.get('/', (req, res) => {
    res.send('Olá mundo')
})

routes.get('/usuario', UsuarioController.index)

//exportando rotas
module.exports = routes;
