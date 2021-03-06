const express = require('express');
const UsuarioController = require('./controller/UsuarioController');

//recebendo a função
const routes = express.Router();

//requisição, resposta
routes.get('/', (req, res) => {
    res.send('Olá mundo')
})

routes.get('/usuario', UsuarioController.index)
routes.get('/usuario/:id', UsuarioController.findById)
routes.post('/usuario', UsuarioController.store)
routes.delete('/usuario/:id', UsuarioController.delete)
routes.put('/usuario', UsuarioController.update)

//exportando rotas
module.exports = routes;
