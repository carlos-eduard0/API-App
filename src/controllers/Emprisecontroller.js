const Empresa = require("../models/Empresa");
const parseStringasArray = require("../utils/parseStringAsArray");

module.exports = {
    async empresa(request, response) {
        const empresas = await Empresa.find()

        return response.json(empresas);
    },   

    async cadastro(request, response) {
        const { name, name_presidente, cnpj, telefone, celular, email, data_criacao, rua, bairro, number, complemento, latitude, longitude, services}

        const servicesArray = parseStringasArray(services);

        const location = {
            type = 'Point',
            coordinate: [longitude, latitude],
        }

        const endereco = {
            rua,
            bairro,
            number,
            complemento,
        }

        empresa = await Empresa.create({
            name, 
            name_presidente,
            cnpj,
            telefone,
            celular, 
            email,
            data_criacao,
            endereco,
            id,
            location,
            services: servicesArray,
        });
        return response.json(empresa)
    }
}
