const { Router } = require("express");
const Emprisecontroller = require('./controllers/Emprisecontroller');
const Searchcontroller = require("./controllers/Searchcontroler");

const routes = Router();

routes.post('/Cadastrar', Emprisecontroller.cadastro);
//routes.get('/Empresas', Emprisecontroller.empresas);

routes.post('/Busca', Searchcontroller.index);

module.exports = routes;    