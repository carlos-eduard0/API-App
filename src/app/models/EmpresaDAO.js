function EmpresaDAO(connection) {
	this._connection = connection;
}

	EmpresaDAO.prototype.adicionar_empresa = function(empresa, callback) {
		this._connection.query('insert into Empresas set ?', empresa, callback);
	}

module.exports = function(){
	return EmpresaDAO;
}