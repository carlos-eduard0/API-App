function EmpresaDAO(connection) {
	this._connection = connection;
}
	
	EmpresaDAO.prototype.get_empresa = function (id_empresa, callback) {
		this._connection.query('select * from empresas where id_empresa = ' + id_empresa.id_empresa, callback);
	}

	EmpresaDAO.prototype.adicionar_empresa = function(empresa, callback) {
		this._connection.query('insert into empresas set ?', empresa, callback);
		console.log(empresa)
	}

	EmpresaDAO.prototype.get_all_empresas = function(callback){
		this._connection.query('select* from empresas', callback)
	}

	EmpresaDAO.prototype.atualizar_empresa = function(empresa, callback) {
		this._connection.query("update empresas set name_empresa ='" + empresa.name_empresa + "', name_presidente ='" + empresa.name_presidente + "', cnpj =" + empresa.cnpj + ", telefone ='" + empresa.telefone + "', email ='" + empresa.email + "', data_criacao ='" + empresa.data_criacao + "', endereco ='" + empresa.endereco + "', location =" + empresa.location + ", services ='" + empresa.services + "'  where id_empresa =" + empresa.id_empresa, callback);
	}

	EmpresaDAO.prototype.mostrar_empresa = function(id_empresa, callback){
		this._connection.query("select* from empresas where id_empresa = " + id_empresa, callback);
	}

	EmpresaDAO.prototype.deletar_empresa = function(id_empresa, callback){
		this._connection.query("delete from empresas where id_empresa = " + id_empresa.id_empresa)
	}
module.exports = function(){
	return EmpresaDAO;
}