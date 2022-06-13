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
    }
}
