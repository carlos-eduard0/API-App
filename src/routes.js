const { Router } = require("express");

const routes = Router();

const Emp = require('./models/Empresa');



routes.get('/', (request, response) => {
	console.log("tatu do bem");
	return response.json({message:'aaaa'});
})

routes.get('/Cadastro', (request, response) => {
	response.sendFile(__dirname + '/teste.html');
})

routes.post('/Cadastrar', async (request, response) => {

	const { name, name_presidente, cnpj, telefone, celular, email, data_criacao, endereco, id, latitude, longitude, services } = request.body


	const location = {
		type: 'Point',
		coordinates: [latitude, longitude],
	}

	const Empresa = await Emp.create({
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
		services,
	});

	console.log(Empresa)
})

module.exports = routes;