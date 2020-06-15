// router, express;
const express =  require('express');
const multer = require("multer");
const MulterConfig = require('./config/multer');

const rotas = express.Router();

const EmpresasController = require('./controllers/EmpresaController');
const SessionController = require('./controllers/SessionConttroller');
const EmailController = require('./controllers/EmailController');
const ServicosController = require('./controllers/ServicosController');
const connection = require('./database/connection');

rotas.post('/empresa', EmpresasController.create);

rotas.post('/empresaLogo/:id_empresa', multer(MulterConfig).single('file'), async(req, res) => {
	try{ 
		const {originalname: name, size, key, location: url = ''} = req.file;
		const id_empresa = req.params.id_empresa;
		await connection('imagemlogo').insert({
			name, 
			size, 
			key,
			url,
			id_empresa,
		});

		return res.status(200).send({ message: 'Upload da imagem feita com sucesso' });
	} catch(error) {
		console.log(error);
		return res.status(400).send({ error: 'Erro com o servidor. Tente novamente' });
	}
});

rotas.post('/empresa/get', EmpresasController.get_user);
rotas.get('/empresa', EmpresasController.index);
rotas.get('/header', EmpresasController.header);

rotas.get('/teste', (req, res) => {
	return res.json({message: 'testando'})
});

rotas.post('/reset/email', EmailController.forgot);
// rotas.post('/reset/email', EmailController.index);
rotas.post('/reset/token', SessionController.check_token);
rotas.post('/reset/password', SessionController.reset_password);
rotas.post('/sessions', SessionController.login);

rotas.post('/servicos', ServicosController.create);
rotas.get('/servicos', ServicosController.index);
rotas.get('/servicos/empresa', ServicosController.indexEmpresa);
rotas.delete('/servicos/:id', ServicosController.delete);


module.exports = rotas;