exports.up = function(knex) {
    return knex.schema.createTable('empresas', function(table){
        table.string('id').primary();
        table.string('nome_dono').notNullable();
        table.string('nome_empresa').notNullable();
        table.string('email').notNullable();
        table.string('telefone', 11).notNullable();
        table.string('cpf', 11).notNullable();
        table.string('cnpj').notNullable();  
        table.string('rg').notNullable();
        table.string('orgao_emissor').notNullable();      
        table.string('cep', 8).notNullable();
        table.string('cidade').notNullable();
        table.string('uf', 2).notNullable();
        table.string('bairro').notNullable();
        table.string('endereco').notNullable();
        table.string('numero').notNullable();
        table.string('complemento').notNullable();
        table.string('senha').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('empresas');
};
