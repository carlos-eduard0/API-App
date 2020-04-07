// router, express;
const express =  require('express');

const rotas = express.Router();

const EmpresasController = require('./controllers/EmpresaController');
const SessionController = require('./controllers/SessionConttroller');
const BancosController = require('./controllers/BancosController');

rotas.post('/empresa', EmpresasController.create);
rotas.get('/empresa', EmpresasController.index);

rotas.post('/sessions', SessionController.login);

rotas.get('/bancos', BancosController.index);


module.exports = rotas;