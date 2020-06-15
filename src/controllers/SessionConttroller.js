const connection = require('../database/connection');
const bcrypt = require('bcrypt');   

module.exports = {
    async login(req, res) {
        const saltRounds = 10
        const salt = bcrypt.genSaltSync(saltRounds);
        const { email, senha} = req.body;

        const empresa = await connection('empresas')
        .where('email', email)
        .select('*')
        .first();

        if(!empresa) {
            return 'error';
        }

        bcrypt.compare (senha, empresa.senha, function (err, result ) { 
            if (result == true) { 
                return res.json(empresa.id);
            } else { 
                return 'error';
            } 
          }); 
    },

    async check_token(req, res){
        const {updateCode} = req.body;
        const today = Date.now();


        const updateCode_expires = await connection('empresas')
        .where('updateCode', updateCode)
        // .andWhere(function() {
        //   this.where('updateCode_expires', '>=', today);
        // })
        .select('updateCode_expires');

        if(parseInt(updateCode_expires) < today){
            res.status(200).send({
                message:'este link ja expirou ou é inválido',
                updateCode_expires:updateCode_expires
            });            
        } else {
            res.status(200).send({
                message: 'link ta ok'
            });
        };
    },

    async reset_password(req, res){

        const {id, senha} = req.body;
        console.log(id);

        const saltRounds = 10
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(senha, salt);



        const empresa = await connection('empresas')
        .where('id', id)
        .select('*');

        if(empresa){
            const att = await connection('empresas')
            .where('id', id)
            .update({
                senha: hash,
                updateCode: null,
                updateCode_expires: null
            });

            console.log(att);
            res.status(200).send({message: 'senha atualizada'});

        } else {
            console.log('algo de errado');
            res.status(404).json('usuario inexistente');
        }
    }    
}