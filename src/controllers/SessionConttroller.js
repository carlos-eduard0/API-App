const connection = require('../database/connection');
const bcrypt = require('bcrypt');   

module.exports = {
    async login(req, res) {
        const saltRounds = 10
        const salt = bcrypt.genSaltSync(saltRounds);
        const { email, senha} = req.body;

        const empresa = await connection('empresa')
        .where('email', email)
        .select('*')
        .first();

        if(!empresa) {
            return res.status(400).json({ error: 'Empresa não cadastrada'});
        }

        bcrypt.compare (senha, empresa.senha, function (err, result ) { 
            if (result == true) { 
                return res.json(empresa);
            } else { 
                return res.status(400).json({ error: 'Senha incorreta'});
            } 
          }); 

    }
}