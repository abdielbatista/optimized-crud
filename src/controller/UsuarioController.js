const Usuario = require('../model/Usuario')

module.exports ={
    async index(req, res){
        const usuario = await Usuario.findAll(); //findAll - lista todos os dados
        //função retorna todos os dados
        return res.json(usuario)
    }
}