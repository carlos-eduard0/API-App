exports.up = function(knex) {
    return knex.schema.createTable('empresas', function(table){
        table.string('id').primary();
        table.string('nome_dono').notNullable();
        table.string('nome_empresa').notNullable();
        table.string('email').notNullable();
        table.string('telefone').notNullable();
        table.string('cpf', 15).notNullable();
        table.string('cnpj', 19).notNullable();  
        table.string('rg').notNullable();
        table.string('orgao_emissor').notNullable();      
        table.string('cidade').notNullable();
        table.string('uf', 2).notNullable();
        table.string('senha').notNullable();
        table.string('nome_banco').notNullable();
        table.string('agencia').notNullable();
        table.string('conta').notNullable();
        table.string('digito').notNullable();
        table.string('url_imagem').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('updateCode');
        table.date('updateCode_expires');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('empresas');
};
