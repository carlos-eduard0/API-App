// router, express;
const express =  require('express');

const rotas = express.Router();

const EmpresasController = require('./controllers/EmpresaController');
const SessionController = require('./controllers/SessionConttroller');
const EmailController = require('./controllers/EmailController');
const ServicosController = require('./controllers/ServicosController');

rotas.post('/empresa', EmpresasController.create);
rotas.post('/empresa/get', EmpresasController.get_user);
rotas.get('/empresa', EmpresasController.index);

rotas.post('/reset/email', EmailController.index);
rotas.post('/reset/token', SessionController.check_token);
rotas.post('/reset/password', SessionController.reset_password);
rotas.post('/sessions', SessionController.login);

rotas.post('/servicos', ServicosController.create);
rotas.get('/servicos', ServicosController.index);
rotas.get('/servicos/empresa', ServicosController.indexEmpresa);
rotas.delete('/servicos/:id', ServicosController.delete);


module.exports = rotas;