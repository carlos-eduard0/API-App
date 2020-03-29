const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(req, res) {
        const empresa = await connection('empresa').select('*');


        return res.json(empresa);
    },

    async create(req, res){
        const { email, nome_empresa, senha, confirmar_senha } = req.body;

        const id = crypto.randomBytes(4).toString('HEX');

        const servicoss = ["teste1", "teste2", "teste"];

        const servicosArray = servicoss ;

        if(senha != confirmar_senha){
            return res.json ({ mensagem: 'As senhas não estão corretas'});
        }

            await connection('empresa').insert({
                id,
                email,
                nome_empresa,
                senha,
                servicos: {servicosArray},
            });
            return res.json({ id, confirmar_senha, servicosArray });
    },

}