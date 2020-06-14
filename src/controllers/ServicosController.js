const connection = require ("../database/connection");

module.exports = {

    async index(req, res){
        const servicos = await connection('servicos_empresa').select('*');
        
        return res.json(servicos);
    },

    async indexEmpresa(req, res){
        const id_empresa = req.headers.authorization;

        const servicos = await connection('servicos_empresa')
            .where('id_empresa', id_empresa)
            .select('*')
        
        return res.json(servicos);
    },


    async create(req, res) {
        try { 
        const { nome_servico, valor_servico, descricao, categoria, numero_vagas } = req.body;
        const id_empresa = req.headers.authorization;

        const servicos = await connection('servicos_empresa')
                .where('nome_servico', nome_servico)
                .where('categoria', categoria)
                .where('id_empresa', id_empresa)
                .select('*')
                .first();

        if(!servicos) {

        await connection('servicos_empresa').insert({
            nome_servico,
            valor_servico,
            descricao, 
            categoria,
            id_empresa,
        });
        return res.status(200).send({ message: "Serviço Cadastrado"});
        } else {
            return res.status(200).send({ message: "Servico ja cadastrado"});
        }
    } catch (error) {
        return res.status(400).send({ error: 'alguma coisa errada. Tente novamente' });
    }

    },


    async delete(req, res) {
        const { id } = req.params;
        const id_empresa = req.headers.authorization;

        const servicos = await connection('servicos_empresa')
            .where('id', id)
            .select('id_empresa')
            .first();
        
        if (servicos.id_empresa != id_empresa){
            return res.status(401).json({ error: 'Operação não autorizada.'});
        }

        await connection('servicos_empresa').where('id', id).delete();

        return res.status(204).send({ error: 'Serviço deletado com sucesso.'})
    }
}