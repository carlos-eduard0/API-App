module.exports = function(app) {

	app.get('/add_emp', function(req,res){
		res.render('testes/add_empresa');
	})

	app.post('/adicionar/cadastrar', function(req, res){
		const empresa = req.body;

		const connection = app.config.dbconnection();
		const EmpModel = new app.app.models.EmpresaDAO(connection);
		// console.log(empresa)
		EmpModel.adicionar_empresa(empresa, function(error, result){
			res.redirect('testes/empresas')
			// console.log(error)
		})
	})

	app.get('/empresa', function(req, res){
		const connection = app.config.dbconnection();
		const EmpModel = new app.app.models.EmpresaDAO(connection);	

		if(req.query.id_empresa){
			var id_empresa = req.query;
		} else {
			console.log("não ecsiste");
			return;
		}
		

		EmpModel.get_empresa(id_empresa,function(error, result){
			// console.log(error);
			res.render('testes/empresa', {empresa: result})
		})	

	})

	app.get('/home', function(req, res){
		const connection = app.config.dbconnection();
		const EmpModel = new app.app.models.EmpresaDAO(connection);	

		EmpModel.get_all_empresas(function(error, result){
			res.render('testes/empresas', {empresas:result})
		})
	})

	app.get('/editar_emp', function(req, res){
		const connection = app.config.dbconnection();
		const EmpModel = new app.app.models.EmpresaDAO(connection);	

		var pesquisa = req.body.pesquisa;

		if(req.query.id_empresa){
			var id_empresa = req.query;
		} else {
			console.log("não ecsiste");
			return;
		}

		EmpModel.get_empresa(id_empresa, function(error, result){
			res.render("testes/editar", {empresa : result})
		})

	})

	app.post('/empresa/atualizar', function(req, res){
		const empresa = req.body;
		const id_empresa = req.body.id_empresa;

		const connection = app.config.dbconnection();
		const EmpModel = new app.app.models.EmpresaDAO(connection);
		console.log(empresa.name_empresa)
		EmpModel.atualizar_empresa(empresa, 
			EmpModel.mostrar_empresa(id_empresa, function(error, result){
				// console.log(error)
				res.redirect('/empresa?id_empresa=' + id_empresa)
			}))
	})

	app.get('/excluir_emp', function(req, res){
		const connection = app.config.dbconnection();
		const EmpModel = new app.app.models.EmpresaDAO(connection);	

		if(req.query.id_empresa){
			var id_empresa = req.query;
		} else {
			console.log("não ecsiste");
			return;
		}

		EmpModel.deletar_empresa(id_empresa, function(error, result){
			res.redirect('testes/empresas')
		})
	})
}

