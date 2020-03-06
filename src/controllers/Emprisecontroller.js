const Emp = require("../models/Empresa");
const parseStringasArray = require("../utils/parseStringAsArray");

module.exports = {
    async empresa(request, response) {
        const empresas = await Emp.find()

        return response.json(empresas);
    },   

    async cadastro(request, response) {
        const { name, name_presidente, cnpj, telefone, celular, email, data_criacao, rua, bairro, number, complemento, latitude, longitude, services } = request.body;

        let empresa = await Emp.findOne({ name });

        if(!empresa){ 

        const servicesArray = await parseStringasArray(services);
            
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        }

        const endereco = {
            rua,
            bairro,
            number,
            complemento,
        }

        empresa = await Emp.create({
            name, 
            name_presidente,
            cnpj,
            telefone,
            celular, 
            email,
            data_criacao,
            endereco,
            location,
            services: servicesArray,
        });
        }
        return response.json(empresa)
    }
};  