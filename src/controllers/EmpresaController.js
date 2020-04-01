const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(req, res) {
        const empresa = await connection('empresa').select('*');


        return res.json(empresa);
    },

    async create(req, res) {
        const { nome_empresa, email, senha, confirmar_senha } = req.body;

        const id = crypto.randomBytes(4).toString('HEX');

        if (senha != confirmar_senha) {
            return res.json({ mensagem: 'As senhas não estão corretas' });
        }

        await connection('empresa').insert({
            id,
            nome_empresa,
            email,
            senha,
        });
        return res.json({ id, confirmar_senha });
    },

}