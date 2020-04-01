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

        if(senha != confirmar_senha){
            return res.status(400).json({ error: 'As senhas não correspodem'});
        }

            await connection('empresa').insert({
                id,
                email,
                nome_empresa,
                senha,
            });
            return res.json({ id, confirmar_senha });
    },

}