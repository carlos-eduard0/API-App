const connection = require('../database/connection');

module.exports = {
    async login(req, res) {
        const { email, senha} = req.body;

        const empresa = await connection('empresa')
        .where('email', email)
        .select('*')
        .first();

        if(!empresa) {
            return res.status(400).json({ error: 'Empresa não cadastrada'});
        }

        if(empresa.senha != senha) {
            return res.status(400).json({ error: 'Senha incorreta'});
        }

        return res.json(empresa);
    }
}