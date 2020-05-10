const crypto = require('crypto');
const bcrypt = require('bcrypt');   
const connection = require('../database/connection');

module.exports = {

    async index(req, res) {
        const empresa = await connection('empresas').select('*');


        return res.json(empresa);
    },

    async create(req, res) {
        try {
            const { nome, senha, confirmar_senha, nome_empresa, email, telefone, cpf, cnpj, rg, orgao_emissor, cep, cidade, uf, bairro, endereco, numero, complemento, nome_banco, agencia, conta, digito } = req.body;

            const id = crypto.randomBytes(4).toString('HEX');

            const saltRounds = 10
            const salt = bcrypt.genSaltSync(saltRounds);
            const hash = bcrypt.hashSync(senha, salt);

            if (senha != confirmar_senha) {
                return res.send({ message: 'senhas não conferem' });
            }

            const empresa = await connection('empresas')
                .where('nome_empresa', nome_empresa)
                .select('*')
                .first();

            if(!empresa) {

            await connection('empresas').insert({
                id,
                nome_dono: nome,
                nome_empresa,
                email,
                telefone,
                cpf,
                cnpj,
                rg,
                orgao_emissor,
                cep,
                cidade,
                uf,
                bairro,
                endereco,
                numero,
                complemento,
                senha:hash,
                nome_banco,
                agencia,
                conta,
                digito,
            });

            return res.status(200).send({ message: "cadastrado", id });
            } else {
                return res.status(200).send({ message: "Empresa ja cadastrada"});    
            }
        } catch (error) {
            console.log(error);
            return res.status(400).send({ error: 'alguma coisa errada' });
        }   
    },

    async get_user(req, res){
        const {id} = req.body;

        const empresa = await connection('empresas')
            .where('id', id)
            .select('*')
            .first();

        if(empresa){
            return res.json(empresa);
        } else {
            return res.status(404).send({ error: 'not found' });
        }
    }
}