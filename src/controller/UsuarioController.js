const Usuario = require('../model/Usuario')

module.exports ={
    async index(req, res){
        const usuario = await Usuario.findAll(); //lista todos os dados
        //função retorna todos os dados
        return res.json(usuario)
    },

    async findById(req, res){
        const { id } = req.params;
        const usuario = await Usuario.findAll({
            where: {
                id: id
            }
        }); //lista todos os dados
        return res.json(usuario)
    },

    async store(req, res){
        const {nome, senha} = req.body;
        const usuario = await Usuario.create({
            nome, senha
        }); 
        return res.json(usuario)
    },

    async delete(req, res){
        const { id } = req.params;
        const usuario = await Usuario.destroy({
            where: {
                id: id
            }
        }); //lista todos os dados
        return res.json(usuario)
    },

    async update(req, res){
        const {id, nome, senha} = req.body;
        const usuario = await Usuario.update({
            nome, senha
        }, {
            where: {
                id: id
            }
        }); 
        return res.json(usuario)
    }
}
