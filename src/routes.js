// router, express;
const express =  require('express');
const cors = require('cors');
const rotas = express.Router();

const EmpresasController = require('./controllers/EmpresaController');
const SessionController = require('./controllers/SessionConttroller');


const corsOptions = {
    origin: 'https://www.engine-app.com/',
  }

rotas.post('/empresa', cors(corsOptions), EmpresasController.create);
rotas.get('/empresa', cors(corsOptions), EmpresasController.index);

rotas.post('/sessions', SessionController.login);




module.exports = rotas;