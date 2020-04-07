
const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const bancos = await connection('bancos').select('*');
        return res.json(bancos)
    },
};