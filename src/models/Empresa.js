const mongoose = require("mongoose");

const PointSchema = require('./utils/PointSchema');

const EmpSchema = new mongoose.Schema({
	name: String,
	name_presidente: String,
	cnpj: Number,
	telefone: String,
	celular: String,
	email: String,
	data_criacao: Date,
	endereco: {
		rua: String,
		bairro: String,
		number: Number,
		complemento: String
	},
	id: Number,
	location: {
		type: PointSchema,
		index: '2dsphare'
	},
	services: [String]
});

module.exports = mongoose.model('Emp', EmpSchema);
