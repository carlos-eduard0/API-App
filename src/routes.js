// router, express;
const express =  require('express');

const rotas = express.Router();

const EmpresasController = require('./controllers/EmpresaController');
const SessionController = require('./controllers/SessionConttroller');
const BancosController = require('./controllers/BancosController');
const EmailController = require('./controllers/EmailController');

rotas.post('/empresa', EmpresasController.create);
rotas.post('/empresa/get', EmpresasController.get_user);
rotas.get('/empresa', EmpresasController.index);
rotas.post('/reset/email', EmailController.index);
rotas.post('/reset/token', SessionController.check_token);
rotas.post('/reset/password', SessionController.reset_password);

rotas.post('/sessions', SessionController.login);

rotas.get('/bancos', BancosController.index);


module.exports = rotas;