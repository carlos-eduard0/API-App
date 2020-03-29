// router, express;
const express =  require('express');

const rotas = express.Router();

const EmpresasController = require('./controllers/EmpresaController');
const SessionController = require('./controllers/SessionConttroller');


rotas.post('/empresa', EmpresasController.create);
rotas.get('/empresa', EmpresasController.index);

rotas.post('/sessions', SessionController.login);




module.exports = rotas;