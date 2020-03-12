module.exports = function(app) {

	app.get('/teste', function(req, res){
		res.render('./teste')
	})

	app.post('/adicionar/cadastrar', function(req, res){
		const empresa = req.body;

		var connection = app.config.dbconnection();
		var EmpModel = new app.app.models.EmpresaDAO(connection);
		// console.log("aa")
		EmpModel.adicionar_empresa(empresa, function(error, result){
			console.log(empresa)
		})
	})
}